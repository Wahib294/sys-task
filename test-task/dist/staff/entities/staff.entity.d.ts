import { Role } from '../../role/entities/role.entity';
import { BugReport } from '../../bugreport/entities/bugreport.entity';
export declare class Staff {
    id: number;
    username: string;
    email: string;
    password: string;
    role: Role;
    assignedBugReports: BugReport[];
    reportedBugReports: BugReport[];
}
