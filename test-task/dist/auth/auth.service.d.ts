import { JwtService } from '@nestjs/jwt';
import { StaffService } from '../staff/staff.service';
export declare class AuthService {
    private readonly staffService;
    private readonly jwtService;
    constructor(staffService: StaffService, jwtService: JwtService);
    validateUser(username: string, password: string, role: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
