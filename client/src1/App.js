// import { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Header from './components/header';
//pages
import HomePage from './pages/homePage';
import DaoPage from './pages/daoPage';
import UserProfile from './pages/UserProfile';
import JobPage from './pages/JobPage';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import Membership from './pages/Membership';
import ProposalPage from './pages/ProposalPage';
function App() {
   
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dao/:contract" element={<DaoPage />} />
        <Route path="/users/:user" element={<UserProfile />} />
        <Route path="/jobBoard" element={<JobPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<ArticlePage />} />
        <Route path='/membership' element={<Membership/>}/>
        <Route path='/proposal/:id' element={<ProposalPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
