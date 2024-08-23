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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const staff_service_1 = require("../staff/staff.service");
const console_1 = require("console");
let AuthService = class AuthService {
    constructor(staffService, jwtService) {
        this.staffService = staffService;
        this.jwtService = jwtService;
    }
    async validateUser(username, password, role) {
        const user = await this.staffService.findbyUsername(username);
        console.log(user.role);
        if (user &&
            user.role.name === role &&
            (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        throw new common_1.HttpException({
            status: common_1.HttpStatus.FORBIDDEN,
            error: 'Username, Password or Role is incorrect',
        }, common_1.HttpStatus.FORBIDDEN, {
            cause: console_1.error,
        });
    }
    async login(user) {
        const payload = {
            username: user.username,
            sub: user.id,
            role: user.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [staff_service_1.StaffService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map