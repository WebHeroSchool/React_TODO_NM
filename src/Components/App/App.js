import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {

    const items = [
        {
            value: 'Create the new app '
        },
        {
            value: 'Insert props'
        },
        {
            value: 'Do everything'
        }
    ];

    return (
        <div>
            <h1>Important TO-DO List</h1>
            <InputItem />
            <ItemList items={items}/>
            <Footer  count={3}/>
        </div>);
};


export default App;

