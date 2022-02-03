import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjeta: any[] = [];

  form:FormGroup;

  constructor(private fb: FormBuilder,private toastr: ToastrService)
  {
    this.form = this.fb.group({
      titular:['',Validators.required],
      numeroTarjeta:['',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
      fechaExpiracion:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      cvv:['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
    });
  }
  ngOnInit(): void {
  }
  agregarTarjeta(){
    const tarjeta : any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.listTarjeta.push(tarjeta);
    this.toastr.success('La tarjeta fue registrada correctamente!', 'Tarjeta registrada!');
    this.form.reset();

  }
  eliminarTarjeta(id:number){
    this.listTarjeta.splice(id,1);
    this.toastr.error("La tarjeta fue eliminada correctamente","La tarjeta fue eliminada")
  }


}
