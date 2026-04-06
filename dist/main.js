"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    const port = process.env.API_PORT || 3001;
    await app.listen(port, '0.0.0.0', () => {
        console.log(`Backend running on http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map