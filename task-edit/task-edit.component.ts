import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskDataService } from '../service/task-data.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task = new Task('0000', '', '');
  constructor(private dataService: TaskDataService) { }
  ngOnInit() {
  }
  sendInput() {
    this.dataService.addTask(new Task(this.task.id, this.task.title, this.task.priority));
  }

}
