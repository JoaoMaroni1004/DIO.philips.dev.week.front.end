import { Component, OnInit } from '@angular/core';
import { FaixaEtaria } from '../model/faixaEtaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixaEtaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';


@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.scss']
})

export class ExamesComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: FaixaEtaria[] = [];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regioesService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.ocorrencia_exame = this.ocorrenciaService.listOcorrencias();
    this.regioes = this.regioesService.listRegioes();
    this.faixaetarias = this.faixaEtariaService.listFaixaEtaria();
    }
}