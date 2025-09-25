import { createFileRoute } from '@tanstack/react-router'
import SellProject from '../pages/SellProject'

export const Route = createFileRoute('/sell-project')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SellProject/>
}


