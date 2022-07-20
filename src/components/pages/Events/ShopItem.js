import  classes from './ShopItem.module.css'

function ShopItem(props) {
    return (
    
        <li className={classes.item}>
            <div className={classes.image}><img src={props.image} alt={props.name}/> </div> 
            <p className={classes.content}>{props.name}</p>
            <p className= {classes.content}>Rating: {props.rating}</p>
            <url className={classes.content}>Website: {props.website} </url>
        </li>
    )
}

export default ShopItem