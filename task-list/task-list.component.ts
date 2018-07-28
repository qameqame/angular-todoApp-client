import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { TaskDataService } from '../service/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskList = [];
  public selected = '';
  public select(t: string) {
    this.selected = t;
    this.logger.log(t);
  }
  constructor(private logger: LoggerService, private taskDataService: TaskDataService) { }

  ngOnInit() {
    this.taskDataService.getTaskList().subscribe(task_datas => { this.taskList = task_datas });
  }

}
