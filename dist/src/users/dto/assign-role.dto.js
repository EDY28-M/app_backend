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
exports.AssignRoleDto = exports.RoleScopeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var RoleScopeDto;
(function (RoleScopeDto) {
    RoleScopeDto["PLATFORM"] = "platform";
    RoleScopeDto["MERCHANT"] = "merchant";
    RoleScopeDto["STORE_BRANCH"] = "store_branch";
})(RoleScopeDto || (exports.RoleScopeDto = RoleScopeDto = {}));
class AssignRoleDto {
    role_code;
    scope_type;
    scope_id;
}
exports.AssignRoleDto = AssignRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'customer', description: 'Código del rol' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AssignRoleDto.prototype, "role_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RoleScopeDto, example: 'platform' }),
    (0, class_validator_1.IsEnum)(RoleScopeDto),
    __metadata("design:type", String)
], AssignRoleDto.prototype, "scope_type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID del merchant o branch (si aplica)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AssignRoleDto.prototype, "scope_id", void 0);
//# sourceMappingURL=assign-role.dto.js.map