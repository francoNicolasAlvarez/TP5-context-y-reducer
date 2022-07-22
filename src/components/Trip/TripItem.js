import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    wrapper: {
       border: "lightgrey solid 1px",
       margin: 20,
       padding: 10,
       position: "relative",
       textAlign: "center",
       textTransform: "capitalize",
       width: 200,
    },
    oferta: {
        fontSize: 20,
        position: "absolute",
        top: 10,
        left: 10,
    },
    destino: {
        border: "none",
        background: "none",
        
       
    },
    image: {
        width: 150,
        height: 150
    },
});


export default function TripItem({image,name,price}){
    const classes = useStyles();
    
       
    
    return(
        <div className={classes.wrapper}>
            <h3>{name}</h3>
            
            <button className={classes.destino}>
                <img className={classes.image} src={image} alt={name} aria-label={name}/>
            </button>
            
        </div>
    )

}


TripItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    
}