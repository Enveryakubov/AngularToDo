import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, public router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((data) => (this.showAddTask = data));
  }

  ngOnInit(): void {}

  handleBtnClick() {
    this.uiService.toggleAddTask();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
