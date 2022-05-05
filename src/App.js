import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Page/ShearPage/Footer/Footer';
import Header from './Page/ShearPage/Header/Header';
import Home from './Page/Home/Home';
import Items from './Page/Items/Items';
import NotFound from './Page/ShearPage/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='items' element={<Items></Items>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
