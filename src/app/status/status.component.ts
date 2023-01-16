import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  title = 'Status';
  language = navigator.language;
  cookie = navigator.cookieEnabled;
  userAgent = navigator.userAgent;
  logic = navigator.hardwareConcurrency;
  maxTouchPoints = navigator.maxTouchPoints;
  date = new Date();
}
