import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
@Input() status: number;
@Output() changeStatus: EventEmitter<number>;
  constructor() {
   this.status = 0;
   this.changeStatus = new EventEmitter();
   }

  ngOnInit(): void {
  }
onChangeStatus (newStatus: number){
  this.changeStatus.emit(newStatus);

};
}
