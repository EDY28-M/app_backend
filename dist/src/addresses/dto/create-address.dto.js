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
exports.CreateAddressDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAddressDto {
    label;
    contact_name;
    contact_phone;
    country_code;
    region;
    province;
    district;
    city;
    address_line1;
    address_line2;
    reference;
    latitude;
    longitude;
    is_default;
}
exports.CreateAddressDto = CreateAddressDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Casa' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Juan Pérez' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "contact_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+51962345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "contact_phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'PE', default: 'PE' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "country_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Huánuco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Leoncio Prado' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rupa-Rupa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tingo María' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jr. Callao 123' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address_line1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Piso 2' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address_line2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Frente al parque central' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -9.295 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -75.998 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAddressDto.prototype, "is_default", void 0);
//# sourceMappingURL=create-address.dto.js.map