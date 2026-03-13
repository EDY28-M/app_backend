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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = exports.AuthProviderDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var AuthProviderDto;
(function (AuthProviderDto) {
    AuthProviderDto["PHONE"] = "phone";
    AuthProviderDto["EMAIL"] = "email";
    AuthProviderDto["GOOGLE"] = "google";
})(AuthProviderDto || (exports.AuthProviderDto = AuthProviderDto = {}));
class RegisterDto {
    first_name;
    last_name;
    auth_provider;
    phone_e164;
    email;
    password;
    google_token;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Pérez' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: AuthProviderDto, example: 'phone' }),
    (0, class_validator_1.IsEnum)(AuthProviderDto),
    __metadata("design:type", String)
], RegisterDto.prototype, "auth_provider", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+51962345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\+[1-9]\d{6,14}$/, {
        message: 'phone_e164 debe estar en formato E.164 (ej: +51962345678)',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone_e164", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'juan@correo.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'MiPassword123', minLength: 6 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Google ID token' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "google_token", void 0);
//# sourceMappingURL=register.dto.js.map