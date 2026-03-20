import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Exercise5 from "./exercises/Exercise5_AccordianComponent/Exercise5.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Exercise5 />
  </StrictMode>,
);
