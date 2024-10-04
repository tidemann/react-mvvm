import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_default/')({
  component: Index,
})

function Index() {
  return (
      <div className="p-2">
            <h1>Hello from /_default/</h1>
            <p>This is the default route. It is the parent route for the other routes in this directory.</p>
      </div>
  )
}
