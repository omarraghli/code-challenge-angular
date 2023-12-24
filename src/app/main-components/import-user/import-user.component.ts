import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-import-user',
  templateUrl: './import-user.component.html',
  styleUrl: './import-user.component.css'
})
export class ImportUserComponent {

  selectedFile: File | null = null;

  constructor(private userService: UserService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile() {
    if (this.selectedFile) {
      this.userService.uploadUserFile(this.selectedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully!', response);
          // Handle success, if needed
        },
        (error) => {
          console.error('Error uploading file:', error);
          // Handle error, if needed
        }
      );
    } else {
      console.warn('No file selected');
    }
  }

}
