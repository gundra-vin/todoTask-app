import { Component, OnInit } from '@angular/core';
import { Taskdet } from 'src/app/taskdet';
import { TodoserviceService } from 'src/app/todoservice.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  sucessmsg = '';
  tsk: Taskdet = new Taskdet();
  constructor(private todoService: TodoserviceService) { }

  ngOnInit() {
  }
  addTask() {
    this.tsk.tid = 1000;
    this.todoService.addTask(this.tsk).subscribe(msg => {
      console.log(msg);
      this.sucessmsg = 'Task Id: ' + msg.tid + ' is successfully inserted with new task';
    });
  }
  tskreset() {
    this.tsk = new Taskdet();
    this.sucessmsg = '';
  }
}
