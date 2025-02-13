import { Router } from "express";
import projectsRouter from "../module/projects/projectsRoute";
const router = Router();
const moduleRoutes = [

  {
    path: "/projects ",
    route: projectsRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
