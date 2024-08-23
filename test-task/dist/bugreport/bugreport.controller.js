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
exports.BugreportController = void 0;
const common_1 = require("@nestjs/common");
const bugreport_service_1 = require("./bugreport.service");
const create_bugreport_dto_1 = require("./dto/create-bugreport.dto");
const update_bugreport_dto_1 = require("./dto/update-bugreport.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let BugreportController = class BugreportController {
    constructor(bugreportService) {
        this.bugreportService = bugreportService;
    }
    create(createBugreportDto) {
        return this.bugreportService.create(createBugreportDto);
    }
    findAll() {
        return this.bugreportService.findAll();
    }
    async findOne(id) {
        return await this.bugreportService.findOne(+id);
    }
    async findBOne(id) {
        return await this.bugreportService.findBOne(+id);
    }
    update(id, updateBugreportDto) {
        return this.bugreportService.update(+id, updateBugreportDto);
    }
    remove(id) {
        return this.bugreportService.remove(+id);
    }
};
exports.BugreportController = BugreportController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bugreport_dto_1.CreateBugreportDto]),
    __metadata("design:returntype", void 0)
], BugreportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BugreportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BugreportController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('bug/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BugreportController.prototype, "findBOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bugreport_dto_1.UpdateBugreportDto]),
    __metadata("design:returntype", void 0)
], BugreportController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BugreportController.prototype, "remove", null);
exports.BugreportController = BugreportController = __decorate([
    (0, common_1.Controller)('bugreport'),
    __metadata("design:paramtypes", [bugreport_service_1.BugreportService])
], BugreportController);
//# sourceMappingURL=bugreport.controller.js.map