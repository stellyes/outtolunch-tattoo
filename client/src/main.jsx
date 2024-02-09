import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';

import Home from './pages/Home.jsx';
import Flash from './pages/Flash.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "flash",
                element: <Flash />
            },
            {
                path: "portfolio",
                element: <Portfolio />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "booking",
                element: <Booking />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);