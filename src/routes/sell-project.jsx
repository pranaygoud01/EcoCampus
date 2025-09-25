import { createFileRoute, redirect } from '@tanstack/react-router'
import SellProject from '../pages/SellProject'
import toast from 'react-hot-toast'

export const Route = createFileRoute('/sell-project')({
  beforeLoad: () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (!token || !user) {
      toast('Please sign in to sell', { icon: '🔒' })
      throw redirect({ to: '/' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <SellProject/>
}


