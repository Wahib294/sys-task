import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(name: string): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<UpdateRoleDto & Role>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
