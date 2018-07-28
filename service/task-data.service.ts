import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  tasks: Array<Task> = [
    new Task('00001', 'coding', 'top priority'),
    new Task('00002', 'test', 'second priority'),
    new Task('00003', 'debug', 'third priority')
  ];

  getTaskList(): Observable<Task[]> {
    return of(this.tasks)
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
