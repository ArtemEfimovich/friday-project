import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store/store";
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