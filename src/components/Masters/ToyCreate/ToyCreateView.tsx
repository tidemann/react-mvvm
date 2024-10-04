import React from "react";
import {observer} from "mobx-react-lite";
import {ToyCreateViewModel} from "./ToyCreateViewModel";

interface ToyCreateViewProps {
    viewModel: ToyCreateViewModel;
}

export const ToyCreateView: React.FC<ToyCreateViewProps> = observer(({viewModel}) => {
    return (
        <div>
            <h1>Create Toy</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                void (async () => {
                    await viewModel.save();
                })();
            }}>
                <div>
                    <label>
                        Name:<br/>
                        <input type="text" onChange={(e) => viewModel.setName(e.target.value)} name="toy-name"/>
                    </label>
                </div>
                <div>
                    <label>
                        Description:<br/>
                        <textarea onChange={(e) => viewModel.setDescription(e.target.value)} name="toy-description"/>
                    </label>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
});
