import {createFileRoute} from '@tanstack/react-router'
import {ToyCreateView} from "@components/Toys/ToyCreate/ToyCreateView.tsx";
import {container} from 'tsyringe';
import {ToyCreateViewModel} from "@components/Toys/ToyCreate/ToyCreateViewModel.ts"


export const Route = createFileRoute('/_default/toyCreate')({
    component: () => {
        const vm = container.resolve(ToyCreateViewModel);
        return <ToyCreateView viewModel={vm}/>
    }
})
