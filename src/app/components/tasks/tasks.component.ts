import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS, Task } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor(private TaskService: TaskService) {}

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(event: number) {
    this.TaskService.deleteTask(event).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== event))
    );
  }
  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.TaskService.updateTask(task).subscribe();
  }
  createTask(task: Task) {
    this.TaskService.createTask(task).subscribe(
      (newTask) => (this.tasks = [newTask, ...this.tasks])
    );
  }
}
