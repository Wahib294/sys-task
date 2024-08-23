import { BugreportService } from './bugreport.service';
import { CreateBugreportDto } from './dto/create-bugreport.dto';
import { UpdateBugreportDto } from './dto/update-bugreport.dto';
export declare class BugreportController {
    private readonly bugreportService;
    constructor(bugreportService: BugreportService);
    create(createBugreportDto: CreateBugreportDto): Promise<import("./entities/bugreport.entity").BugReport>;
    findAll(): Promise<import("./entities/bugreport.entity").BugReport[]>;
    findOne(id: string): Promise<import("./entities/bugreport.entity").BugReport[]>;
    findBOne(id: string): Promise<import("./entities/bugreport.entity").BugReport>;
    update(id: string, updateBugreportDto: UpdateBugreportDto): Promise<import("./entities/bugreport.entity").BugReport>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
