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
exports.Staff = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../../role/entities/role.entity");
const bugreport_entity_1 = require("../../bugreport/entities/bugreport.entity");
let Staff = class Staff {
};
exports.Staff = Staff;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Staff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Staff.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Staff.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Staff.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.staff),
    __metadata("design:type", role_entity_1.Role)
], Staff.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bugreport_entity_1.BugReport, (bugReport) => bugReport.assignee),
    __metadata("design:type", Array)
], Staff.prototype, "assignedBugReports", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bugreport_entity_1.BugReport, (bugReport) => bugReport.reporter),
    __metadata("design:type", Array)
], Staff.prototype, "reportedBugReports", void 0);
exports.Staff = Staff = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['username', 'email'])
], Staff);
//# sourceMappingURL=staff.entity.js.map