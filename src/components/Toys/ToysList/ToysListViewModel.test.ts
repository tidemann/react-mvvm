import {ToysListViewModel} from './ToysListViewModel';
import { expect, test} from 'vitest';
import {ToysModel} from "@models/ToysModel.ts";

test("ToysListViewModel", () => {
    const toysModel = new ToysModel();
    toysModel.toys = [
        {id: '1', name: 'Toy 1', description: 'Description 1'},
        {id: '2', name: 'Toy 2', description: 'Description 2'},
        {id: '3', name: 'Toy 3', description: 'Description 3'},
    ];
    const vm = new ToysListViewModel(toysModel);
    expect(vm.toys).toEqual(toysModel.toys);
});
