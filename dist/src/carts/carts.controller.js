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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const carts_service_1 = require("./carts.service");
const dto_1 = require("./dto");
const decorators_1 = require("../common/decorators");
let CartsController = class CartsController {
    cartsService;
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    getMyCarts(userId) {
        return this.cartsService.getMyCarts(userId);
    }
    getOrCreate(userId, storeId, branchId) {
        return this.cartsService.getOrCreateCart(userId, storeId, branchId);
    }
    addItem(userId, dto) {
        return this.cartsService.addItem(userId, dto);
    }
    updateItem(userId, itemId, dto) {
        return this.cartsService.updateItem(userId, itemId, dto);
    }
    removeItem(userId, itemId) {
        return this.cartsService.removeItem(userId, itemId);
    }
};
exports.CartsController = CartsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener carritos activos del usuario' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "getMyCarts", null);
__decorate([
    (0, common_1.Get)('current'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener o crear carrito para store/branch' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('store_id')),
    __param(2, (0, common_1.Query)('branch_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "getOrCreate", null);
__decorate([
    (0, common_1.Post)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar item al carrito' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.AddCartItemDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "addItem", null);
__decorate([
    (0, common_1.Patch)('items/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar cantidad o notas de item' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, dto_1.UpdateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "updateItem", null);
__decorate([
    (0, common_1.Delete)('items/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar item del carrito' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "removeItem", null);
exports.CartsController = CartsController = __decorate([
    (0, swagger_1.ApiTags)('Carts'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsController);
//# sourceMappingURL=carts.controller.js.map