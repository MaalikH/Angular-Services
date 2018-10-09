import { Injectable, EventEmitter, Output} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AccountsService {

	statusUpdated = new EventEmitter<string>()

  constructor() { }

    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
  	this.accounts.push({name: name, status: status});
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
