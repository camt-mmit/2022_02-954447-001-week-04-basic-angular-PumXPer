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
  date = new Date();
  userAgent = navigator.userAgent;
  language = navigator.language;
  cookie = navigator.cookieEnabled;
  logic = navigator.hardwareConcurrency;
  maxTouchPoints = navigator.maxTouchPoints;
}
