import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { StateListDetailService } from 'src/app/services/state-list-detail.service';
import { DeleteModalConfirmComponent } from '../delete-modal-confirm/delete-modal-confirm.component';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  isCreate = true;

  empleadoForm = new FormGroup({
    idEmpleado: new FormControl(''),
    foto: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    puesto: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    estatus: new FormControl('', Validators.required),
    fechaContratacion: new FormControl('', Validators.required),
  });
  fotoBase64 = '';

  constructor(
    private api: ApiService,
    private datePipe: DatePipe,
    private stateService: StateListDetailService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.stateService.enviarStateObservable.subscribe(response => {
      this.empleadoForm.controls.idEmpleado.setValue(response.idEmpleado);
      this.empleadoForm.controls.nombre.setValue(response.nombre);
      this.empleadoForm.controls.puesto.setValue(response.puesto);
      this.empleadoForm.controls.salario.setValue(response.salario);
      this.empleadoForm.controls.estatus.setValue(response.estatus);
      this.empleadoForm.controls.fechaContratacion.setValue(response.fechaContratacion);
      this.fotoBase64 = response.foto;
      this.isCreate = response.idEmpleado == "";
    })
  }

  save() {
    if (this.empleadoForm.status == 'INVALID') return;

    const body = {
      idEmpleado: this.empleadoForm.value.idEmpleado,
      foto: this.fotoBase64,
      nombre: this.empleadoForm.value.nombre,
      puesto: this.empleadoForm.value.puesto,
      salario: `${this.empleadoForm.value.salario}`,
      estatus: this.empleadoForm.value.estatus,
      fechaContratacion: this.datePipe.transform(this.empleadoForm.value.fechaContratacion, 'yyyy-MM-dd')
    }

    const emptyState = {
      idEmpleado: "",
      foto: "",
      nombre: "",
      puesto: "",
      salario: "",
      estatus: "",
      fechaContratacion: ""
    }

    this.api.createUpdateEmploye(body, this.isCreate).subscribe({
      next: () => {
        this.stateService.enviarObjToState(emptyState);
        window.location.href = "/";
      },
      error: () => {
        this.stateService.enviarObjToState(emptyState);
        window.location.href = "/";
      }
    });
  }

  deleteEmploye() {
    const dialogRef = this.dialog.open(DeleteModalConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      const body = {
        "idEmpleado": this.empleadoForm.value.idEmpleado
      }
      const emptyState = {
        idEmpleado: "",
        foto: "",
        nombre: "",
        puesto: "",
        salario: "",
        estatus: "",
        fechaContratacion: ""
      }
      if (result) {
        this.api.deleteUser(body).subscribe({
          next: () => {
            // this.router.navigateByUrl('lista');
            this.stateService.enviarObjToState(emptyState);
            window.location.href = "/lista";
          },
          error: () => {
            // this.router.navigateByUrl('lista');
            this.stateService.enviarObjToState(emptyState);
            window.location.href = "/lista";
          }
        });
      }
    });
  }

  convertBase64(file: any) {
    let reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    reader.onload = () => {
      this.fotoBase64 = `${reader.result}`
    };
    reader.onerror = () => {
      this.fotoBase64 = '';
    };

  }

}
