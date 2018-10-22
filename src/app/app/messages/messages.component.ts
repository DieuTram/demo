import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  mgs: string[] = [];

  constructor(private messageService: MessageService) {
  }

  onClear(): void {
    this.messageService.clear();
    this.mgs = this.messageService.getListMessages();
  }

  ngOnInit() {
    this.mgs = this.messageService.getListMessages();
  }

}
