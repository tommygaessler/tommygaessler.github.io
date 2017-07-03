import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';
  error: string;
  response: string;
  form: boolean;
  loading: boolean;
  nameSuccess: boolean;
  emailSuccess: boolean;
  messageSuccess: boolean;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('contacted')) {
      this.response = localStorage.getItem('contacted');
      this.form = false;
    } else {
      this.form = true;
    }
  }

  sendAgain() {
    localStorage.removeItem('contacted');
    // maybe put email and name in localstorage to save in form?
    this.ngOnInit();
    this.response = null;
    this.error = null;
    this.message = '';
    this.messageSuccess = null;
  }

  onSubmit() {

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(this.name !== '') {
      this.nameSuccess = true;
    } else {
      this.nameSuccess = false;
    }

    if(this.email !== '' && emailRegex.test(this.email)) {
      this.emailSuccess = true;
    } else {
      this.emailSuccess = false;
    }

    if(this.message !== '') {
      this.messageSuccess = true;
    } else {
      this.messageSuccess = false;
    }

    if(this.nameSuccess && this.emailSuccess && this.messageSuccess) {
      this.loading = true;

      this.http.post('https://ujj9l4tjj6.execute-api.us-east-1.amazonaws.com/prod/sendgrid-email-serverless', {name: this.name, from_email: this.email, message: this.message}).map((response:Response) => response.json()).subscribe((response) => {
        this.loading = false;
        this.form = false
        this.response = response.body;

        localStorage.setItem('contacted', this.response);
      }, (error) => {
        this.loading = false;
        this.form = false
        this.error = error;

        localStorage.setItem('contacted', this.error);
      });
    }
  }
}
