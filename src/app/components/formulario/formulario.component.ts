
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api-service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // @Output() valorSalida: EventEmitter<string> = new EventEmitter();

  marcas = [];
  provincias: any[] = [];
  coberturas = [];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  ngOnInit() {

    this.firstFormGroup = this.fb.group({
      dni: ['39170334', [ Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      apellido: ['Falaschini', [ Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      nombre: ['Lucas', [ Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      email: ['lucasfalaschini@gmail.com', [ Validators.email ]],
      celular: ['155216323', [ Validators.pattern("^[0-9]*$") ]],
      telefono: ['4754127', [ Validators.minLength(3)]],
      ubicacion: ['MDP', [ Validators.required ]],
      nacimiento: ['02/11/1995', [ Validators.required ]],
      usuario: ['lucas', [ Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['lucasfalas', [ Validators.required, Validators.minLength(3)]]
    });

    this.secondFormGroup = this.fb.group({
      marca: ['', Validators.required],
      año: ['', Validators.required],
      modelo: ['', Validators.required],
      version: ['', ]
    });

    this.thirdFormGroup = this.fb.group({
      cobertura: ['', Validators.required]
    })

  }

  // Validacion solo numeros:
  // HTML
  // <div class="form-control-feedback" *ngIf="Mobile.errors && (Mobile.dirty || Mobile.touched)">
  //   <p *ngIf="Mobile.errors.pattern" class="text-danger">Number Only</p>
  // </div>
  // TS
  // this.Mobile = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern("^[0-9]*$"),
  //   Validators.minLength(8),
  // ]);


  constructor(private apiService: ApiService,
              private fb: FormBuilder ) {

    this.apiService.getMarcas()
        .subscribe( resp => {
          this.marcas = resp;
          console.log('Marcas:', this.marcas);
        });


    this.apiService.getGeo()
        .subscribe(resp => {
          this.provincias = resp.provincias;
          console.log('Provincias:', this.provincias);
        });


        //TODO Ordenado por costo
    this.apiService.getCoberturas()
        .subscribe(resp => {
          this.coberturas = resp;
          console.log('Coberturas:', this.coberturas.sort((a, b) => a.costo - b.costo ));

        });
  }




   crearUsuarioTemp() {
     console.log(this.firstFormGroup.value);
   }

   crearVehiculoTemp() {
    console.log(this.secondFormGroup.value);
   }



}