//import { StaffService } from './../staff/staff.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBugreportDto } from './dto/create-bugreport.dto';
import { UpdateBugreportDto } from './dto/update-bugreport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BugReport } from './entities/bugreport.entity';
import { StaffService } from 'src/staff/staff.service';

@Injectable()
export class BugreportService {
  constructor(
    @InjectRepository(BugReport)
    private readonly bugReportRepository: Repository<BugReport>,
    private readonly staffService: StaffService,
  ) {}

  async create(createBugreportDto: CreateBugreportDto): Promise<BugReport> {
    let bugReport = new BugReport();
    let assignee = await this.staffService.findOne(createBugreportDto.assignee);
    let reporter = await this.staffService.findOne(createBugreportDto.reporter);
    bugReport.id = createBugreportDto.id;
    bugReport.title = createBugreportDto.title;
    bugReport.description = createBugreportDto.description;
    bugReport.status = createBugreportDto.status;
    bugReport.assignee = assignee;
    bugReport.reporter = reporter;
    bugReport.createdAt = createBugreportDto.createdAt;
    bugReport.updatedAt = createBugreportDto.updatedAt;

    return this.bugReportRepository.save(bugReport);
  }

  findAll(): Promise<BugReport[]> {
    return this.bugReportRepository.find({
      where: {},
      relations: ['reporter', 'assignee'],
    });
  }

  findBOne(id: number): Promise<BugReport> {
    return this.bugReportRepository.findOne({where:{ id: id },relations: ['reporter', 'assignee']});
  }

  async findOne(staffId: number): Promise<BugReport[]> {
    // Get the staff member by ID
    const staff = await this.staffService.findOne(staffId);
    if (!staff) {
      throw new NotFoundException('Staff member not found');
    }

    // Determine the role and query based on role
    if (staff.role.name === 'QA') {
      // If staff is QA, find bug reports where the reporterID matches the staffId
      return this.bugReportRepository.find({
        where: { reporter: {id: staff.id} },
      });
    } else if (staff.role.name === 'Developer') {
      // If staff is a Developer, find bug reports where the attendeeID matches the staffId
      console.log(staff.id);
      return this.bugReportRepository.find({
        where: { assignee: {id: staff.id} },
        relations: ['reporter', 'assignee'],
      });
    } else {
      throw new NotFoundException('Staff role not recognized');
    }
  }

  async update(id: number, updateBugreportDto: UpdateBugreportDto) {
    let bugReport = new BugReport();
    let assignee = await this.staffService.findOne(updateBugreportDto.assignee);
    let reporter = await this.staffService.findOne(updateBugreportDto.reporter);
    bugReport.id = id;
    bugReport.title = updateBugreportDto.title;
    bugReport.description = updateBugreportDto.description;
    bugReport.status = updateBugreportDto.status;
    bugReport.assignee = assignee;
    bugReport.reporter = reporter;
    bugReport.createdAt = updateBugreportDto.createdAt;
    bugReport.updatedAt = updateBugreportDto.updatedAt;
    return this.bugReportRepository.save(bugReport);
  }

  remove(id: number) {
    return this.bugReportRepository.delete(id);
  }
}
