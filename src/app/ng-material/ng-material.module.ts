import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatDialogModule, MatSnackBarModule, MatInputModule, MatFormFieldModule],
  exports: [MatDialogModule, MatSnackBarModule, MatInputModule, MatFormFieldModule],
})
export class NgMaterialModule {}
