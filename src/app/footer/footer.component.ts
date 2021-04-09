import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  latitude = 8.81021503943979;
  longitude = 78.14533777791716;
  constructor() { }

  ngOnInit() {
  }

}
