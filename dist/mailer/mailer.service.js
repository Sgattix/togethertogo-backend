"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MailerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
let MailerService = MailerService_1 = class MailerService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(MailerService_1.name);
        this.initializeTransporter();
    }
    initializeTransporter() {
        const smtpHost = this.configService.get('SMTP_HOST');
        const smtpPort = this.configService.get('SMTP_PORT');
        const smtpUser = this.configService.get('SMTP_USER');
        const smtpPassword = this.configService.get('SMTP_PASSWORD');
        this.transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });
        this.transporter.verify((error) => {
            if (error) {
                this.logger.error('SMTP connection error:', error);
            }
            else {
                this.logger.log('SMTP connection successful');
            }
        });
    }
    async sendEmail(options) {
        try {
            const from = this.configService.get('SMTP_FROM');
            await this.transporter.sendMail({
                from,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
                cc: options.cc,
                bcc: options.bcc,
            });
            this.logger.log(`Email sent to ${options.to}: ${options.subject}`);
        }
        catch (error) {
            this.logger.error(`Failed to send email to ${options.to}:`, error);
            throw error;
        }
    }
    renderTemplate(templateName, variables) {
        const templatePath = path.join(__dirname, '../../templates', `${templateName}.html`);
        const templateContent = fs.readFileSync(templatePath, 'utf-8');
        return Object.entries(variables).reduce((result, [key, value]) => {
            const token = `{{${key}}}`;
            return result.split(token).join(value);
        }, templateContent);
    }
    async sendVerificationEmail(options) {
        const html = this.renderTemplate('verification-email', {
            name: options.name,
            verificationLink: options.verificationLink,
            verificationCode: options.verificationCode,
        });
        await this.sendEmail({
            to: options.to,
            subject: 'Verify Your TogetherToGo Email',
            html,
            text: `Please verify your email using this code: ${options.verificationCode}`,
        });
    }
    async sendWelcomeEmail(email, name) {
        const html = this.renderTemplate('welcome-email', {
            name,
        });
        await this.sendEmail({
            to: email,
            subject: 'Welcome to TogetherToGo',
            html,
            text: `Welcome to TogetherToGo, ${name}! Thank you for registering.`,
        });
    }
    async sendApprovalRequestEmail(adminEmail, sprintTitle, coordinatorName, sprintId) {
        const frontendUrl = this.configService.get('FRONTEND_URL') || 'http://localhost:3000';
        const approvalLink = `${frontendUrl}/sprints/${sprintId}`;
        const html = this.renderTemplate('approval-request', {
            coordinatorName,
            sprintTitle,
            approvalLink,
        });
        await this.sendEmail({
            to: adminEmail,
            subject: `New Sprint Approval Request: ${sprintTitle}`,
            html,
            text: `New sprint approval request for: ${sprintTitle}`,
        });
    }
    async sendApprovalResponseEmail(coordinatorEmail, sprintTitle, approved, notes) {
        const status = approved ? 'Approved' : 'Rejected';
        const statusColor = approved ? '#4CAF50' : '#f44336';
        const notesSection = notes ? `<p><strong>Notes:</strong> ${notes}</p>` : '';
        const html = this.renderTemplate('approval-response', {
            sprintTitle,
            status,
            statusColor,
            notesSection,
        });
        await this.sendEmail({
            to: coordinatorEmail,
            subject: `Sprint ${status}: ${sprintTitle}`,
            html,
            text: `Your sprint has been ${status.toLowerCase()}: ${sprintTitle}`,
        });
    }
    async sendTaskAssignmentEmail(volunteerEmail, volunteerName, taskTitle, sprintTitle, dueDate) {
        const formattedDate = dueDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const html = this.renderTemplate('task-assignment', {
            volunteerName,
            taskTitle,
            sprintTitle,
            dueDate: formattedDate,
        });
        await this.sendEmail({
            to: volunteerEmail,
            subject: `New Task Assigned: ${taskTitle}`,
            html,
            text: `You have been assigned a new task: ${taskTitle}`,
        });
    }
    async sendPasswordResetEmail(options) {
        const html = this.renderTemplate('password-reset', {
            name: options.name,
            resetLink: options.resetLink,
            resetCode: options.resetCode,
        });
        await this.sendEmail({
            to: options.to,
            subject: 'Reset Your TogetherToGo Password',
            html,
            text: `Reset your password using this code: ${options.resetCode}. The link expires in 1 hour.`,
        });
    }
    async sendPasswordChangedEmail(email, name) {
        const html = this.renderTemplate('password-changed', {
            name,
        });
        await this.sendEmail({
            to: email,
            subject: 'Your TogetherToGo Password Has Been Changed',
            html,
            text: `Your password has been successfully changed. If you did not make this change, please contact support immediately.`,
        });
    }
    async sendEmailChangeVerification(options) {
        const html = `
      <h2>Verify Your New Email Address</h2>
      <p>Hi ${options.name},</p>
      <p>We received a request to change your email address. Please verify your new email by clicking the link below:</p>
      <p><a href="${options.verificationLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email</a></p>
      <p>Or use this verification code: <strong>${options.verificationCode}</strong></p>
      <p>This link expires in 15 minutes.</p>
      <p>If you did not request this change, you can ignore this email.</p>
    `;
        await this.sendEmail({
            to: options.to,
            subject: 'Verify Your New Email Address',
            html,
            text: `Please verify your new email using this code: ${options.verificationCode}. This link expires in 15 minutes.`,
        });
    }
    async sendEmailChangedConfirmation(email, name) {
        const html = `
      <h2>Email Changed Successfully</h2>
      <p>Hi ${name},</p>
      <p>Your email address has been successfully updated to ${email}.</p>
      <p>If you did not make this change, please contact support immediately.</p>
      <p>Safe regards,<br>The TogetherToGo Team</p>
    `;
        await this.sendEmail({
            to: email,
            subject: 'Your Email Address Has Been Changed',
            html,
            text: `Your email address has been successfully updated. If you did not make this change, please contact support immediately.`,
        });
    }
};
exports.MailerService = MailerService;
exports.MailerService = MailerService = MailerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailerService);
//# sourceMappingURL=mailer.service.js.map