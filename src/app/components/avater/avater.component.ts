import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from 'src/app/model/user/avatar';
import { UserService } from 'src/app/service/user/user.service'
import { User } from 'src/app/model/user/user';
@Component({
  selector: 'app-avater',
  templateUrl: './avater.component.html',
  styleUrls: ['./avater.component.less']
})
export class AvaterComponent implements OnInit {

  avater: Avatar;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUser()
    .subscribe((user: User)=> {
      this.avater = user.avatar;
    })
    
  }

}
