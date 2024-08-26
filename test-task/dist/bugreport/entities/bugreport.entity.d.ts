import { Staff } from "../../staff/entities/staff.entity";
import { FileUpload } from "../../fileupload/entities/fileupload.entity";
export declare class BugReport {
    id: number;
    title: string;
    description: string;
    status: true | false;
    assignee: Staff;
    reporter: Staff;
    createdAt: Date;
    updatedAt: Date;
    fileUploads: FileUpload[];
}
