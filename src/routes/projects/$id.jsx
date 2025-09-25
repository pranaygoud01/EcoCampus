// routes/projects/$id.jsx
import { createFileRoute } from "@tanstack/react-router";
import SingleProject from "../../pages/SingleProject";

export const Route = createFileRoute("/projects/$id")({
  component: () => <SingleProject />,
});

