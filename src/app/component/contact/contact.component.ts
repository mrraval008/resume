import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var emailjs: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public isFormvalid:boolean = true;
  public mailSendText= 'Mail has been Sent , Thank You';
  constructor() { }

  ngOnInit() {
    (<any>$('.toast')).toast({
      delay: 3000
    });
    emailjs.init("user_QcLEIvUpm2X6FPmWhljn4");
  }

  onSendMessage(form:NgForm){
    
    if(!form.valid){
      this.isFormvalid = false
      return
    }else{
      this.isFormvalid = true;
    }
    var template_params = {
      "reply_to": "milanraval",
      "from_name": `${form.value.name}<${form.value.email}>`,
      "to_name": "Milan",
      "message_html": form.value.message
   }
   var service_id = "gmail";
   var template_id = "template_AV6cExbd";
   emailjs.send(service_id, template_id, template_params)
      .then(message=>{
          if(message && message.status === 200 && message.text === 'OK'){
            this.mailSendText = 'Mail has been Sent , Thank You';
          }else{
            this.mailSendText = 'Issue with Email Sending. Please try after some time';
          }
          (<any>$('.toast')).toast('show');
      }).catch(error=>{
        console.log(error)
        this.mailSendText = 'Issue with Email Sending. Please try after some time';
        (<any>$('.toast')).toast('show');
      })
  }
}
