import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  message: {
    fullName: string,
    email: string,
    phone: number,
    message: string
  } = {
      fullName: '',
      email: '',
      phone: undefined,
      message: ''
    };

  constructor() { }

  ngOnInit(): void {
  }

  send() {
    alert("Message sent successfully, thank your for contacting us");
    this.message = {
      fullName: '',
      email: '',
      phone: undefined,
      message: ''
    }
  }

}
