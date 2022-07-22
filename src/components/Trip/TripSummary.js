import React,{useContext} from 'react';
import { createUseStyles } from 'react-jss';
import { TripContext } from './TripMaker';

const useStyles = createUseStyles({
    wrapper: {
        borderTop: "black solid 1px",
        padding: "0 20px 0 20px",
        display: "flex",
    },
    list: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontSize: 20,
        maxHeight: 40,
        "& li": {
            width: 130,
            padding: 3,
        }
    }
});
export default function TripSummary(){
    const classes= useStyles();
   
    const { trips } = useContext(TripContext);
    return(
        <div className={classes.wrapper}>
        <h2>Pedido</h2>
        <ul className={classes.list}>
           { trips.map((name) => (
            <li key={name}>{name}</li>
           ))}
        </ul>
                

        </div>
    )
}