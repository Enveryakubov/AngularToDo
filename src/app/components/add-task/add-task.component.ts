import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Task } from 'src/app/mock-tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output()
  onTaskCreate = new EventEmitter();

  showAddTask!: boolean;
  subscription!: Subscription;

  task: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((data) => (this.showAddTask = data));
  }

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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
