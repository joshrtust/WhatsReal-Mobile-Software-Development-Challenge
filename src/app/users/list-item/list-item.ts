import { Component, input, output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  imports: [],
  selector: 'app-list-item',
  styleUrl: './list-item.scss',
  templateUrl: './list-item.html',
})
export class ListItem {
  user = input.required<User>();
  expanded = input<boolean>(false); // By default, keep the item closed
  toggleItem = output<void>();
}
