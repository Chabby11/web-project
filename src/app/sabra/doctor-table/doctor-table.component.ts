import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/services/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.css']
})
export class DoctorTableComponent implements OnInit {

  constructor(private Doctorservice:DoctorService) { }
  doctors!:Doctor[]

  ngOnInit(): void {
    this.getdata()
  }
  public getdata(){
    this.Doctorservice.getdoctor().subscribe(data=>{
      console.log(data)
      this.doctors = data;
    })
  }
}
