import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  tasks = [`アプリのデザイン`, `Coding`, `debug`];
  getTaskList(): Observable<String[]> {
    return of(this.tasks);

  }

  // constructor() { }
}
