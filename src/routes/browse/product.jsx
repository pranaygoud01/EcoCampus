import { createFileRoute } from '@tanstack/react-router'
import SingleProduct from '../../pages/SingleProduct'

export const Route = createFileRoute('/browse/product')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SingleProduct/>
}
