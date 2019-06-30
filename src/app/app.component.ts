import { Component,TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationOptions, ContentOptionsEnum }from 'intl-input-phone';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  item:any;
   configOption3 : ConfigurationOptions;
    modalRef: BsModalRef;
   constructor(private http: HttpClient,private modalService: BsModalService) {
      this.configOption3 = new ConfigurationOptions();
    this.configOption3.SelectorClass = "OptionType3";
      this.configOption3.OptionTextTypes = [];
    this.configOption3.OptionTextTypes.push(ContentOptionsEnum.Flag);
    this.configOption3.OptionTextTypes.push(ContentOptionsEnum.CountryName);
    this.configOption3.OptionTextTypes.push(ContentOptionsEnum.CountryPhoneCode);
    

   }
   ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://ipapi.co/json/').subscribe(data => {
      this.item = data;
      console.log(this.item.country_calling_code);
      console.log(data);
    });
     
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log("load");
  }
  	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});
}
