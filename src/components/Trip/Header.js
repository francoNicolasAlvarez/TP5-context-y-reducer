import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import userContext from './user';


const useStyles = createUseStyles({
    wrapper: {
        borderBottom: "black solid 1px",
        padding: [5, 10],       
    },
    imagen:{
        textAlign: "left",
        justifyContent: "center",
        width:120,
        height:120,
        "& img":{
        width:150,
        height:150}
    },
    user:{
        textAlign: "right",
        fontSize: 20
            ,
        }    
});

export default function Header() {
    const classes = useStyles();
    const user=useContext(userContext);
    return(
        <div className={classes.wrapper}>
            <div className={classes.imagen}>
                <img src={__dirname+"images/logo.png"} alt="Marcelo Arcidiácono"></img>
                                
            </div>
            <div className={classes.user}>
              {"Hola "+user.name + ", mail :"+ user.mail}
            </div>            
        </div>
    )
}