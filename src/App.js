import React from 'react';
import "./App.css";
import Header from "./components/header";
import Sign from './components/sign';
import Account from './components/account';
import Forget from './components/forget';
import Newpassword from './components/newpassword';
import Varification from './components/varification';
import Blog from './components/blog';
import Faqs from './components/faqs';
import Comments from './components/comments';

import { BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/account" element={<Account />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/varification" element={<Varification />} />
        <Route path="/newpassword" element={<Newpassword />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="blog" element={ <Blog />} />
        <Route path="/faqs" element={ <Faqs />} />
        <Route path="/comments" element={ <Comments /> }/>
       </Routes>   
    </BrowserRouter>
  );
  
}

export default App;
