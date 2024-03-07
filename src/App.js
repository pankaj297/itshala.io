import React from 'react';
import "./App.css";
import Allcomponents from './components/allcomponents';
import Sign from './components/sign';
import Account from './components/account';
import Forget from './components/forget';
import Newpassword from './components/newpassword';
import Varification from './components/varification';
import Blog from './components/blog';
import Faqs from './components/faqs';
import Comments from './components/comments';
import Systemdesign from './components/systemdesign';
import Behavioural from './components/Behavioural';
import DataStructure from './components/datastructure';
import Yourcourse from './components/loginuser/Yourcourse';
import Loginusernav from './components/loginuser/loginusernav';
import Selectcourse from './components/loginuser/selectcourse';
import Loginuserhome from './components/loginuser/loginuserhome';
import LogSDS from './components/loginuser/logSDS';
import LogDS from './components/loginuser/logDS';
import LogBinterviews from './components/loginuser/logBinterviews';
import Loguserblog from './components/loginuser/loguserblog';

import { BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Allcomponents />} />
        <Route path="/account" element={<Account />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/varification" element={<Varification />} />
        <Route path="/newpassword" element={<Newpassword />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/systemdesign" element={<Systemdesign />} />
        <Route path="/dataStructure" element={<DataStructure />} />
        <Route path="/Behavioural" element={<Behavioural />} />
        <Route path="/Yourcourse" element={<Yourcourse />} />
        <Route path="/loginusernav" element={<Loginusernav />} />
        <Route path="/selectcourse" element={<Selectcourse />} />
        <Route path="/loginuserhome" element={<Loginuserhome />} />
        <Route path="/logSDS" element={<LogSDS />} />
        <Route path="/logDS" element={<LogDS />} />
        <Route path="/logBinterviews" element={<LogBinterviews />} />
        <Route path="/loguserblog" element={<Loguserblog />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
