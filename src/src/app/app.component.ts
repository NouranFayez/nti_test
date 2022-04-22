import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  storedPosts:any = []

  onPostAdded(event:any) {
    this.storedPosts.push(event);
  }
}
