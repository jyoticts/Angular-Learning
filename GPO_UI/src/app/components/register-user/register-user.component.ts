import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  step = 0;
  userRegisterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {    
 
    let username = new FormControl("", [Validators.required]);
    let password = new FormControl("", [Validators.required]);
    let confirmPassword = new FormControl("", [Validators.required]);
    let pharmacyName = new FormControl("", [Validators.required]);
    let pharmacyRegID = new FormControl("", [Validators.required]);
    let pharmacyID = new FormControl("");
    let pin = new FormControl("");
    let email = new FormControl("", [Validators.required]);
    let contactNumber = new FormControl("");
    let url = new FormControl("");
    let address = new FormControl("");

    let country = new FormControl("");

    
    this.userRegisterForm=  this.fb.group({
      username,
      password,
      confirmPassword,
      pharmacyRegID,
      pharmacyName,
      pharmacyID,
      pin,
      email,
      contactNumber,
      url,
      address,
      country

    })
  }
  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  userRegisterFormSubmit(data)
  {
    swal.fire({
      title: "Error!!",
      text: "Password and confirm password is incorrect. Please give same password.",
      type: "error",
      confirmButtonText: "OK"
    });
    console.log(data);
alert("inside alert");
  }

}
