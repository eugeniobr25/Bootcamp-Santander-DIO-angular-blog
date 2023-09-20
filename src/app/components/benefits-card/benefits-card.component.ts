import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits-card',
  templateUrl: './benefits-card.component.html',
  styleUrls: ['./benefits-card.component.css']
})
export class BenefitsCardComponent implements OnInit {
  @Input()
  imgCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  miniCardTitle1:string =""
  @Input()
  miniCardDescription1:string =""
  @Input()
  miniCardTitle2:string =""
  @Input()
  miniCardDescription2:string =""
  @Input()
  miniCardTitle3:string =""
  @Input()
  miniCardDescription3:string =""
  @Input()
  miniCardTitle4:string =""
  @Input()
  miniCardDescription4:string =""
  @Input()
  miniCardTitle5:string =""
  @Input()
  miniCardDescription5:string =""
  @Input()
  miniCardTitle6:string =""
  @Input()
  miniCardDescription6:string =""
  constructor() { }

  ngOnInit(): void {
  }

}
