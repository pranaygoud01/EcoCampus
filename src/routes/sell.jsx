import { createFileRoute } from '@tanstack/react-router'
import Sell from '../pages/Sell'

export const Route = createFileRoute('/sell')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Sell/>
}
