import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  insert!:FormGroup
  id!:number
  constructor(private patientsservices:PatientService,private route :ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.insert = new FormGroup({
      patient_name: new FormControl(''),
      patient_second_name: new FormControl(''),
      patient_last_name: new FormControl(''),
      address: new FormControl(''),
      phone_number: new FormControl(''),
      age: new FormControl(''),
      date: new FormControl(''),
      gender: new FormControl(''),

      
    })
    this.getbyid();



  }
        public insertdata(){
          this.patientsservices.createPatient(this.insert.value).subscribe(data=>{
            console.log(data)
          })
        }

        public getbyid(){
          this.patientsservices.getPatientById(this.id).subscribe(data=>{
            console.log(data)
            this.insert = new FormGroup({
              patient_name: new FormControl(data.patient_name),
              patient_second_name: new FormControl(data.patient_second_name),
              patient_last_name: new FormControl(data.patient_last_name),
              address: new FormControl(data.address),
              phone_number: new FormControl(data.patient_second_name),
              age: new FormControl(data.age),
              date: new FormControl(data.date),
              gender: new FormControl(data.gender),
              
            })
          })
        }

        public update(){
          this.patientsservices.updatePatient(this.id,this.insert.value).subscribe(data=>{
            console.log(data)
          })
        }

  submit(){
     console.log(this.insert.value);
    this.insertdata();
    this.update();
    this.insert.reset()
  }
}
