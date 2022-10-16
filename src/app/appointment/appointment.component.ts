import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

appointmentForm= new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  dateOfBirth: new FormControl(''),
      appointmentDate: new FormGroup({
        date: new FormControl(''),
      }),
      selectDepartment: new FormGroup({
        department: new FormControl(''),
      }),
      selectDoctor: new FormGroup({
        Doctor: new FormControl(''),
      }),
      messageOptional: new FormGroup({
        message: new FormControl(''),
      })
});

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.appointmentForm.value);
}
}
