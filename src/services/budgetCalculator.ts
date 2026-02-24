

import { SERVICES, WEBCONFIG } from "../config/services";
import type { WebConfig, ServiceType } from "../types/typesBudget";


export function calculateBudget (selectedServices: ServiceType[], webConfig?: WebConfig) :number {

let total = 0;


selectedServices.forEach(selected=> {
const service = SERVICES.find(s=> s.id === selected);
if(service) total += service.basePrice;
});

if(selectedServices.includes("web") && webConfig){

total += webConfig.languages * WEBCONFIG.languages;
total += webConfig.pages * WEBCONFIG.pages;
 
}




return total;

}
