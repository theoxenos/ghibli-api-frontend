import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import 'bootstrap/js/dist/dropdown.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
);
