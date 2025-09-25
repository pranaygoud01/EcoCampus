import { createFileRoute } from '@tanstack/react-router'
import CategoryProducts from '../../pages/category/Products'

export const Route = createFileRoute('/browse/labcoats')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CategoryProducts category="Lab Coats"/>
}
