import { createFileRoute } from '@tanstack/react-router'
import Projects from '../../pages/Projects'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Projects/>
}
