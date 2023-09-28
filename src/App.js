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
import Instagram from './Components/Services/Instagram';
import Tiktok from './Components/Services/Tiktok';
import Threads from './Components/Services/Threads';
import Youtube from './Components/Services/Youtube';
import Discord from './Components/Services/Discord';
import Facebook from './Components/Services/Facebook';
import Twitch from './Components/Services/Twitch';
import Kick from './Components/Services/Kick';
import Telegram from './Components/Services/Telegram';

const myAllroute = [
  { path: "/", element: <HomePage /> },
  { path: "/questions", element: <Questions /> },
  { path: "/content", element: <Content /> },
  { path: "/services", element: <Services /> },
  { path: "/carts", element: <Carts /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/twitter", element: <Twitter /> },
  { path: "/Instagram", element: <Instagram /> },
  { path: "/Tiktok", element: <Tiktok /> },
  { path: "/Threads", element: <Threads /> },
  { path: "/Youtube", element: <Youtube /> },
  { path: "/Discord", element: <Discord /> },
  { path: "/Facebook", element: <Facebook /> },
  { path: "/Twitch", element: <Twitch /> },
  { path: "/Kick", element: <Kick /> },
  { path: "/Telegram", element: <Telegram /> },
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
