import {makeAutoObservable} from 'mobx';
import {ToysModel} from "@models/ToysModel.ts";
import {IToy} from "@models/IToy.ts";


export class ToysListViewModel {
    toys: IToy[] = [];

    constructor(toyModel: ToysModel) {
        makeAutoObservable(this);
        this.toys = toyModel.toys;
    }
}
