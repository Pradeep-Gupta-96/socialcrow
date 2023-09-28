import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './Master.css'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Questions from './Components/Questions';
import Content from './Components/Content';
import HomePage from './HomePage/HomePage';
import Services from './Components/Services';
import Carts from './Components/Carts';
import Twitter from './Components/Services/Twitter';
import PrivacyPolicy from './Components/PrivacyPolicy';
import RefundDelivery from './Components/RefundDelivery';
import TermsOfService from './Components/TermsOfService';

const myAllroute = [
  { path: "/", element: <HomePage /> },
  { path: "/questions", element: <Questions /> },
  { path: "/content", element: <Content /> },
  { path: "/services", element: <Services /> },
  { path: "/carts", element: <Carts /> },
  { path: "/twitter", element: <Twitter /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/RefundDelivery", element: <RefundDelivery /> },
  { path: "/TermsOfService", element: <TermsOfService /> },
]

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {myAllroute.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
