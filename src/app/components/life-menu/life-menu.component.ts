import { Component, OnInit } from '@angular/core';
import { LifeMenuService } from 'src/app/service/lifeMenu/life-menu.service';
import { LifeMenu } from 'src/app/model/menu/life-menu';

@Component({
  selector: 'app-life-menu',
  templateUrl: './life-menu.component.html',
  styleUrls: ['./life-menu.component.less']
})
export class LifeMenuComponent implements OnInit {

  lifeMenu: LifeMenu;
  constructor(private service: LifeMenuService) { }

  ngOnInit() {
    this.service.getLifeMenu()
      .subscribe((menu: LifeMenu) => this.lifeMenu = menu)
  }

}
