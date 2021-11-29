import {Component, OnInit} from '@angular/core';
import {Services} from "./services/services";
import {UserSaveForm} from "./resources/forms/user.save.form";
import {User} from "./resources/domain/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userSaveForm: UserSaveForm;
  users: User[] = [];
  chosenUser: User;
  chosenUserId: number;

  constructor(private services: Services) {
  }

  ngOnInit(): void {
    this.userSaveForm = new UserSaveForm();
    if (sessionStorage.getItem('form')) {
      this.userSaveForm.initFromData(JSON.parse(sessionStorage.getItem('form')!));
    }
    this.updateUsersList();
  }

  updateUsersList(): void {
    this.services.getUsers().subscribe(
      result => this.users = result
    )
  }

  saveInformation(): void {
    if (this.chosenUser?.id) {
      this.services.editUser(this.chosenUser, this.userSaveForm).subscribe(
        result => {
          this.userSaveForm.initFromData(result)
          this.updateUsersList()
        }
      );
    } else {
      this.services.saveUser(this.userSaveForm).subscribe(
        () => {
          this.userSaveForm = new UserSaveForm();
          sessionStorage.clear();
          this.updateUsersList();
        }
      );
    }
  }

  switchUser(chosenUserId: number): void {
    this.services.getUser(chosenUserId).subscribe(
      result => {
        this.userSaveForm = new UserSaveForm();
        this.userSaveForm.initFromData(result);
        this.chosenUser = result;
      }
    );
  }

  resetInformation(): void {
    this.chosenUserId = -1;
    sessionStorage.clear();
  }
}
