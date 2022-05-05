import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Page/ShearPage/Header/Header';
import Home from './Page/Home/Home';
import NotFound from './Page/ShearPage/NotFound/NotFound';
import Inventories from './Page/Inventories/Inventories';
import Footer from './Page/ShearPage/Footer/Footer';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='inventory' element={<Inventories></Inventories>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
