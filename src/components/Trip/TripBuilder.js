import React,{useContext} from 'react';
import TripItem from './TripItem';
import { createUseStyles } from 'react-jss';
//import userContext from './user';
import { TripContext } from './TripMaker';


const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexWrap: "wrap",        
        justifyContent: "center",
        textAling: "center"
    },
    prices: {
        fontSize: 20,
        display: "flex",
        flexWrap: "wrap",        
        justifyContent: "center",
        textAling: "center"
    },
    button: {
        padding: "5px 5px 5px 5px",
        fontSize: 20,
        position: "relative",
        bottom:"5%",
        left:"35%",
        backgroundColor: "white",
        borderRadius: "12px",
        cursor: "pointer",
    }
});

const destinos = [
    {
        image:"img002.jpg",
        name:"Barcelona",
        tipo:"oferta",
        price: 500000
    },
    {
        image:"img001.jpg",
        name:"cancun",
        tipo:"reserva",
        price: 700000
    },    
    {
        image:"img003.jpg",
        name:"cusco",
        tipo:"compra",
        price: 200000
    },
] 

export default function TripBuilder(){
    const classes = useStyles();
    const txt="el precio final es $";
    
    const { setTrip } = useContext(TripContext)
    
    //agrego +0.95 para evitar que tenga un descuento mayor al 50%
    const descuento=((Math.random()+0.95)/2);
    let retorno = false;
       
   
    return(
        <div className={classes.wrapper}>
            {destinos.map((destinos) => (
                <div>
                <TripItem
                    key={destinos.name}
                    image={__dirname + "images/" + destinos.image}
                    name={destinos.name}/>
                    <p className={classes.prices} aria-label="nombrada">
                    {destinos.tipo==="oferta" ?  txt+ Math.round(destinos.price*descuento): txt+destinos.price}
                    </p>
                    <button className={classes.button} onClick={ ()=>{
                        switch (destinos.tipo){
                            case "reserva": retorno=false;
                            alert("se ha hecho una reserva para " + destinos.name);break;
                            case "oferta":retorno=true;
                                setTrip(destinos.name);break;
                            case "compra":retorno=true;
                                setTrip(destinos.name);break;
                            case "eliminar":break;
                            default:if(!retorno){
                                setTrip.pop();retorno=false}
                                else{alert("no se puede cancelar reservas")};;                                                           
                        }                                                
                        }}>
                        {destinos.tipo}</button>
                    
                </div>
            ))}            
        </div>        
    )
}
