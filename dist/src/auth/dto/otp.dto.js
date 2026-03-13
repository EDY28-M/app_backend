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
exports.VerifyOtpDto = exports.SendOtpDto = exports.OtpChannelDto = exports.OtpPurposeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var OtpPurposeDto;
(function (OtpPurposeDto) {
    OtpPurposeDto["REGISTER"] = "register";
    OtpPurposeDto["LOGIN"] = "login";
    OtpPurposeDto["VERIFY_PHONE"] = "verify_phone";
    OtpPurposeDto["RESET_PASSWORD"] = "reset_password";
})(OtpPurposeDto || (exports.OtpPurposeDto = OtpPurposeDto = {}));
var OtpChannelDto;
(function (OtpChannelDto) {
    OtpChannelDto["SMS"] = "sms";
    OtpChannelDto["WHATSAPP"] = "whatsapp";
    OtpChannelDto["EMAIL"] = "email";
})(OtpChannelDto || (exports.OtpChannelDto = OtpChannelDto = {}));
class SendOtpDto {
    target;
    channel;
    purpose;
}
exports.SendOtpDto = SendOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+51962345678', description: 'Teléfono o email destino' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendOtpDto.prototype, "target", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: OtpChannelDto, example: 'sms' }),
    (0, class_validator_1.IsEnum)(OtpChannelDto),
    __metadata("design:type", String)
], SendOtpDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: OtpPurposeDto, example: 'login' }),
    (0, class_validator_1.IsEnum)(OtpPurposeDto),
    __metadata("design:type", String)
], SendOtpDto.prototype, "purpose", void 0);
class VerifyOtpDto {
    target;
    code;
    purpose;
}
exports.VerifyOtpDto = VerifyOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+51962345678' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "target", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456' }),
    (0, class_validator_1.Matches)(/^\d{6}$/, { message: 'El código OTP debe ser de 6 dígitos' }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: OtpPurposeDto, example: 'login' }),
    (0, class_validator_1.IsEnum)(OtpPurposeDto),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "purpose", void 0);
//# sourceMappingURL=otp.dto.js.map