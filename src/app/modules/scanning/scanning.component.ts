import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-scanning',
  templateUrl: './scanning.component.html',
  styleUrls: ['./scanning.component.scss']
})
export class ScanningComponent implements OnInit {

  public _errors: Set<string> = new Set<string>();

  public _formGroup: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this._formGroup = this._formBuilder.group({
      name: [null, Validators.required],
      minX: [null, Validators.required],
      maxX: [null, Validators.required],
      stepX: [null, Validators.required],
      minY: [null, Validators.required],
      maxY: [null, Validators.required],
      stepY: [null, Validators.required],
      minZ: [null, Validators.required],
      maxZ: [null, Validators.required],
      stepZ: [null, Validators.required],
      minFrequency: [null, Validators.required],
      maxFrequency: [null, Validators.required],
      stepFrequency: [null, Validators.required],
    });

    this._formGroup.valueChanges.pipe(
      debounceTime(400),
    ).subscribe(form => {
      console.log(form);
    });
  }

  ngOnInit(): void {
  }

  public onDismiss(): void {
    this._formGroup.patchValue({
      name: null,
      minX: null,
      maxX: null,
      stepX: null,
      minY: null,
      maxY: null,
      stepY: null,
      minZ: null,
      maxZ: null,
      stepZ: null,
      minFrequency: null,
      maxFrequency: null,
      stepFrequency: null,
    });
  }

}
