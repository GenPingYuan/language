import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/model/home/nav';
import { HomeService } from 'src/app/service/home/home.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit {

  private navs: Nav[];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getNavs()
    .subscribe((navs: Nav[])=>{
      this.navs = navs;
    })
  }

}
