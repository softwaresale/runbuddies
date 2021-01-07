import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { availabilityCreate } from '../../models/availability/availability.model';
import { select, Store } from '@ngrx/store';
import { signUp } from '../state/auth.actions';
import { authSelectProfileCreated } from '../state/auth.selectors';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-flow',
  templateUrl: './signup-flow.component.html',
  styleUrls: ['./signup-flow.component.sass']
})
export class SignupFlowComponent implements OnInit {

  intensities = ['LOW', 'MEDIUM', 'HIGH', 'EXTREME'];
  daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  signupForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    bio: [''],
    averagePace: [null, [Validators.required, Validators.min(0)]],
    weeklyRuns: [null, [Validators.required, Validators.min(0)]],
    intensity: [null, Validators.required],
    availability: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private store$: Store<any>,
    private router: Router,
    private matSnackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  get availability(): FormArray {
    return this.signupForm.get('availability') as FormArray;
  }

  get availabilityGroups(): FormGroup[] {
    return this.availability.controls as FormGroup[];
  }

  addAvailability(): void {
    const group = this.fb.group({
      day: [null, [Validators.required]],
      time: [null, [Validators.required]],
      hours: [0, [Validators.min(0)]],
      minutes: [0, [Validators.min(0)]]
    });

    this.availability.push(group);
  }

  removeAvailability(idx: number): void {
    this.availability.removeAt(idx);
  }

  submit(): void {
    const value = this.signupForm.value;
    const updatedAvailability = value.availability
      .map((availObj: any) => availabilityCreate(availObj.day, availObj.time, { minutes: availObj.minutes, hours: availObj.hours }));

    const dto = { ...value, availability: updatedAvailability };
    console.log(dto);

    this.store$.dispatch(signUp({ dto }));

    this.store$.pipe(
      select(authSelectProfileCreated),
    ).subscribe(profileCreated => {
      if (profileCreated) {
        this.router.navigate(['/home']).then(() => {
          this.matSnackbar.open('Successfully Signed up', 'CLOSE');
        });
      } else {
        this.matSnackbar.open('Error: Could not create profile', 'CLOSE');
      }
    });
  }
}
