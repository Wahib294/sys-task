import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
export declare class StaffController {
    readonly staffService: StaffService;
    constructor(staffService: StaffService);
    create(createStaffDto: CreateStaffDto): Promise<import("./entities/staff.entity").Staff>;
    findAll(): Promise<import("./entities/staff.entity").Staff[]>;
    findOne(id: string): Promise<import("./entities/staff.entity").Staff>;
    update(id: string, updateStaffDto: UpdateStaffDto): Promise<import("./entities/staff.entity").Staff>;
    findbyUsername(username: string): Promise<import("./entities/staff.entity").Staff>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
