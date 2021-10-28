import React from 'react';
import {useDispatch} from "react-redux";
import {getCardsPack} from "../../../bll/reducers/card-packs-reducer";


const CardPacks = () => {

    const dispatch = useDispatch()
    const cardsAddHandler = ()=>{
        dispatch(getCardsPack())
    }



    return (
        <div>
            <button onClick={cardsAddHandler}>add</button>
        </div>
    );
};

export default CardPacks;