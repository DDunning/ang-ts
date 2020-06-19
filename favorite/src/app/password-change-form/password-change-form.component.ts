import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent {

  constructor() { }
  
  form = new FormGroup({
    'oldpassword': new FormControl('', Validators.required, PasswordChangeFormComponent.passwordIsCurrent),
    'newpassword': new FormControl('', Validators.required),
    'confirmpassword': new FormControl('', Validators.required)
  });
  
  get oldpassword(){
    return this.form.get('oldpassword') as FormControl;
  }

  get newpassword(){
    return this.form.get('newpassword') as FormControl;
  }

  get confirmpassword(){
    return this.form.get('confirmpassword') as FormControl;
  }

  static passwordIsCurrent(control: AbstractControl) :
    Promise<ValidationErrors | null> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (control.value === '1234')
            resolve(null);
          else
            resolve({ passwordIsCurrent: true });
        }, 2000);
      });
  }
}
