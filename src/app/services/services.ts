import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserSaveForm} from "../resources/forms/user.save.form";
import {User} from "../resources/domain/user";
import {Classifier} from "../resources/domain/classifier";

@Injectable()
export class Services {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/users/' + userId);
  }

  saveUser(form: UserSaveForm): Observable<void> {
    return this.http.post<void>('http://localhost:8080/users', form.getRawValue());
  }

  editUser(user: User, form: UserSaveForm): Observable<User> {
    return this.http.patch<User>('http://localhost:8080/users/' + user.id, form.getRawValue());
  }

  getClassifiers(): Observable<Classifier[]> {
    return this.http.get<Classifier[]>('http://localhost:8080/classifiers');
  }
}
