//App.jsx
import Navbar from "./components/navbar/Navbar"
import AboutPage from "./pages/AboutPage"
import BlogPage from "./pages/BlogPage"
import HomePage from "./pages/HomePage"
import JournalPage from "./pages/JournalPage"
import NewsletterPage from "./pages/NewsletterPage"
import { Route,Routes } from 'react-router-dom';
import { CallbackPage } from "./pages/callback-page";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div>
        <div className="p-10">
        <JournalPage />
          <Routes>        
            <Route path="/"  element={<HomePage/>} />
            <Route path="/about"  element={<AboutPage />}/>
            <Route path="/blog"  element={<BlogPage/>}/>
            <Route path="/newsletter"  element={<NewsletterPage/>}/>
            <Route path="/callback"  element={<CallbackPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
