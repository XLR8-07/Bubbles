import { Component, OnInit } from '@angular/core';
import { YouthService } from '../shared/youth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-from',
  templateUrl: './profile-from.component.html',
  styleUrls: ['./profile-from.component.scss']
})
export class ProfileFromComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Taglist: string[] = [];

  constructor(public service: YouthService) { }

  ngOnInit(): void {
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.Taglist.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(Tag: string): void {
    const index = this.Taglist.indexOf(Tag);

    if (index >= 0) {
      this.Taglist.splice(index, 1);
    }
  }
}
