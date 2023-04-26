import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StateListDetailService } from 'src/app/services/state-list-detail.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listEmployes:any = [];
  listAuxEmployes: any = [];
  itemSelected:any;

  constructor(
    private api: ApiService,
    private stateService: StateListDetailService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.api.getAll().subscribe(response => {
      this.listEmployes = response.body;
      this.listAuxEmployes = response.body;
    })

    this.stateService.enviarStateObservable.subscribe(response => {
      this.itemSelected = response;
    })
  }

  filterBy(key: string, itemToActive: any, list: any){

    for (let item of list.children) {
      item.classList.remove('active')
    }

    itemToActive.classList.add('active')
    
    if (key == 'all') {
      this.listAuxEmployes = this.listEmployes;
      return;
    }
    
    this.listAuxEmployes = this.listEmployes.filter((element:any) => element.estatus.toLowerCase() == key.toLowerCase())
  }

  seeDetail(item:any){
    this.stateService.enviarObjToState(item);
  }
}
