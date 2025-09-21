import * as React from 'react'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const router = useRouterState()

  // get the current pathname
  const pathname = router.location.pathname
  const hideLayout = pathname === '/login' || pathname === '/register'

  return (
    <React.Fragment>
      {!hideLayout && <NavBar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </React.Fragment>
  )
}
