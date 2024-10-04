import {createFileRoute} from '@tanstack/react-router'
import {ToysListViewModel} from '@components/Toys/ToysList/ToysListViewModel.ts'
import {ToysListView} from '@components/Toys/ToysList/ToysListView.tsx'
import {ToysModel} from '@models/ToysModel'

interface LoaderData {
  toysListViewModel: ToysListViewModel
}

export const Route = createFileRoute('/_default/toysList')({
  loader: async (): Promise<LoaderData> => {
    const toysModel = new ToysModel()
    await toysModel.fetchToys()
    const toysListViewModel = new ToysListViewModel(toysModel)
    return { toysListViewModel }
  },
  component: function ToysListRouteComponent() {
    const data = Route.useLoaderData<LoaderData>()
    const { toysListViewModel } = data
    return <ToysListView viewModel={toysListViewModel} />
  },
})
