import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { TodoserviceService } from 'src/app/todoservice.service';
import { Taskdet } from 'src/app/taskdet';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  taskdets: Taskdet[] = [];
  updet: Taskdet = new Taskdet();
    constructor(private todoService: TodoserviceService) {
    this.todoService.getallTasks().subscribe(taskdets => {
    this.taskdets = taskdets;
      });
  }
  ngOnInit() {
  }
getallTasks() {
  this.todoService.getallTasks().subscribe(taskdets => {
  this.taskdets = taskdets;
  });
}
  updTask(tsk) {
        this.updet = tsk;
  }
  delTask(deltask: Taskdet) {
    console.log(deltask);
    this.todoService.delTask(deltask).subscribe(res => {
    console.log(res);
    this.taskdets = res;
    });
  }
}
