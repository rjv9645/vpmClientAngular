import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { MaintenanceService } from '../services/maintenance.service'
import { WorkOrderPojo } from '../objects/workOrder.pojo'

@Component({
    selector: 'maintenance',
    providers: [],
    template: `
    <div class="jumbotron">
       <button (click)="logWorkOrder()">Log Current WO</button>
       <input id="woDescription" name="woDescription" type="text" [(ngModel)]="workOrder.description"/>
    </div>
    `
})

export class MaintenanceComponent implements OnInit{
    workOrder: WorkOrderPojo;

    constructor(private mService: MaintenanceService){
       this.workOrder = new WorkOrderPojo();
    }

    ngOnInit(): void {

    }


    //remove when done.
    logWorkOrder() {
        console.log(JSON.stringify(this.workOrder));
    }

    submitWorkOrder() {
        this.mService.insertWorkOrder(this.workOrder);
        this.workOrder = new WorkOrderPojo();
    }
}

