import "reflect-metadata"
import {describe, test, expect, beforeEach, vi} from 'vitest';
import {ToyCreateViewModel} from './ToyCreateViewModel';
import {container, injectable} from 'tsyringe';
import {ToyModelToken, RouterToken} from '@di/tokens';
import {IToyModel} from "@models/ToyModel.ts";
import {IToy} from "@models/IToy.ts";


@injectable()
class MockToyModel implements IToyModel {
    createToy = vi.fn();
    error: string | null = null;
    loading: boolean = false;
    toy: IToy | null = null;

    fetchToy(id: string): Promise<void> {
        this.toy = {
            id,
            name: 'Test Name',
            description: 'Test Description',
        };
        return Promise.resolve();

    }
}


@injectable()
class MockRouter {
    navigate = vi.fn();
}

describe('ToyCreateViewModel', () => {
    let viewModel: ToyCreateViewModel;
    let mockToyModel: MockToyModel;
    let mockRouter: MockRouter;

    beforeEach(() => {
        container.reset();

        mockToyModel = new MockToyModel();
        mockRouter = new MockRouter();

        container.registerInstance(ToyModelToken, mockToyModel);
        container.registerInstance(RouterToken, mockRouter);

        viewModel = container.resolve(ToyCreateViewModel);
    });

    test('should initialize with empty name and description', () => {
        expect(viewModel.name).toBe('');
        expect(viewModel.description).toBe('');
    });

    test('setName should update the name', () => {
        viewModel.setName('Test Name');
        expect(viewModel.name).toBe('Test Name');
    });

    test('setDescription should update the description', () => {
        viewModel.setDescription('Test Description');
        expect(viewModel.description).toBe('Test Description');
    });

    test('save should alert if name is empty and not call createToy or navigate', async () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });

        viewModel.setName('');
        await viewModel.save();

        expect(alertMock).toHaveBeenCalledWith('Name is required');
        expect(mockToyModel.createToy).not.toHaveBeenCalled();
        expect(mockRouter.navigate).not.toHaveBeenCalled();

        alertMock.mockRestore();
    });

    test('save should call createToy and navigate when name is provided', async () => {
        viewModel.setName('Test Name');
        viewModel.setDescription('Test Description');

        mockToyModel.createToy.mockResolvedValueOnce({});

        await viewModel.save();

        expect(mockToyModel.createToy).toHaveBeenCalledWith({
            name: 'Test Name',
            description: 'Test Description',
        });

        expect(mockRouter.navigate).toHaveBeenCalledWith({to: '/toysList'});
    });

    test('save should handle errors from createToy and not call navigate', async () => {
        const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {
        });

        viewModel.setName('Test Name');
        viewModel.setDescription('Test Description');

        const error = new Error('Test Error');
        mockToyModel.createToy.mockRejectedValueOnce(error);

        await viewModel.save();

        expect(consoleErrorMock).toHaveBeenCalledWith('Error saving toy', error);
        expect(mockRouter.navigate).not.toHaveBeenCalled();

        consoleErrorMock.mockRestore();
    });
});
