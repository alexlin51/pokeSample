import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Searchbar.css';

export default function Searchbar(props) {

    const updateSearch = (e) => props.setSearch(e.target.value)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.request();
        }
    }

    return (
        <div className="searchBox">
            <div className="searchIcon">
                <SearchIcon />
            </div>
            <TextField onKeyDown={handleKeyDown} onChange={updateSearch} className="searchField" label="Search Pokemon" value={props.search}/>
            <Button onClick={props.request} variant="contained" color="primary">
                Search
            </Button>
        </div>
    );
}