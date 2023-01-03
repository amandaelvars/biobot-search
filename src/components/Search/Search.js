import React from 'react';
import Results from '../Results/Results';
import {getKitInfo, getKitInfoWithID} from '../../api/Api';
import {useEffect, useState, useRef} from 'react';

import './Search.css';

const Search = () => {
    const inputRef = useRef(null);
    const [kitData, setKitData] = useState([]);
    const [idInput, setIdInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchedKits, setSearchedKits] = useState([]);
    
    useEffect(() => {
        getKitInfo().then((data) => {
          setKitData(data);
        })
      }, [])

      const onChangeHandler = (idInput) =>{
        let matches = [];
        if(idInput.length > 0){
            matches = kitData.filter((data)=>{
                const regex = new RegExp(`${idInput}`, "gi");
                return data.label_id.match(regex)
            })
        }
        setSuggestions(matches);
        setIdInput(idInput)
      }

      const onSuggestHandler = (idInput) => {
        setIdInput(idInput);
        setSuggestions([]);
      }

      const onSubmitHandler = () => {
        getKitInfoWithID(inputRef.current.value).then((res) => {
            console.log(res);
            if(res && res.length > 0) {
                setSearchedKits(res);            }
        })
      }

    return (
        <div className='search-container'>
            <div className='search-box'>
                <input type="text" ref={inputRef} placeholder="Type in Kit ID" className='input search-input' value={idInput} onChange={e=> onChangeHandler(e.target.value)} />
                <button className="submit-button" onClick={() => onSubmitHandler()}>Submit</button>
            </div>
            {suggestions && suggestions.map((suggestion, i) => 
                <div key={i} className="autocomplete col-md-12 justify-conent-md-center" onClick={() => onSuggestHandler(suggestion.label_id)}>{suggestion.label_id}</div>
            )}
            {searchedKits.length > 0 ?
                (<div className="result-container">
                    <Results searchResults={searchedKits}/>
                </div>
            ) : null}
        </div>
    );
    }

export default Search;
