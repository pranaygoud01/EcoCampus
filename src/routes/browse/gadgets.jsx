import { createFileRoute } from '@tanstack/react-router'
import CategoryProducts from '../../pages/category/Products'

export const Route = createFileRoute('/browse/gadgets')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CategoryProducts category="Gadgets"/>
}
