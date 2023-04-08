import Header from './Components/Header/Header';
import './App.css';
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Tabs from './Components/Extra/Tabs';
import AddPost from './Components/AddPost/AddPost';

import Header1 from './Components/Header/Header1';



function App() {
  return (

// older code

    // <div className="App">
    //   <Header />
    //   {/* <Posts/> */}

    //   <Routes>
    //     <Route path='/' element={<App />} />
    //     <Route path='/Login' element={<Login />} />
    //   </Routes>
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header1 />} />
      <Route path='/Posts' element={<Posts />} />
      <Route path='/AddPost' element={<AddPost/>} />
    </Routes>
    </BrowserRouter>

    // <Tabs />
    // <Header1/>
  );
}

export default App;
