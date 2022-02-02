import React from 'react';
import {Link} from '@reach/router'
import axios from 'axios';


const Card = props => {
    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${id}`)
        .then(() => props.refresh())
        .catch(err => console.log("error when deleting a pirate", err))
    }
    return(
        <div className="card m-3 bg-light" style={{width: "20rem", display:"inline-block"}}>

            <div className="card-body">
            <div>
                <img src={props.pirate.image} style={{width: "80px"}} alt=""></img>
                <h3>Pirate {props.pirate.position}: {props.pirate.name}</h3>
                <div>
                <h3>Treasure Chests: {props.pirate.treasure}</h3>
                </div>
            </div>
                    <div className="card-footer">
                        <Link to={`/pirates/update/${props.pirate._id}`}><button className="btn btn-primary m-1">Edit Pirate</button></Link>
                        <Link to={`/pirates/${props.pirate._id}`}><button className="btn btn-dark m-1">View Pirate</button></Link>
                        <button className="btn btn-danger m-3" onClick={() => handleDelete(props.pirate._id)}>Walk the Plank!!</button>
                </div>
            </div>
        
                        
        </div>
    )
}

export default Card;