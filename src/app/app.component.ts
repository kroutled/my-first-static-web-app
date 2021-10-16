import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}<br> and heres a message from the api call -> {{message}}</div>`,
})
export class AppComponent {
  value = 'World';
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('api/message')
    .subscribe((resp: any) => {
      this.message = resp.text;
    });
  }
}
