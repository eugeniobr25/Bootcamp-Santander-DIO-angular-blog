import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities-card',
  templateUrl: './facilities-card.component.html',
  styleUrls: ['./facilities-card.component.css']
})
export class FacilitiesCardComponent implements OnInit {

  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string =""
  @Input()
  miniCardImgCover1:string =""
  @Input()
  miniCardTitle1:string =""
  @Input()
  miniCardDescription1:string =""
  @Input()
  miniCardImgCover2:string =""
  @Input()
  miniCardTitle2:string =""
  @Input()
  miniCardDescription2:string =""
  @Input()
  miniCardImgCover3:string =""
  @Input()
  miniCardTitle3:string =""
  @Input()
  miniCardDescription3:string =""
  
  constructor() { }

  ngOnInit(): void {
  }

}
