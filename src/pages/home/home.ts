import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public nativeAudio: NativeAudio,
    public backgroundMode: BackgroundMode,

    private media: Media) {
   

  }
  mediaPlay: MediaObject;
  items = ['1', '2', '3'];
  songIndex: number = 0;
  public playMedia() {
    // this.backgroundMode.enable();
    // this.backgroundMode.on("activate").subscribe(() => {
      
    // });
    if (this.songIndex >= this.items.length)
      this.songIndex = 0;
    let path = 'assets/audio/' + this.items[this.songIndex] + '.wav';
    this.mediaPlay = this.media.create(path);
    //this.nativeAudio.play('uniqueId1', () => console.log('newOder is done playing'));
   
    this.mediaPlay.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

    this.mediaPlay.onSuccess.subscribe(() => {
      if (this.items.length > this.songIndex) {
        this.songIndex++;
        this.mediaPlay.release();
        this.playMedia();
      } else {
        this.mediaPlay.release();
        this.songIndex = 0;
      }
    });

    this.mediaPlay.onError.subscribe(error => console.log('Error!', error));

    // play the file
    this.mediaPlay.play();
  }
  pauseMedia() {
    this.mediaPlay.pause();

  }
  public playAudio() {
    this.nativeAudio.preloadComplex('uniqueId1', 'assets/audio/1.mp3', 0.2, 1, 0)
    .then((success) => {
        console.log("success");
        this.nativeAudio.play('uniqueId1').then((success) => {
          console.log("success playing");
        }, (error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
   
    //this.backgroundMode.enable();
    // this.backgroundMode.enable();
    // this.backgroundMode.on("activate").subscribe(() => {
     
    // });
    //this.nativeAudio.play('uniqueId1', () => console.log('newOder is done playing'));
  }
  // startVideo() {
  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Finished Video') },
  //     errorCallback: (e) => { console.log('Error: ', e) },
  //     orientation: 'portrait'
  //   };

  //   // http://www.sample-videos.com/
  //   this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  // }

  // startAudio() {
  //   let options: StreamingAudioOptions = {
  //     successCallback: () => { console.log('Finished Audio') },
  //     errorCallback: (e) => { console.log('Error: ', e) },
  //     initFullscreen: false // iOS only!
  //   };

  //   //http://soundbible.com/2196-Baby-Music-Box.html
  //   this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
  // }

  // stopAudio() {
  //   this.streamingMedia.stopAudio();
  // }
}
