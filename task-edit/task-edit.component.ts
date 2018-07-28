import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task = new Task('0000', '', '');
  constructor() { }
  ngOnInit() {
  }
  sendInput() {
    alert(`
       ID:${this.task.id}
       TITLE:${this.task.title}
       PRIORITY:${this.task.priority} 
       `);
  }

}
