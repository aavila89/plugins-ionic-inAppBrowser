import { Component, OnInit } from '@angular/core';
import {InAppBrowser, InAppBrowserObject} from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  brow!: InAppBrowserObject;
  constructor(
    private inAppBrowser: InAppBrowser
  ) {}
 
  ngOnInit(): void {
    this.goToWeb('https://ionicframework.com/');
  }

  goToWeb(url: string) {
    this.brow = this.inAppBrowser.create(url, '_blank',
    'presentationstyle=formsheet,toolbarposition=top,fullscreen=no,hideurlbar=yes,toolbarcolor=#176bff,closebuttoncolor=#ffffff,navigationbuttoncolor=#ffffff');

   this.brow.on('loadstop').subscribe(event => {
    this.brow.insertCSS({ code: 'header h1 {color: red !important;}' });
    this.brow.insertCSS({ code: '.ds-button--copy {display: none !important;}' });
    this.brow.executeScript({ code: 'document.querySelector(".ds-paragraph-2").innerHTML = "This is an example of how to execute a script with the plugin Inappbrowser."' });
    this.brow.executeScript({ code: 'document.querySelector(".homepage_topCta__8VY9q").innerHTML = "Subscribe to my channel"' });
    this.brow.executeScript({ code: 'document.querySelector(".homepage_topCta__8VY9q").href = "https://www.youtube.com/channel/UCnbVVCpopgH8Y_uu601z8Qg"' });
   });

   this.brow.on('loaderror').subscribe(event => {
     this.brow.hide();
   });
  }

}
