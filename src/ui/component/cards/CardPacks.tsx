import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Input, Pagination, TextField} from "@mui/material";
import s from "./CardsPack.module.scss"
import {AppRootStateType} from "../../../bll/store/store";
import {CardsPacksType, getCardsPack} from "../../../bll/reducers/card-packs-reducer";
import {NavLink} from 'react-router-dom';


const CardPacks = () => {

    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<CardsPacksType>>(state => state.cardPacks.cardsPacks)



    useEffect(() => {
        dispatch(getCardsPack())
    }, [])


    return (
        <div className={s.wrapper}>
            <div className={s.show}>
                <h3>Show packs cards</h3>
                <div className={s.buttons}>
                    <Button sx={{marginRight: '10px'}} variant="contained" size="small">
                        My
                    </Button>
                    <Button variant="outlined" size="small">
                        All
                    </Button>
                </div>
                {/* <SuperDoubleRange  onChangeRange={changeValue} value = {[min,max]}/>*/}
            </div>
            <div className={s.list}>
                <h1>Packs list</h1>
                <div className={s.input}>
                    <Input sx={{width: '100%'}} placeholder="Search..."/>
                    <Button sx={{marginLeft: '30px', fontSize: '15px'}} variant="contained">Add new pack</Button>
                    <Button>Delete Pack</Button>
                    <Button>Update Pack</Button>
                </div>
                <div className={s.table}>
                    <div className={s.table_title}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>Name</div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <button>/\</button>
                                <button>\/</button>
                            </div>
                        </div>
                        <div>Cards</div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>Last Updated</div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <button>/\</button>
                                <button>\/</button>
                            </div>

                        </div>

                        <div>Created by</div>
                        <div>Actions</div>
                    </div>
                    <div style = {{margin:"10px"}}>
                        {packs.map(p => {
                            return (
                                <div key={p._id} className={s.table_description}>
                                    <div className={s.name}>{p.name}</div>
                                    <div className={s.cards}>{p.cardsCount}</div>
                                    <div className={s.lastUpdated}>{p.updated}</div>
                                    <div className={s.createdby}>{p.name}</div>
                                    <div className={s.card_button}>
                                        <Button size="small" variant="outlined" color="error">
                                            Delete
                                        </Button>
                                        <Button size="small" variant="outlined">Small</Button>
                                        <Button size="small" variant="outlined">
                                            <NavLink to={`/cards/${p._id}`}>card</NavLink>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Pagination sx={{alignSelf: 'flex-end', marginTop: '20px'}} count={10} color="primary"/>
                <TextField
                    sx={{width: '100px'}}
                    id="outlined-select-currency"
                    select
                    label="Select"
                    helperText="Show cards"
                >
                    {/*   {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}*/}
                </TextField>
            </div>


        </div>
    );
};

export default CardPacks;