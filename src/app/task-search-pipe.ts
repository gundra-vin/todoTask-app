import {Pipe, PipeTransform} from '@angular/core';
import { Taskdet } from 'src/app/taskdet';
@Pipe({
    name: 'taskSearch'
})

export class TaskSearchPipe implements PipeTransform {
    transform(taskdets: Taskdet[], taskSearch: string, ptaskSearch: string, startDateSearch: string, endDateSearch: string, prioritySearch: number):Taskdet[] {
        if(taskdets && taskdets.length){
            return taskdets.filter(tsk => {
                if(taskSearch && tsk.task.toLowerCase().indexOf(taskSearch.toLowerCase()) === -1) {
                    return false;
                }
                if(ptaskSearch && tsk.ptask.toLowerCase().indexOf(ptaskSearch.toLowerCase()) === -1) {
                    return false;
                }
                if(startDateSearch && tsk.sdate.toLowerCase().indexOf(startDateSearch.toLowerCase()) === -1) {
                    return false;
                }
                if(endDateSearch && tsk.edate.toLowerCase().indexOf(endDateSearch.toLowerCase()) === -1) {
                    return false;
                }
                if(prioritySearch && tsk.priority != prioritySearch) {
                    return false;
                }
                return true;
            }) 
        }else{
            return taskdets;
        }
    }
}
