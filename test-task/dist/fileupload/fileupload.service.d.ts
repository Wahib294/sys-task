import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { FileUpload } from './entities/fileupload.entity';
import { Repository } from 'typeorm';
import { BugreportService } from 'src/bugreport/bugreport.service';
export declare class FileuploadService {
    private readonly FileUploadRepository;
    private readonly bugreportService;
    constructor(FileUploadRepository: Repository<FileUpload>, bugreportService: BugreportService);
    create(createFileuploadDto: CreateFileuploadDto): Promise<FileUpload>;
    findAll(): Promise<FileUpload[]>;
    findOne(id: number): Promise<FileUpload[]>;
    update(id: number, updateFileuploadDto: UpdateFileuploadDto): Promise<FileUpload>;
    remove(id: number): string;
}
