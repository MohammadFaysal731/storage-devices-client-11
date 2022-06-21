import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebaseConfig.init';
import userImage from '../../../images/404page/user.jpg'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>STORAGE DEVICES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            {
                                user
                                    ? <>
                                        <Nav.Link as={Link} to="/manageInventories">Manage Inventories</Nav.Link>
                                        <Nav.Link as={Link} to="/addInventoryItem">Add Inventory</Nav.Link>
                                        <Nav.Link as={Link} to="/myItem">My Inventory</Nav.Link>
                                        <button onClick={handleSignOut} className='btn bnt-link text-decoration-none text-white'>Sing out</button>
                                        <img src={user.photoURL ? user.photoURL : userImage} alt={user.displayName} className='border rounded-pill' style={{ width: '40px' }} />
                                    </>

                                    : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
};

export default Header;