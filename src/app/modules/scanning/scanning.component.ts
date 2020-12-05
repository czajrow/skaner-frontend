import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scanning',
  templateUrl: './scanning.component.html',
  styleUrls: ['./scanning.component.scss']
})
export class ScanningComponent implements OnInit {

  public _formGroup: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this._formGroup = this._formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
