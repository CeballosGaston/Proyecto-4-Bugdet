import type { ServiceConfig, WebConfig} from "../types/typesBudget";

export const SERVICES: ServiceConfig[] = [
{id: "seo", name: "SEO", basePrice: 300},
{id: "ads", name: "Ads", basePrice: 400},
{id: "web", name: "Web", basePrice: 500}
]


export const WEBCONFIG: WebConfig = {pages: 30, languages:30};


