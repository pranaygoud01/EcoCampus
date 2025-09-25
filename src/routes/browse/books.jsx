import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/browse/books')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/browse/books"!</div>
}
