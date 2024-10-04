import {Meta, StoryFn} from '@storybook/react';
import {ToysListView} from '@components/Toys/ToysList/ToysListView.tsx';
import {ToysListViewModel} from '@components/Toys/ToysList/ToysListViewModel.ts';
import {ToysModel} from '@models/ToysModel';
import {IToy} from "@models/IToy.ts";


const meta: Meta = {
    component: ToysListView,
    parameters: {
        controls: {
            exclude: ['viewModel']
        },
    },
    argTypes: {
        toys: {
            control: {
                type: "object"
            }
        }
    }
};
export default meta;

export const Default: StoryFn<{ toys: IToy[] }> = (args) => {
    const toysModel = new ToysModel();
    toysModel.toys = args.toys;
    const viewModel = new ToysListViewModel(toysModel);
    return <ToysListView viewModel={viewModel}/>;
};

Default.args = {
    toys: [
        {id: "1", name: 'Toy 1', description: 'Description 1'},
        {id: "2", name: 'Toy 2', description: 'Description 2'},
        {id: "3", name: 'Toy 3', description: 'Description 3'},
    ]
};
