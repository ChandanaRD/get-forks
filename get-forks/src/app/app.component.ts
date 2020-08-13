import { Component } from '@angular/core';
import { ApiService } from './services/API/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getForkList();
  }
}
