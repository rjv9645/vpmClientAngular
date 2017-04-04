import { Injectable } from '@angular/core'
import { Http, Response, 
         Headers, RequestOptions} from '@angular/http'
import { WorkOrderPojo } from '../objects/workOrder.pojo'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class MaintenanceService {

    private baseUrl ="http://localhost:8080/api/v1/maintenance/";

    constructor(private _http: Http){

    }

    insertWorkOrder(workOrder: WorkOrderPojo) : void 
    {
        var restUrl = this.baseUrl +"/insert";
        console.log("Calling service: " + restUrl);

        this._http.post(restUrl, 
            JSON.stringify(workOrder));
    }
}