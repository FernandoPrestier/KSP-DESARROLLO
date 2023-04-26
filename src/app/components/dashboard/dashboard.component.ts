import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoadData = false;
  hasEmployes = false;
  totalEmployes = "";

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.api.getAll().subscribe(response => {
      this.isLoadData = true;
      this.hasEmployes = response.items > 0;
      if (response.items > 1) {
        this.totalEmployes += `${response.items} empleados listos a ser administrados`
      }else{
        this.totalEmployes += `${response.items} empleado listo a ser administrado`
      }
    });
  }

  navigate(){
    this.router.navigateByUrl('/crear-editar')
  }

}
