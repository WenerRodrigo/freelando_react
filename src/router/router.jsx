import { createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../pages/paginaInicial";

export const router = createBrowserRouter({
    path: "/",
    element: <PaginaInicial />,
    children: [],
})