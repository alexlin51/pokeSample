import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';

import './CardDialog.css';

export default function CardDialog(props) {
    let { cardInfo, open, onClose, img, name } = props;
    let data = cardInfo;

    const fixWord = (stng) => {
        return stng[0].toUpperCase() + stng.slice(1);
    }

    const formatType = (info) => {
        let output = "";
        info.forEach((obj) => {
            output += fixWord(obj.type.name);
            if (obj != info[info.length-1]){
                output += " | ";
            }
        })
        return output;
    }

    const formatAbil = (info) => {
        let output = "";
        info.forEach((obj) => {
            output += fixWord(obj.ability.name);
            if (obj != info[info.length-1]){
                output += " | ";
            }
        })
        return output;
    }

    const showStats = (info, pair) => {
        if (pair === "HP&ATT") {
            return `HP: ${info[0].base_stat} | Attack: ${info[1].base_stat}`;
        } else if (pair === "DEF&SPKA") {
            return `Defense: ${info[2].base_stat} | Sp. Atk: ${info[3].base_stat}`;
        } else if (pair === "SPKD&SPD") {
            return `Sp. Def: ${info[4].base_stat} | Speed: ${info[5].base_stat}`;
        }
    }

    useEffect(()=> {
        data = props.cardInfo;
    }, [cardInfo])

    return (
        <Dialog onClose={onClose} open={open}>
            <div className="dialogBox">
                <img src={img}/>
                <div className="cardText boldText">
                    {name}
                </div>
                <div className="cardText underlineText subText">
                    TYPE
                </div>
                <div className="cardText subText">
                    {formatType(data.types)}
                </div>
                <div className="cardText underlineText subText">
                    STATS
                </div>
                <div className="cardText subText">
                    {showStats(data.stats, "HP&ATT")}
                </div>
                <div className="cardText subText">
                    {showStats(data.stats, "DEF&SPKA")}
                </div>
                <div className="cardText subText">
                    {showStats(data.stats, "SPKD&SPD")}
                </div>
                <div className="cardText underlineText subText">
                    ABILITIES
                </div>
                <div className="cardText subText">
                    {formatAbil(data.abilities)}
                </div>
            </div>
        </Dialog>
    )
};