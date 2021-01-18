import { Router } from "express";

const router = Router();

router.use("/", function (req, res) {
  console.log("hi");
});

export default router;
