import Dashboard from "./pages/Dashboard";
import { Routes, Route } from 'react-router-dom';
import AppealList from "./pages/AppealList";
import Login from "./pages/Login";
import AppealAssessment from "./pages/AppealAssessment";

import UserLoginPlaceholder from "./pages/UserLoginPlaceholder";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/appeals/:type" element={<AppealList/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user-login" element={<UserLoginPlaceholder/>}/>
      <Route path="/appeal-assessment" element={<AppealAssessment />} />


    </Routes>
  );
}

export default App;
