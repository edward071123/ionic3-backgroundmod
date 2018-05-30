import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform,public nativeAudio: NativeAudio, public backgroundMode: BackgroundMode) {
    
  }
  public playAudio() {
    this.platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueId1', 'assets/audio/1.mp3', 1, 1, 0).then((success) => {
        console.log("success");
        this.nativeAudio.play('uniqueId1').then((success) => {

          console.log("success playing");
        }, (error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
    });
   
    //this.backgroundMode.enable();
    // this.backgroundMode.enable();
    // this.backgroundMode.on("activate").subscribe(() => {
     
    // });
    //this.nativeAudio.play('uniqueId1', () => console.log('newOder is done playing'));
  }

}
