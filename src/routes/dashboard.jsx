import { createFileRoute, redirect } from '@tanstack/react-router'
import Dashboard from '../pages/Dashboard'
import toast from 'react-hot-toast';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      if (typeof window !== 'undefined') {
        toast.error('Please sign in to open');
      }
      throw redirect({ to: '/' });
    }
    return {};
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard/>
}
