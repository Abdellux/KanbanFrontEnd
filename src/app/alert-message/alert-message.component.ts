import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  @Output() alertClosed = new EventEmitter<boolean>();
  @Input() alertMessage: string;

  constructor() { }

  ngOnInit(): void {
  }
  closeErrorMessage() {
    this.alertClosed.emit(false);
  }

}
