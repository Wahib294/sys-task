import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';
import { Repository } from 'typeorm';
import { RoleService } from 'src/role/role.service';
export declare class StaffService {
    private readonly roleService;
    readonly staffRepository: Repository<Staff>;
    constructor(roleService: RoleService, staffRepository: Repository<Staff>);
    create(createStaffDto: CreateStaffDto): Promise<Staff>;
    findAll(): Promise<Staff[]>;
    findOne(id: number): Promise<Staff>;
    update(id: number, updateStaffDto: UpdateStaffDto): Promise<Staff>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findbyUsername(username: string): Promise<Staff>;
}
