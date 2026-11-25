import { TestBed } from '@angular/core/testing';
import { ListItem } from './list-item';
import { User } from '../../models/user';

const testUser = {
  id: '23',
  name: 'Lebron James',
  email: 'lebron.james@nba.com',
  age: 41,
  plan: {
    type: 'ultimate',
    status: 'active',
    description: 'The Ultimate Package',
    features: { conferenceCalling: true, callWaiting: true, voicemail: true },
  },} as User;

describe('ListItem', () => {
  it('shows the user name', () => {
    const fixture = TestBed.createComponent(ListItem);
    fixture.componentRef.setInput('user', testUser);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Lebron James');
  });

  it('shows details when expanded', () => {
    const fixture = TestBed.createComponent(ListItem);
    fixture.componentRef.setInput('user', testUser);
    fixture.componentRef.setInput('expanded', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('lebron.james@nba.com');
  });
});
