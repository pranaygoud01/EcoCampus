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

  // Smooth scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return (
    <React.Fragment>
      {!hideLayout && <NavBar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </React.Fragment>
  )
}
