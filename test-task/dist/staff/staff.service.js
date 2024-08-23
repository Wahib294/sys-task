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
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const staff_entity_1 = require("./entities/staff.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcryptjs");
const role_service_1 = require("../role/role.service");
let StaffService = class StaffService {
    constructor(roleService, staffRepository) {
        this.roleService = roleService;
        this.staffRepository = staffRepository;
    }
    async create(createStaffDto) {
        let staff = new staff_entity_1.Staff();
        let role = await this.roleService.findOne(createStaffDto.role);
        console.log(createStaffDto.role);
        staff.id = createStaffDto.id;
        staff.username = createStaffDto.username;
        staff.email = createStaffDto.email;
        const salt = await bcrypt.genSalt();
        createStaffDto.password = await bcrypt.hash(createStaffDto.password, salt);
        staff.password = createStaffDto.password;
        staff.role = role;
        return this.staffRepository.save(staff);
    }
    async findAll() {
        return this.staffRepository.find({ relations: ['role'] });
    }
    async findOne(id) {
        return this.staffRepository.findOne({ where: { id: id }, relations: ['role'] });
    }
    async update(id, updateStaffDto) {
        let staff = new staff_entity_1.Staff();
        let role = await this.roleService.findOne(updateStaffDto.role);
        staff.id = id;
        staff.username = updateStaffDto.username;
        staff.email = updateStaffDto.email;
        staff.password = updateStaffDto.password;
        staff.role = role;
        return this.staffRepository.save(staff);
    }
    remove(id) {
        return this.staffRepository.delete(id);
    }
    async findbyUsername(username) {
        return this.staffRepository.findOne({
            where: { username: username },
            relations: ['role'],
        });
    }
};
exports.StaffService = StaffService;
exports.StaffService = StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(staff_entity_1.Staff)),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        typeorm_1.Repository])
], StaffService);
//# sourceMappingURL=staff.service.js.map