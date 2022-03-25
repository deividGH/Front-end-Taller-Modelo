import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'

//Se importa el servicio y en el constructor especificamos que se va a usar

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  public allPersons:any
  private data

  constructor(private _api: ApiDataService) { }

  //Este método carga tan pronto cargue la página
  ngOnInit() {

    
    
    return this._api.getJson().subscribe((data)=>{
      console.log(data)
      this.data = data
      this.allPersons = this.data.personas
      console.log(this.allPersons)

    })

  }

}
