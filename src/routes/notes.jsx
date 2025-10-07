import { createFileRoute } from '@tanstack/react-router'
import NotesPage from '../pages/Notes'

export const Route = createFileRoute('/notes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NotesPage />
}
