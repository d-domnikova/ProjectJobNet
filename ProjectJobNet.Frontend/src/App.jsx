import { Routes, Route } from 'react-router-dom';

import SignUp from "/src/pages/SignUp";
import NoPage from "/src/pages/NoPage";
import Landing from "/src/pages/Landing";
import Blog from "/src/pages/Blog";
import Post from "src/pages/Post.jsx";
import VacancyPage from "/src/pages/VacancyPage";
import AllVacancies from "./pages/AllVacancies";
import AllServices from "./pages/AllServices";
import ServicePage from "./pages/ServicePage";
// import SignIn from "./components/modals/SignIn";
// import ReportForm from "./components/modals/ReportForm";
import UserProfile from "src/pages/UserProfile";
import PersonalInfo from "src/pages/PersonalInfo";

export default function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path="/vacancies" element={<AllVacancies />} />
      <Route path="/services" element={<AllServices />} />
      <Route path="/vacancies/:id" element={<VacancyPage />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/userprofile" element={<UserProfile />}/>
      <Route path="/personalinfo" element={<PersonalInfo/>}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
  )
}
  