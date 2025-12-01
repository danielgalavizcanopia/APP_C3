import { Component, OnInit, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports';
import { Router } from '@angular/router';
import { EncryptionService } from '../../../../service/EncryptionService.service';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authGuardService } from '../../../../service/authGuard.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  visible = signal(false);
  typeSeverity: string = '';
  message: string = '';

  showMessage() {
      this.visible.set(true);

      setTimeout(() => {
          this.visible.set(false);
      }, 3500);
  }

  constructor(
    private router: Router,
    private _encryptService: EncryptionService,
    private usuarioservice : LoginService,
    private _authGuardService: authGuardService,
    private _fb: FormBuilder
  ){

  }

  ngOnInit(){
    this.initFormulario();
  }

  initFormulario(){
    this.loginForm = this._fb?.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  login(){
    if(!this.loginForm.valid){
      this.typeSeverity = "error";
      this.message = "Please, check all fields"
      return this.showMessage();
    }

    let data = {
      Email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    const encryptedData = this._encryptService.encryptObject(data);
    this.usuarioservice.iniciarSesion({userData: encryptedData}).subscribe((response) => {
      if(response.valido === 1){
        const decryptData = this._encryptService.decryptObject(response.resp);
        this._authGuardService.setToken(decryptData?.access_token)
        this._authGuardService.setUser(decryptData)
        this.router.navigate(['/Inicio'], { replaceUrl: true });

      } else {
        this.typeSeverity = "error"
        this.message = "Please check your credentials. If the problem persists, contact the IT team."
      }
    });
  }
}
