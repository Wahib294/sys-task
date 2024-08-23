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
exports.BugReport = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("../../staff/entities/staff.entity");
const fileupload_entity_1 = require("../../fileupload/entities/fileupload.entity");
let BugReport = class BugReport {
};
exports.BugReport = BugReport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BugReport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], BugReport.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BugReport.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BugReport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.assignedBugReports),
    __metadata("design:type", Number)
], BugReport.prototype, "assignee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.reportedBugReports),
    __metadata("design:type", Number)
], BugReport.prototype, "reporter", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BugReport.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BugReport.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fileupload_entity_1.FileUpload, fileUpload => fileUpload.bugReportId),
    __metadata("design:type", Array)
], BugReport.prototype, "fileUploads", void 0);
exports.BugReport = BugReport = __decorate([
    (0, typeorm_1.Entity)("bugreport")
], BugReport);
//# sourceMappingURL=bugreport.entity.js.map