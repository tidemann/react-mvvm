import {makeAutoObservable} from "mobx";
import {ToyModel} from "@models/ToyModel.ts";
import {inject, injectable} from "tsyringe";
import {Router} from "@tanstack/react-router";
import {ToyModelToken, RouterToken} from "@di/tokens.ts";

@injectable()
export class ToyCreateViewModel {
    name: string = '';
    description: string = '';

    constructor(
        @inject(ToyModelToken) private toyModel: ToyModel,
        @inject(RouterToken) private router: Router<never, never>
    ) {
        makeAutoObservable(this);
    }

    async save() {
        // Save toy
        if (this.name.trim() === '') {
            alert('Name is required');
            return;
        }
        try {
            await this.toyModel.createToy({name: this.name, description: this.description});
            await this.router.navigate({ to: '/toysList' });
        } catch (error) {
            console.error('Error saving toy', error);
        }
    }

    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }
}
