import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './Headers.css'
import logo from '../assets/logo.png'
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    
    return (
        <header className=''>
            <Container className='h-100'>
            <div className="row h-100">
                <div className="col-6 h-100">
                    <div className="h-100 d-flex align-items-center justify-content-start">
                    <NavLink to={'/'}>
                        <img style={{
                            width : '5rem'
                        }} src={logo} alt="" />
                    </NavLink>
                    </div>
                </div>
                <div className="col-6 h-100">
                    <div className="h-100 d-flex align-items-center justify-content-end">
                        <NavLink to={'/createblog'}>
                            <Button className='theBTN' variant='dark'>
                                Create Blog {" "}
                                <AddIcon style={{
                                    fontSize : '2rem'
                                }} />
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
            </Container>
        </header>
    )
}

export default Headers