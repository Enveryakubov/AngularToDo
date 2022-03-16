import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/mock-tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output()
  onTaskCreate = new EventEmitter();

  task: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.task.trim() && this.day.trim()) {
      return this.onTaskCreate.emit({
        text: this.task,
        day: this.day,
        reminder: this.reminder,
      });
    }
    return;
  }
}
