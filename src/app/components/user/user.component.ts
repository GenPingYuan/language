import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  @Input()
  field: string;
  private user: User;
  private value;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUser()
    .subscribe((user: User)=> {
      this.user = user;
      this.value = user[this.field];
    })


  }



}
