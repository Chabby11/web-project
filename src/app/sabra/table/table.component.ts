import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/services/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private patientservices:PatientService,private router:Router) { }
  patientss!:Patient[]
  ngOnInit(): void {
    this.getdata()
  }
  public getdata(){
    this.patientservices.getpatients().subscribe(data=>{
      console.log(data)
      this.patientss = data;
    })
  }
  delete(id:number){
    this.patientservices.deletePatient(id).subscribe(data=>{
      console.log(data)
      this.getdata();
    })
  }

  update(id:number){
    this.patientservices.getPatientById(id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/update',{id}])
    })
  }

}
