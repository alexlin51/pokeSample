import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StarIcon from '@material-ui/icons/Star';

import {
    CardDialog
} from '../../Components'; 

import './Card.css';

export default function Card(props) {
    let {data} = props;

    const [img, setImg] = useState();
    const [info, setInfo] = useState();
    const [name, setName] = useState();
    const [fav, setFav] = useState(false);
    const addFav = async () => {
        let token = localStorage.getItem('pokeKey');
        let request;
        if (fav) {
            try{
                request = await Axios.post("https://pokedextestapp.herokuapp.com/fav/delete",{
                    token,
                    name: info.name
                });
                setFav(false);
            } catch(err){
                console.log(err);
                return;
            }
        } else{
            try{
                request = await Axios.post("https://pokedextestapp.herokuapp.com/fav/add",{
                    token,
                    name: info.name
                });
                setFav(true);
            } catch(err){
                console.log(err);
                return
            }
        }
        if (props.tab === 'fav'){
            props.flop(!props.flip);
        }
    } 

    // Dialog Info
    const [open, setOpen] = useState(false);
    const openCard = () => setOpen(true);
    const closeCard = () => setOpen(false);

    // Hovering
    const [hover, setHover] = useState(false);
    const yesHover = () => setHover(true);
    const noHover = () => setHover(false);
 
    useEffect(async ()=>{
        let request;
        let tempName;
        if (data.url) {
            try{
                request = await Axios.get(data.url);
            } catch(err){
                console.log(err);
            }
            setInfo(request.data);
            tempName = request.data.name;
            setName(request.data.name[0].toUpperCase() + request.data.name.slice(1));
            try{
                request = await Axios.get(request.data.forms[0].url);
            } catch(err){
                console.log(err);
            }
            setImg(request.data.sprites.front_default);
        } else {
            setInfo(data)
            setName(data.name[0].toUpperCase() + data.name.slice(1));
            setImg(data.sprites.front_default);
            tempName = data.name;
        }

        let token = localStorage.getItem('pokeKey');
        try{
            request = await Axios.post("https://pokedextestapp.herokuapp.com/fav/isFav",{
                token,
                name: tempName
            });
            setFav(request.data.fav)
        } catch(err){
            console.log(err);
            return;
        }
    },[data])

    return (
        <div className={`pokeCard ${hover ? "cardActive" : ""}`}>
            <StarIcon className={`favStar ${fav ? "active" : ""}`} onClick={addFav}/>
            {
                (img) ? (
                    <div>
                        <img src={img} onClick={openCard} onMouseEnter={yesHover} onMouseLeave={noHover}/>
                        <div className="cardText" onClick={openCard} onMouseEnter={yesHover} onMouseLeave={noHover}>
                            {name}
                        </div>
                        <CardDialog
                            cardInfo={info}
                            img={img}
                            name={name}
                            open={open} 
                            onClose={closeCard}
                        />
                    </div>
                ) : null
            }
        </div>
    )
};