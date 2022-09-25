import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborators } from 'src/app/_models/collaborators';
import { Leader } from 'src/app/_models/leader';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  //Função responsável por retornar o CORDENADOR do BackEnd
  getLeader() {
    return this.http.get<Leader>(`${environment.api}/leader`);
  }

  //Função responsável por retornar os supervisores do BackEnd
  getCollaborators() {
    return this.http.get<Collaborators[]>(`${environment.api}/collaborators`);
  }
}
