import { Component, OnInit, inject, signal } from '@angular/core';
import { Users } from '../../services/users';
import { User } from '../../models/user';
import { ListItem } from '../list-item/list-item';

@Component({
  imports: [ListItem],
  selector: 'app-list',
  styleUrl: './list.scss',
  templateUrl: './list.html',
})
export class List implements OnInit {
  private usersService = inject(Users);

  // Super useful docs I referenced here: https://angular.dev/guide/signals
  users = signal<User[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  expanded = signal<string | null>(null); // identification for the expanded item

  // Fetch users when the component initializes
  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.loading.set(false);
      },
      // Handle errors
      error: (err) => {
        this.error.set(`Failed to load users: ${err.message}`);
        this.loading.set(false);
      }
    });
  }

  // Toggle the expanded state of a user
  toggleUser(id: string) {
    this.expanded.set(this.expanded() === id ? null : id);
  }
}
