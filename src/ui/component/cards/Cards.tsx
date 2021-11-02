import React, {useEffect} from 'react';
import {Button, Input, MenuItem, Pagination, TextField} from "@mui/material";
import s from './CardsPack.module.scss'
import style from './CardsPack.module.scss'
import {AppRootStateType} from "../../../bll/store/store";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/reducers/cards-reducer";
import {useParams} from "react-router-dom";
import {CardsType} from "../../../dal/cards_api";

const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType,Array<CardsType>>(state=>state.cards.cards)
    const {id}  = useParams<{id:string}>();

    const currencies = [
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
        {
            value: '5',
            label: '5',
        },
    ];



    useEffect(()=>{
        dispatch(getCardsTC(id))
    },[id])

    return(
        <div className={s.card}>
            <div className={s.input}>
                <Input  placeholder="Search question..." />
                <Button   variant="contained" size="small">Search question</Button>
                <Input  sx={{marginLeft:'20px'}} placeholder="Search answer..." />
                <Button  variant="contained" size="small">Search answer</Button>
            </div>

            <div className={s.table}>
                <div className={s.table_title}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>Question</div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <button>/\</button>
                            <button  >\/</button>
                        </div>
                    </div>
                    <div>Answer</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>Last Updated</div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <button >/\</button>
                            <button >\/</button>
                        </div>

                    </div>

                    <div>Grade</div>
                    <div>Actions</div>
                </div>
                {cards.map(c=>{
                    return(<div key={c._id} className={s.table_description}>
                            <div className={s.name}>{c.question}</div>
                            <div className={s.cards}>{c.answer}</div>
                            <div className={s.lastUpdated}>{c.updated}</div>
                            <div className={s.createdby}>{c.grade}</div>
                            <div className={style.card_button}>
                                <Button  size="small" variant="outlined" color="error">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={style.footer}>
                <div className={style.search}>
                    <Input placeholder="question..." />
                    <Input sx={{marginLeft:'20px'}} placeholder="answer..." />
                    <Button  variant="contained" size="small">Add card</Button>
                </div>
                <div className={style.pagination}>
                    <Pagination sx={{alignSelf: 'flex-end', marginTop: '20px'}} count={10} color="primary" />
                    <TextField
                        sx={{width: '100px'}}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        helperText="Show cards"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>

        </div>
    )
};

export default Cards;






