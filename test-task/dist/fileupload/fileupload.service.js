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
exports.FileuploadService = void 0;
const common_1 = require("@nestjs/common");
const fileupload_entity_1 = require("./entities/fileupload.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bugreport_service_1 = require("../bugreport/bugreport.service");
let FileuploadService = class FileuploadService {
    constructor(FileUploadRepository, bugreportService) {
        this.FileUploadRepository = FileUploadRepository;
        this.bugreportService = bugreportService;
    }
    async create(createFileuploadDto) {
        let fileUpload = new fileupload_entity_1.FileUpload();
        let bugReport = await this.bugreportService.findBOne(createFileuploadDto.bugReportId);
        fileUpload.id = createFileuploadDto.id;
        fileUpload.filename = createFileuploadDto.filename;
        fileUpload.filepath = createFileuploadDto.filepath;
        fileUpload.bugReportId = bugReport.id;
        return this.FileUploadRepository.save(fileUpload);
    }
    findAll() {
        return this.FileUploadRepository.find();
    }
    findOne(id) {
        return this.FileUploadRepository.find({ where: { bugReportId: id } });
    }
    async update(id, updateFileuploadDto) {
        let fileUpload = new fileupload_entity_1.FileUpload();
        let bugReport = await this.bugreportService.findBOne(updateFileuploadDto.bugReportId);
        fileUpload.id = id;
        fileUpload.filename = updateFileuploadDto.filename;
        fileUpload.filepath = updateFileuploadDto.filepath;
        fileUpload.bugReportId = bugReport.id;
        return this.FileUploadRepository.save(fileUpload);
    }
    remove(id) {
        return `This action removes a #${id} fileupload`;
    }
};
exports.FileuploadService = FileuploadService;
exports.FileuploadService = FileuploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fileupload_entity_1.FileUpload)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        bugreport_service_1.BugreportService])
], FileuploadService);
//# sourceMappingURL=fileupload.service.js.map