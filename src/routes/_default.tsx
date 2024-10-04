import {createFileRoute, Outlet} from '@tanstack/react-router'
import {Navigation} from "@components/Navigation/Navigation.tsx";

export const DefaultLayout = () => (
    <div className="p-2">
        <Navigation />
        <Outlet/>
    </div>
)

export const Route = createFileRoute('/_default')({
    component: DefaultLayout
})
