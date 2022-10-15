import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  patientInfoForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    phoneNumber: new FormControl(''),
    maritalStatus: new FormControl(''),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl(''),
        }),
        insurance: new FormGroup({
          primaryInsurance: new FormControl(''),
          groupNumber: new FormControl(''),
          idNumber: new FormControl(''),
          socialSecurityNumber: new FormControl(''),
          relationship: new FormControl('')
        }),
        emergencyContact: new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
          phoneNumber: new FormControl(''),
          relationshipToPatient: new FormControl('')
        })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.patientInfoForm.value);
  }
}
