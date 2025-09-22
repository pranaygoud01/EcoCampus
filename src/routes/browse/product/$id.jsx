// routes/browse/product/$id.jsx
import { createFileRoute } from "@tanstack/react-router";
import SingleProduct from "../../../pages/SingleProduct";

export const Route = createFileRoute("/browse/product/$id")({
  component: () => <SingleProduct />,
});
