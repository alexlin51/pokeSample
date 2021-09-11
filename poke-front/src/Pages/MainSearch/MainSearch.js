import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './MainSearch.css';

import {
    Searchbar,
    Card
} from '../../Components';

export default function MainSearch(props) {

    useEffect(async () => {
        let token = localStorage.getItem('pokeKey');
        let request;
        try{
            if (!token){
                token = "";
            }
            request = await Axios.post("https://pokedextestapp.herokuapp.com/auth/check",{
                token
            });
        } catch(err){
            console.log(err);
            return;
        }
        if (!request.data.logged) {
            window.location.replace("https://pokedextestapp.herokuapp.com/");
        }
    },[])

    const [search, setSearch] = useState("");
    const [poke, setPoke] = useState([]);
    const [nextUrl, setNextUrl] = useState('');

    const [flip, flop] = useState(false);

    const searchQuery = async (event) => {
        let request;
        if (props.tab === 'home') {
            if (search !== ""){
                setPoke([]);
                try{
                    request = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`);
                } catch(err){
                    console.log(err);
                    setPoke([])
                    setNextUrl("");
                    return;
                }
                setNextUrl("");
                setPoke([request.data]);
            } else {
                try{
                    request = await Axios.get(`https://pokeapi.co/api/v2/pokemon/`);
                } catch(err){
                    console.log(err);
                }
                setNextUrl(request.data.next);
                setPoke(request.data.results);
            }
        } else {
            let token = localStorage.getItem('pokeKey');
            try{
                request = await Axios.post(`https://pokedextestapp.herokuapp.com/fav/all`, {
                    token
                });
            } catch(err){
                console.log(err);
            }
            let findings = request.data.favs;
            let out = []
            for (let i = 0; i != findings.length; i++){
                let find;
                try{
                    find = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${findings[i].fav.toLowerCase()}/`);
                } catch(err){
                    console.log(err);
                }
                if (findings[i].fav === search.toLowerCase() || search === ""){
                    out.push(find.data);
                }
            }
            setNextUrl("");
            setPoke(out);
        }
    }

    const addMore = async (e) => {
        if (props.tab === 'home') {
            const target = e.target;

            if (nextUrl == ""){
                return;
            }
        
            if (target.scrollHeight-target.scrollTop <= target.clientHeight + 150) {
                let request;
                try{
                    request = await Axios.get(nextUrl);
                } catch(err){
                    console.log(err);
                }
                setNextUrl(request.data.next);
                setPoke([...poke,...request.data.results]);
            }
        }
    }

    useEffect(async ()=>{
        let request;
        if (props.tab === 'home') {
            try{
                request = await Axios.get(`https://pokeapi.co/api/v2/pokemon/`);
            } catch(err){
                console.log(err);
            }
            setNextUrl(request.data.next);
            setPoke(request.data.results);
        } else {
            let token = localStorage.getItem('pokeKey');
            try{
                request = await Axios.post(`https://pokedextestapp.herokuapp.com/fav/all`, {
                    token
                });
            } catch(err){
                console.log(err);
            }
            let findings = request.data.favs;
            let out = []
            for (let i = 0; i != findings.length; i++){
                let find;
                try{
                    find = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${findings[i].fav.toLowerCase()}/`);
                } catch(err){
                    console.log(err);
                }
                out.push(find.data);
            }
            setNextUrl("");
            setPoke(out);
        }
    },[props.tab, flip])

    return (
        <div className="mainBody">
           <div className="mainCenter">
                <Searchbar search={search} setSearch={setSearch} request={searchQuery}/>
                <div className="smartGrid" onScroll={addMore}>
                    { 
                        (poke.length > 0) ? (
                            poke.map((data) => {
                                return <Card data={data} key={data.url} flop={flop} flip={flip} tab={props.tab}/>
                            })
                        ) : (
                            <div>No results found</div>
                        )
                    }
                </div>
           </div>
        </div>
    )
}
