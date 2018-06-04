import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Media, MediaObject } from '@ionic-native/media';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    BackgroundMode,
    NativeAudio,
    StatusBar,
    SplashScreen,
    StreamingMedia,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
