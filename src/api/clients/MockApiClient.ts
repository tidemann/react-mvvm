import {injectable} from "tsyringe";
import {IApiClient} from "@interfaces/IApiClient.ts";

@injectable()
export class MockApiClient implements IApiClient {
    async get<T>(path: string): Promise<T> {
        // Return mock data based on the path
        console.log('GET', path);
        return Promise.resolve({} as T); // Replace with actual mock data
    }
    async post<T>(path: string, body: object): Promise<T> {
        // Return mock data or simulate behavior
        console.log('POST', path, body);
        return Promise.resolve({} as T); // Replace with actual mock data
    }

    // Implement other methods if necessary
}
