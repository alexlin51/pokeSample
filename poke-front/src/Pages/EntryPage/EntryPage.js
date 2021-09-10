import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './EntryPage.css';

import {
    Onboard
} from '../../Components';

import cover from '../../Statics/ash.jpg';

export default function EntryPage(props) {

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
            window.location.replace("https://pokedextestapp.herokuapp.com/pokedex");
        }
    },[])

    return (
        <div className="entryBox">
            <div className="split left">
                <img className="leftImage" src={cover}/>
            </div>
            <div className="split">
                <Onboard/>
            </div>
        </div>
    )
}
