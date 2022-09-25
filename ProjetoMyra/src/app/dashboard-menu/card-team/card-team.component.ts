import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborators } from 'src/app/_models/collaborators';
import { Leader } from 'src/app/_models/leader';
import { TeamService } from './team.service';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
})
export class CardTeamComponent implements OnInit {
  leader!: Leader;
  collaborators!: Collaborators[];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.getLEader();
    this.getCollaborators();
  }

  //Função responsável por pegar o retorno do GET e inserir os dados no MODEL
  getLEader() {
    this.teamService.getLeader().subscribe((res: Leader) => {
      this.leader = res;
    });
  }

  //Função responsável por pegar o retorno do GET e inserir os dados no MODEL
  getCollaborators() {
    this.teamService.getCollaborators().subscribe((res: Collaborators[]) => {
      this.collaborators = res;
    });
  }
}
