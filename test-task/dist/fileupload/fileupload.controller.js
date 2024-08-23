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
exports.FileuploadController = void 0;
const common_1 = require("@nestjs/common");
const fileupload_service_1 = require("./fileupload.service");
const create_fileupload_dto_1 = require("./dto/create-fileupload.dto");
const update_fileupload_dto_1 = require("./dto/update-fileupload.dto");
let FileuploadController = class FileuploadController {
    constructor(fileuploadService) {
        this.fileuploadService = fileuploadService;
    }
    create(createFileuploadDto) {
        return this.fileuploadService.create(createFileuploadDto);
    }
    findAll() {
        return this.fileuploadService.findAll();
    }
    findOne(id) {
        return this.fileuploadService.findOne(+id);
    }
    update(id, updateFileuploadDto) {
        return this.fileuploadService.update(+id, updateFileuploadDto);
    }
    remove(id) {
        return this.fileuploadService.remove(+id);
    }
};
exports.FileuploadController = FileuploadController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fileupload_dto_1.CreateFileuploadDto]),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fileupload_dto_1.UpdateFileuploadDto]),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "remove", null);
exports.FileuploadController = FileuploadController = __decorate([
    (0, common_1.Controller)('fileupload'),
    __metadata("design:paramtypes", [fileupload_service_1.FileuploadService])
], FileuploadController);
//# sourceMappingURL=fileupload.controller.js.map