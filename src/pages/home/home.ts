import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sup:FormGroup;
username:any;
password:any;

   
  value1: number = 23 ;
  value2=16;
  value3=false;
  list=["red","blue","orange"];
  //username="";
  //pass="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) 
  {
    
    this.sup = this.formbuilder.group({
      
      username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
    },{});

  }

  user(e)
  {
    console.log(e.data);
  }
  submit()
  {
    this.navCtrl.push(ListPage,{username:this.username,password:this.password})
  }



}
