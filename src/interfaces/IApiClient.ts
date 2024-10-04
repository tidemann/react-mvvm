export interface IApiClient {
    get<T>(path: string): Promise<T>;
    post<T>(path: string, body: object): Promise<T>;
}
