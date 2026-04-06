import { VolunteersService } from './volunteers.service';
import { AuthService } from '../auth/auth.service';
import { UpdateProfileDto, ChangeEmailDto, VerifyEmailChangeDto, ChangePasswordDto, DeleteAccountDto } from '../auth/dto/auth.dto';
export declare class VolunteersController {
    private volunteersService;
    private authService;
    constructor(volunteersService: VolunteersService, authService: AuthService);
    findAll(name?: string, skills?: string): Promise<any>;
    findOne(id: string): Promise<any>;
    private getUserIdFromSession;
    getProfile(authHeader: string): Promise<any>;
    updateProfile(authHeader: string, data: UpdateProfileDto): Promise<any>;
    changeEmail(authHeader: string, data: ChangeEmailDto): Promise<{
        message: string;
    }>;
    verifyEmailChange(authHeader: string, data: VerifyEmailChangeDto): Promise<{
        message: string;
    }>;
    changePassword(authHeader: string, data: ChangePasswordDto): Promise<{
        message: string;
    }>;
    deleteAccount(authHeader: string, data: DeleteAccountDto): Promise<{
        message: string;
    }>;
}
