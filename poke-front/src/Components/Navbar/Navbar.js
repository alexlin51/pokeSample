import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import './Navbar.css';

export default function Navbar(props) {

    const [logged, setLogged] = useState(false);
    const [curr, setCurr] = useState(props.tab);

    const logout = () => {
        setLogged(false);
        localStorage.removeItem("pokeKey");
        window.location.replace("https://pokedextestapp.herokuapp.com/");
    }

    const homePress = () => {
        props.setTab('home');
        setCurr('home');
    }

    const favPress = () => {
        props.setTab('fav');
        setCurr('fav');
    }

    useEffect(async () =>{
        let token = localStorage.getItem('pokeKey');
        let request;
        try{
            request = await Axios.post("https://pokedextestapp.herokuapp.com/auth/check",{
                token
            });
        } catch(err){
            console.log(err);
            return;
        }
        if (request.data.logged) {
            setLogged(true);
        }
    },[])

    return (
        <div className="navbox">
            <AppBar position="static">
                <div className="navSpace">
                    <div className="navTitle">
                        My Pokedex
                    </div>
                    {
                        logged ? (
                            <div className="logButton">
                                <span className={`subTabs ${curr === 'home' ? 'activeTab': ''}`} onClick={homePress}>
                                    Home
                                </span>
                                <span className={`subTabs ${curr === 'fav' ? 'activeTab': ''}`} onClick={favPress}>
                                    Favorites    
                                </span>
                                <Button variant="contained" onClick={logout}>
                                    Logout
                                </Button>
                            </div>
                        ) : null
                    }
                </div>
            </AppBar>
        </div>
    );
}