import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterTerm: any ;
  userRecords = [{
      "id": 1,
      "name": "Oscar",
      "email": "oscar@gmail.com"
    },
    {
      "id": 2,
      "name": "Ulises",
      "email": "ulises@gmail.com"
    },
    {
      "id": 3,
      "name": "Carlitos",
      "email": "carlos@gmail.com"
    },

  ]
}
