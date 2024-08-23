import { CreateBugreportDto } from './dto/create-bugreport.dto';
import { UpdateBugreportDto } from './dto/update-bugreport.dto';
import { Repository } from 'typeorm';
import { BugReport } from './entities/bugreport.entity';
import { StaffService } from 'src/staff/staff.service';
export declare class BugreportService {
    private readonly bugReportRepository;
    private readonly staffService;
    constructor(bugReportRepository: Repository<BugReport>, staffService: StaffService);
    create(createBugreportDto: CreateBugreportDto): Promise<BugReport>;
    findAll(): Promise<BugReport[]>;
    findBOne(id: number): Promise<BugReport>;
    findOne(staffId: number): Promise<BugReport[]>;
    update(id: number, updateBugreportDto: UpdateBugreportDto): Promise<BugReport>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
