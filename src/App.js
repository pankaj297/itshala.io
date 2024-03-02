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
        <Route path="blog" element={ <Blog />} />
        <Route path="/faqs" element={ <Faqs />} />
        <Route path="/comments" element={ <Comments /> }/>
        <Route path="/systemdesign" element={ <Systemdesign />} />
        <Route path="/dataStructure" element={ <DataStructure />} />
        <Route path="/Behavioural" element={ <Behavioural />}  />

       </Routes>   
    </BrowserRouter>
  );
  
}

export default App;
