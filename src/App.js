import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import OurTeam from './components/our-team/OurTeam';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/our-team',
        element: <OurTeam />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
