import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HerosService } from '../heros.service';

import { switchMap } from 'rxjs/operators'
import { Hero } from '../hero';

@Component({
  selector: 'app-heros-detail',
  templateUrl: './heros-detail.component.html',
  styleUrls: ['./heros-detail.component.less']
})
export class HerosDetailComponent implements OnInit {

  private hero: Hero;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: HerosService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> this.service.getHeroById(Number(params.get("id"))))
    ).subscribe((hero: Hero)=>{
      this.hero = hero;
    })
  }

  goBack(){
    this.router.navigate([''])
  }

  submit(){
    console.log(this.hero)
  }
}
