import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from "rxjs";
import {User} from "../domain/user";

export class UserSaveForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl(''),
      sectors: new FormControl([]),
      hasAgreedToTerms: new FormControl(false),
    });
    this.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      ).subscribe(
      () => sessionStorage.setItem('form', JSON.stringify(this.getRawValue()))
    );
  }

  public initFromData(data: User): void {
    this.controls['name'].setValue(data.name);
    this.controls['sectors'].setValue(data.sectors);
    this.controls['hasAgreedToTerms'].setValue(data.hasAgreedToTerms);
  }
}
