import { Component, Renderer, ElementRef} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    selectedAlert1: string = "any food";
    inputsAlert1: any;
    selectedAlert2: string = "standard";
    inputsAlert2: any;
    selectedAlert3: string = "anytime";
    inputsAlert3: any;
    flagInput: boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public renderer: Renderer, public elementRef: ElementRef) {
      this.inputsAlert1 = [
          {type: 'radio', label: 'any food', value: '1', checked: true},
          {type: 'radio', label: 'Indian', value: '2', checked: false},
          {type: 'radio', label: 'French', value: '3', checked: false},
          {type: 'radio', label: 'Japanese', value: '4', checked: false},
          {type: 'radio', label: 'Italian', value: '5', checked: false}
      ];

      this.inputsAlert2 = [
          {type: 'radio', label: 'standard', value: '1', checked: true},
          {type: 'radio', label: 'fancy', value: '2', checked: false},
          {type: 'radio', label: 'hip', value: '3', checked: false},
          {type: 'radio', label: 'traditional', value: '4', checked: false},
          {type: 'radio', label: 'romantic', value: '5', checked: false}
      ];

      this.inputsAlert3 = [
          {type: 'radio', label: 'anytime', value: '1', checked: true},
          {type: 'radio', label: '7 p.m.', value: '2', checked: false},
          {type: 'radio', label: '8 p.m', value: '3', checked: false},
          {type: 'radio', label: '9 p.m.', value: '4', checked: false},
      ];

      this.flagInput = false;

  }

    ionViewLoaded() {

    }

  showAlert(alertIndex) {
      let title = '';
      let inputs = [];
      if (alertIndex == 1) {
          title = 'I feel to eat';
          inputs = this.inputsAlert1;
      }
      if (alertIndex == 2) {
          title = 'Restaurant type';
          inputs = this.inputsAlert2;
      }
      if (alertIndex == 3) {
          title = 'At';
          inputs = this.inputsAlert3;
      }

    let alert = this.alertCtrl.create({
      title: title,
      inputs: inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accept',
          handler: data => {
              //console.log(data);

              let index = parseInt(data) - 1;

              if(index > -1) {
                  if (alertIndex == 1) {
                      this.selectedAlert1 = this.inputsAlert1[index].label;
                  }
                  if (alertIndex == 2) {
                      this.selectedAlert2 = this.inputsAlert2[index].label;
                  }
                  if (alertIndex == 3) {
                      this.selectedAlert3 = this.inputsAlert3[index].label;
                  }
              }

          }
        }
      ]
    });
    alert.present();
  }


    showInput() {
        this.flagInput = !this.flagInput;

        setTimeout(() => {
            let element = this.elementRef.nativeElement.querySelector('input');
            this.renderer.invokeElementMethod(element, 'focus', []);
        },150);

    }

    onClickButton() {
        console.log("Button clicked");
        // Do something.
    }

}
