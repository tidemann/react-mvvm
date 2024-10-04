// models/ToyModel.ts
import {makeAutoObservable} from 'mobx';
import {IToy} from './IToy';
import {inject, injectable} from 'tsyringe';
import {queryClient} from '@api/queryClient.ts';
import type {IApiClient} from "@interfaces/IApiClient.ts";
import {IApiClientToken} from "@di/tokens.ts";

export interface IToyModel {
    toy: IToy | null;
    loading: boolean;
    error: string | null;

    fetchToy(id: string): Promise<void>;

    createToy(newToy: Partial<IToy>): Promise<void>;
}

@injectable()
export class ToyModel implements IToyModel {
    toy: IToy | null = null;
    loading = false;
    error: string | null = null;

    constructor(
        @inject(IApiClientToken) private apiClient: IApiClient
    ) {
        makeAutoObservable(this);
    }

    async fetchToy(id: string) {
        this.loading = true;
        this.error = null;

        try {
            this.toy = await queryClient.fetchQuery<IToy>({
                queryKey: ['toys', id],
                queryFn: () => this.apiClient.get<IToy>(`/toys/${id}`),
            });
        } catch (error) {
            if (error instanceof Error) {
                this.error = error.message;
            } else {
                this.error = 'Unknown error';
            }
        } finally {
            this.loading = false;
        }
    }

    async createToy(newToy: Partial<IToy>) {
        this.loading = true;
        this.error = null;

        try {
            const data = await this.apiClient.post<IToy>('/toys', newToy);

            this.toy = data;
            // Invalidate queries to refetch updated data if necessary
            await queryClient.invalidateQueries({queryKey: ['toys']});
        } catch (error) {
            if (error instanceof Error) {
                this.error = error.message;
            } else {
                this.error = 'Unknown error';
            }
        } finally {
            this.loading = false;
        }
    }
}
