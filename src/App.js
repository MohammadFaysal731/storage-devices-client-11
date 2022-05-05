import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='items' element={<Items></Items>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        {/* <Route></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
