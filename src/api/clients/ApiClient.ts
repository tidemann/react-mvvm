import {API_BASE_URL} from '@config/config.ts';
import {singleton} from "tsyringe";
import {IApiClient} from "@interfaces/IApiClient.ts";


@singleton()
export class ApiClient implements IApiClient {
    private baseUrl: string;

    constructor() {
            this.baseUrl = API_BASE_URL;
    }

    async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
    }

    async post<T>(path: string, body: object): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
    }

    // Implement other HTTP methods (PUT, DELETE) as needed
}
