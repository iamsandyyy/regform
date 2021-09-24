import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';


/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

export class ListPage {
formgroup:FormGroup;
username:any;
password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {
    // this.formgroup = formbuilder.group({
    //   username:['',Validators.required,Validators.minLength(3)],
    //   password:['',Validators.required,Validators.maxLength(8),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
    // });
    // this.username = this.formgroup.controls['username'];
    // this.password = this.formgroup.controls['password']

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
