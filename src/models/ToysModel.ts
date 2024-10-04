// models/ToysModel.ts
import {makeAutoObservable, runInAction} from 'mobx';
import {IToy} from './IToy';
import {API_BASE_URL} from "@config/config.ts";

export class ToysModel {
    toys: IToy[] = [];
    loading = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchToys() {
        this.loading = true;
        this.error = null;
        try {
            const response = await fetch(`${API_BASE_URL}/toys`);
            const data: IToy[] = await response.json() as IToy[];
            runInAction(() => {
                this.toys = data;
                this.loading = false;
            });
        } catch (error: unknown) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : 'Unknown error';
                this.loading = false;
            });
        }
    }

    async addToy(newToy: Partial<IToy>) {
        this.loading = true;
        this.error = null;
        try {
            const response = await fetch(`${API_BASE_URL}/toys`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newToy),
            });
            const data: IToy = await response.json() as IToy;
            runInAction(() => {
                this.toys.push(data);
                this.loading = false;
            });
        } catch (error: unknown) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : 'Unknown error';
                this.loading = false;
            });
        }
    }
}
