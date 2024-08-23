"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileuploadModule = void 0;
const common_1 = require("@nestjs/common");
const fileupload_service_1 = require("./fileupload.service");
const fileupload_controller_1 = require("./fileupload.controller");
const typeorm_1 = require("@nestjs/typeorm");
const fileupload_entity_1 = require("./entities/fileupload.entity");
const bugreport_module_1 = require("../bugreport/bugreport.module");
let FileuploadModule = class FileuploadModule {
};
exports.FileuploadModule = FileuploadModule;
exports.FileuploadModule = FileuploadModule = __decorate([
    (0, common_1.Module)({
        imports: [bugreport_module_1.BugreportModule, typeorm_1.TypeOrmModule.forFeature([fileupload_entity_1.FileUpload])],
        controllers: [fileupload_controller_1.FileuploadController],
        providers: [fileupload_service_1.FileuploadService,],
    })
], FileuploadModule);
//# sourceMappingURL=fileupload.module.js.map