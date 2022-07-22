import React,{ createContext, useReducer } from 'react';
import TripBuilder from './TripBuilder';
import TripSummary from './TripSummary';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        justifyContent: "right"
    },
    button: {
        position: "relative",
        top: 10,
        left:"90%",
        border: "black solid 1px",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "5px 5px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "25px",
        margin: "4px 2px",

    }
});

export const TripContext = createContext();
function reducer(state, item){
    return[...state, item];
}


export default function TripMaker() {
    const classes = useStyles();
    const [trips, setTrip] = useReducer(reducer, []);
    let volver=true;
    return (
        <TripContext.Provider value={{trips, setTrip}}>
            <div className={classes.wrapper}>
                <button className={classes.button} onClick={((setTrip)=>{
                   if(volver){ trips.pop();
                    volver=false}else{alert("no se puede volver mas de una compra")};
                    setTrip();
                 })}
                >Cancelar</button>
            </div>

            <TripBuilder />
            <TripSummary />
        </TripContext.Provider>
    )
}