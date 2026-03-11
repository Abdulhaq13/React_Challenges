import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Exercise2 from "./exercises/exercise2.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Exercise2 />
  </StrictMode>,
);
