import { FileuploadService } from './fileupload.service';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
export declare class FileuploadController {
    private readonly fileuploadService;
    constructor(fileuploadService: FileuploadService);
    create(createFileuploadDto: CreateFileuploadDto): Promise<import("./entities/fileupload.entity").FileUpload>;
    findAll(): Promise<import("./entities/fileupload.entity").FileUpload[]>;
    findOne(id: string): Promise<import("./entities/fileupload.entity").FileUpload[]>;
    update(id: string, updateFileuploadDto: UpdateFileuploadDto): Promise<import("./entities/fileupload.entity").FileUpload>;
    remove(id: string): string;
}
