import React from 'react';
import { observer } from 'mobx-react-lite';
import {ToysListViewModel} from "./ToysListViewModel.ts";
import {ToyListItem} from "@components/Toys/ToyListItem/ToyListItem.tsx";


interface ToysListViewProps {
    viewModel: ToysListViewModel;
}

export const ToysListView: React.FC<ToysListViewProps> = observer(({ viewModel }) => {
    return (
        <div>
            <h1>Toys List</h1>
            <ul>
                {viewModel.toys.map((toy) => (
                    <li key={toy.id}>
                        <ToyListItem item={toy} />
                    </li>
                ))}
            </ul>
        </div>
    );
});
