import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  @Output()
  onTaskDelete = new EventEmitter();
  @Output()
  onTaskToggle = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onTaskDelete.emit(task.id);
  }
  onToggle(task: Task) {
    this.onTaskToggle.emit(task);
  }
}
