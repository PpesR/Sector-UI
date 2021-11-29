import {Component, Input, OnInit} from '@angular/core';
import {Services} from "../../services/services";
import {Classifier} from "../../resources/domain/classifier";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sector-selector',
  templateUrl: './sector-selector.component.html'
})
export class SectorSelectorComponent implements OnInit {

  classifiers: Classifier[];

  @Input()
  public form: FormGroup;

  constructor(private userService: Services) {
  }

  ngOnInit(): void {
    this.userService.getClassifiers().subscribe(
      result => {
        this.classifiers = result
      });
  }

  replaceSpaces(name: string): string {
    return name.replaceAll('&nbsp;', '\u00A0');
  }
}
