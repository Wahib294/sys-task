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
exports.BugreportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bugreport_entity_1 = require("./entities/bugreport.entity");
const staff_service_1 = require("../staff/staff.service");
let BugreportService = class BugreportService {
    constructor(bugReportRepository, staffService) {
        this.bugReportRepository = bugReportRepository;
        this.staffService = staffService;
    }
    async create(createBugreportDto) {
        let bugReport = new bugreport_entity_1.BugReport();
        bugReport.id = createBugreportDto.id;
        bugReport.title = createBugreportDto.title;
        bugReport.description = createBugreportDto.description;
        bugReport.status = createBugreportDto.status;
        bugReport.assignee = createBugreportDto.assignee;
        bugReport.reporter = createBugreportDto.reporter;
        bugReport.createdAt = createBugreportDto.createdAt;
        bugReport.updatedAt = createBugreportDto.updatedAt;
        return this.bugReportRepository.save(bugReport);
    }
    findAll() {
        return this.bugReportRepository.find({
            where: {},
            relations: ['reporter', 'assignee'],
        });
    }
    findBOne(id) {
        return this.bugReportRepository.findOne({ where: { id: id }, relations: ['reporter', 'assignee'] });
    }
    async findOne(staffId) {
        const staff = await this.staffService.findOne(staffId);
        if (!staff) {
            throw new common_1.NotFoundException('Staff member not found');
        }
        if (staff.role.name === 'QA') {
            return this.bugReportRepository.find({
                where: { reporter: staff.id },
                relations: ['reporter', 'assignee'],
            });
        }
        else if (staff.role.name === 'Developer') {
            return this.bugReportRepository.find({
                where: { assignee: staff.id },
                relations: ['reporter', 'assignee'],
            });
        }
        else {
            throw new common_1.NotFoundException('Staff role not recognized');
        }
    }
    async update(id, updateBugreportDto) {
        let bugReport = new bugreport_entity_1.BugReport();
        let assignee = await this.staffService.findOne(updateBugreportDto.assignee);
        let reporter = await this.staffService.findOne(updateBugreportDto.reporter);
        bugReport.id = id;
        bugReport.title = updateBugreportDto.title;
        bugReport.description = updateBugreportDto.description;
        bugReport.status = updateBugreportDto.status;
        bugReport.assignee = assignee.id;
        bugReport.reporter = reporter.id;
        bugReport.createdAt = updateBugreportDto.createdAt;
        bugReport.updatedAt = updateBugreportDto.updatedAt;
        return this.bugReportRepository.save(bugReport);
    }
    remove(id) {
        return this.bugReportRepository.delete(id);
    }
};
exports.BugreportService = BugreportService;
exports.BugreportService = BugreportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bugreport_entity_1.BugReport)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        staff_service_1.StaffService])
], BugreportService);
//# sourceMappingURL=bugreport.service.js.map