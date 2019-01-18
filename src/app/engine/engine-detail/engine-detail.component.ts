import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { EngineService } from '../engine.service'
import { DialogService } from '../../dialog.service'
import { Engine } from '../engine'
@Component({
  selector: 'app-engine-detail',
  templateUrl: './engine-detail.component.html',
  styleUrls: ['./engine-detail.component.less']
})
export class EngineDetailComponent implements OnInit {

  private engine: Engine;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: EngineService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getEngineById(Number(params.get("id"))))
    ).subscribe((engine: Engine) => {
      this.engine = engine;
    })
  }

  submit(value: Engine) {
    // console.log(this.engine,value);
    this.engine.name = value.name;
    this.engine.type = value.type
    this.service.updateEngine(this.engine);
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Discard changes?');
  }
}
