import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'fc-home',
  imports: [CardModule, TabsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
