import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //
  // saveNewRide() {
  //   // if no picture, regular AJAX upload
  //   if (this.uploaderFiles.getNotUploadedItems().length === 0) {
  //     this.saveCamelNoPicture();
  //   }
  //
  //   // else, upload pictures with uploader
  //   else {
  //     this.saveCamelWithPicture();
  //   }
  // } // close saveNewCamel()
  // private saveCamelNoPicture() {
  //   this.camelThang.newCamel(this.camelInfo)
  //     .subscribe(
  //       (newCamelFromApi) => {
  //           this.camelArray.push(newCamelFromApi);
  //           this.isShowingForm = false;
  //           this.camelInfo = {
  //             camelName: "",
  //             camelColor: "#ffffff",
  //             camelHumps: undefined
  //           };
  //           this.saveError = "";
  //       },
  //       (err) => {
  //           this.saveError = 'Don\'t be a dumb 🐫';
  //       }
  //     );
  // } // close saveCamelNoPicture
  //
  // private saveCamelWithPicture() {
  //   this.myCoolUploader.onBuildItemForm = (item, form) => {
  //       form.append('camelName', this.camelInfo.camelName);
  //       form.append('camelColor', this.camelInfo.camelColor);
  //       form.append('camelHumps', this.camelInfo.camelHumps);
  //   };
  //
  //   this.myCoolUploader.onSuccessItem = (item, response) => {
  //       console.log(item);
  //       const newCamelFromApi = JSON.parse(response);
  //       this.camelArray.push(newCamelFromApi);
  //       this.isShowingForm = false;
  //       this.camelInfo = {
  //         camelName: "",
  //         camelColor: "#ffffff",
  //         camelHumps: undefined
  //       };
  //       this.saveError = "";
  //   };
  //
  //   this.myCoolUploader.onErrorItem = (item, response) => {
  //       console.log(item, response);
  //       this.saveError = 'Don\'t be a dumb 🐫';
  //   };
  //
  //   // this is the function that initiates the AJAX request
  //   this.myCoolUploader.uploadAll();
  // } // close saveCamelWithPicture
}
