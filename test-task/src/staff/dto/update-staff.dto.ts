import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffDto } from './create-staff.dto';

export class UpdateStaffDto {
    id: number;
    username: string;
    role: string;
    email: string;
    password: string;
}
