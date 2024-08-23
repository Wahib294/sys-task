export declare class CreateBugreportDto {
    id: number;
    title: string;
    description: string;
    status: true | false;
    assignee: number;
    reporter: number;
    createdAt: Date;
    updatedAt: Date;
}
