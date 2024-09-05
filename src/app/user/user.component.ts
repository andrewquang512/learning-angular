import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // learn: public or default will make this property available in html, private will not
  seletecUser = signal(DUMMY_USERS[randomIndex])
  /**
   * learn: The imagedPath computed signal depends on the seletecUser signal. Whenever seletecUser updates, Angular knows that imagedPath needs to update as well.
   */
  imagePath = computed(()=> 'assets/users/'+ this.seletecUser().avatar)

  // learn: getter
  // get imagePath(){
  //   return 'assets/users/' + this.seletecUser.avatar
  // }

  onSelecterUser(){
    // Learn: managing state
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.seletecUser.set(DUMMY_USERS[randomIndex])
  }
}
