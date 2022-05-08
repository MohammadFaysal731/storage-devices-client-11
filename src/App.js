import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Page/ShearPage/Header/Header';
import Home from './Page/Home/Home/Home';
import NotFound from './Page/ShearPage/NotFound/NotFound';
import Footer from './Page/ShearPage/Footer/Footer';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import Blogs from './Page/Blogs/Blogs';
import RequireAuth from './Page/ShearPage/RequireAuth/RequireAuth';
import InventoryItems from './Page/InventoryItems/InventoryItems';
import ManageInventories from './Page/ManageInventories/ManageInventories';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryItems></InventoryItems>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
