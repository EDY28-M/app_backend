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
exports.StoresController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const stores_service_1 = require("./stores.service");
const decorators_1 = require("../common/decorators");
let StoresController = class StoresController {
    storesService;
    constructor(storesService) {
        this.storesService = storesService;
    }
    getCategories() {
        return this.storesService.getCategories();
    }
    findPopular(category) {
        return this.storesService.findPopular(category);
    }
    getCatalog(storeId, branchId) {
        return this.storesService.getCatalogItems(storeId, branchId);
    }
    findOne(slug) {
        return this.storesService.findOne(slug);
    }
};
exports.StoresController = StoresController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar categorías de negocio' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "getCategories", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Tiendas populares cerca' }),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "findPopular", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('catalog'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener catálogo de sucursal' }),
    __param(0, (0, common_1.Query)('store_id')),
    __param(1, (0, common_1.Query)('branch_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "getCatalog", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('by-slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener tienda por slug' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "findOne", null);
exports.StoresController = StoresController = __decorate([
    (0, swagger_1.ApiTags)('Stores'),
    (0, common_1.Controller)('stores'),
    __metadata("design:paramtypes", [stores_service_1.StoresService])
], StoresController);
//# sourceMappingURL=stores.controller.js.map