export type ServiceType = "seo" | "ads" | "web";

export interface ServiceConfig {
  id: ServiceType;
  name: string;
  basePrice: number;
  description: string
}


export interface WebConfig{
    pages: number;
    languages: number;
}

export interface Budget {
id: string;
clientName:string;
clientEmail: string;
clientPhone: string;
service:ServiceType[];
webConfig? : WebConfig;
total: number;
createdAt: Date;
}
