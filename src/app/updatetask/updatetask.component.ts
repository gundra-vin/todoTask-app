import { Component, OnInit, Input } from '@angular/core';
import { Taskdet } from 'src/app/taskdet';
import { TodoserviceService } from 'src/app/todoservice.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {


 sucessmsg = '';
  @Input()
  updtask: Taskdet;
   constructor(private todoService: TodoserviceService) { }

  ngOnInit() {
  }

  updTask(updtask) {
   console.log(updtask);
   this.todoService.updTask(updtask).subscribe(msg => {
   console.log(msg);
   this.sucessmsg = 'Task Id: ' + msg.tid + ' Got updated successfully';
  });
  }
  resTask() {
    this.updtask = new Taskdet();
    this.sucessmsg = '';
  }
  }


