import { FileUpload } from "../../fileupload/entities/fileupload.entity";
export declare class BugReport {
    id: number;
    title: string;
    description: string;
    status: true | false;
    assignee: number;
    reporter: number;
    createdAt: Date;
    updatedAt: Date;
    fileUploads: FileUpload[];
}
