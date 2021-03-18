import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const Complete = () => {
    //const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    
    const onSearch = (searchText) => {
        getData(searchText);
    };
    
    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    
    //const onChange = (data) => {
    //    setValue(data);
    //};

    const getData = (data) => {
        fetch('https://casey-autocomplete-poc.azurewebsites.net/SimpleAutoComplete?highlights=false&fuzzzy=true&term=' + data)
        .then(res => {
            if(res.status >= 400) {
                throw new Error("Somehow this is Caseys fault.");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setOptions(data);
        });
    };

    return (
        <AutoComplete options={options} style={{ width: 300, }} onSelect={onSelect} onSearch={onSearch} placeholder="input here" />
    )
};

export default Complete