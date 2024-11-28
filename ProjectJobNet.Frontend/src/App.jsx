import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import SignUp from "/src/pages/SignUp";
import NoPage from "/src/pages/NoPage";
import Landing from "/src/pages/Landing";
import Blog from "/src/pages/Blog";
import Post from "src/pages/Post.jsx";
import VacancyPage from "/src/pages/VacancyPage";
import AllVacancies from "./pages/AllVacancies";
import AllServices from "./pages/AllServices";
import ServicePage from "./pages/ServicePage";
import AllResumes from "./pages/AllResumes";
import ResumePage from "./pages/ResumePage";
import UserProfile from "src/pages/UserProfile";
import PersonalInfo from "src/pages/PersonalInfo";
import PersonPage from "src/pages/PersonPage.jsx"
import CompanyPage from "src/pages/CompanyPage.jsx";
import CompanyVacancies from "src/pages/CompanyVacancies.jsx";
import SavedVacancies from "src/pages/SavedVacancies.jsx";
import UserServices from "src/pages/UserServices.jsx";
import PersonalBlog from "src/pages/PersonalBlog.jsx";
import CompanyProfile from "src/pages/CompanyProfile.jsx";
import CreatedVacancies from "src/pages/CreatedVacancies.jsx";
import VacancyForm from './pages/forms/VacancyForm';
import ServiceForm from './pages/forms/ServiceForm';
import ResumeForm from './pages/forms/ResumeForm';
import Header from './components/pageComponents/Header';

export default function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userId = localStorage.getItem("userId");
  const userRole = localStorage.getItem("userRole");

  return (
  <>
    <Header isLoggedIn={isLoggedIn} userRole={userRole} />
    
    <Routes>
      <Route path="/" element={<Landing />} />
      {!isLoggedIn && (
          <Route path='/signup/:role' element={<SignUp/>} />
      )}

      <Route path="/vacancies" element={<AllVacancies />} />
      <Route path="/services" element={<AllServices />} />
      <Route path="/resumes" element={<AllResumes />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/vacancies/:id" element={<VacancyPage />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/resumes/:id" element={<ResumePage />} />
      <Route path="/blog/:id" element={<Post />} />

      <Route path="/user/:id" element={<PersonPage/>}/>
      <Route path="/user/:id/services" element={<UserServices/>}/>
      <Route path="/user/:id/blog" element={<PersonalBlog/>}/>
      {/*<Route path="/user/:id/resumes" element={<NameOfUserResumePage/>}/> */} 

      <Route path="/company/:id" element={<CompanyPage/>}/>
      <Route path="/company/:id/vacancies" element={<CompanyVacancies/>}/>
      <Route path="/company/:id/blog" element={<PersonalBlog/>}/>

      <Route element={<ProtectedRoute />}> 
        <Route path='/signup/:role' element={<Navigate to="/"/>} />

        {userRole === "User" ? (
          <>
            <Route path="/user" element={<UserProfile />}/>
            <Route path="/user/personal-info" element={<PersonalInfo/>}/>
            <Route path="/user/saved-vacancies" element={<SavedVacancies/>}/>
            <Route path="/user/my-services" element={<UserServices/>}/>
            <Route path="/user/my-blog" element={<PersonalBlog/>}/>
            {/*<Route path="/user/my-resumes" element={<NameOfUserResumePage/>}/> */} 

            <Route path="/company" element={<Navigate to="/"/>}/>
            <Route path="/company/my-vacancies" element={<Navigate to="/"/>}/>
            <Route path="/company/my-blog" element={<Navigate to="/"/>}/>
            <Route path="/company/saved-resumes" element={<Navigate to="/"/>}/>

            <Route path="/vacancy/:action/:id?" element={<Navigate to="/"/>} />
            <Route path="/service/:action/:id?" element={<ServiceForm />} />
            <Route path="/resume/:action/:id?" element={<ResumeForm />} />
          </>
      ) : (
          <>
            <Route path="/user" element={<Navigate to="/"/>}/>
            <Route path="/user/personal-info" element={<Navigate to="/"/>}/>
            <Route path="/user/saved-vacancies" element={<Navigate to="/"/>}/>
            <Route path="/user/my-services" element={<Navigate to="/"/>}/>
            <Route path="/user/my-blog" element={<Navigate to="/"/>}/>
            <Route path="/user/my-resumes" element={<Navigate to="/"/>}/>

            <Route path="/company" element={<CompanyProfile/>}/>
            <Route path="/company/my-vacancies" element={<CreatedVacancies/>}/>
            <Route path="/company/my-blog" element={<PersonalBlog/>}/>
            {/*<Route path="/company/saved-resumes" element={<NameOfSavedResumePage/>}/> */} 

            <Route path="/vacancy/:action/:id?" element={<VacancyForm />} />
            <Route path="/service/:action/:id?" element={<Navigate to="/"/>} />
            <Route path="/resume/:action/:id?" element={<Navigate to="/"/>} />
          </>
      )}
      </Route>

      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
  )
}
  

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? <Outlet /> : <Navigate to="/signup/:role"/> 
}