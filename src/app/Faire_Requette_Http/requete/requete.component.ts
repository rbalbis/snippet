import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; // Ajouter ça !!!!!!!!!!!!!!!!!!!!!!!!!!!

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})

/* Ajouter dans app.module.ts : 
import { HttpClientModule } from '@angular/common/http';

et dans imports [HttpClientModule]

*/

class Flight{
  constructor(public numero: number){}
}

export class RequeteComponent implements OnInit {

  constructor(private http: HttpClient // Ajouter ça 
    ) { }

  ngOnInit() {
  }



configUrl = 'assets/config.json'; // on peut faire des requetes sur des assets local

getConfig() {
  return this.http.get(this.configUrl);
}

apiUrl = "http://localhost:8080/flights";

createNewFlight(){

  let params = new HttpParams();
    params = params.append("startDayOfWeek","1");
    params = params.append("endDayOfWeek","3");

  let header = new HttpHeaders();
  header.set('Accept', 'application/json');

  return this.http.post(this.apiUrl, params,{headers:  header});
}

getFlight(id: number){
  this.http.get<Flight>(this.apiUrl+"/"+id).subscribe(
    (flight: Flight) => { console.log(flight.numero);},
    (error) => {console.log("erreur" + error);},
    () => {console.log("Executé dans tous les cas");
    }
  )
}


}
