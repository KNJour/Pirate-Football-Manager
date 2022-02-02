
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Show = props => {
    
    const display = (e) => e ? "Yes" : "No"
    const colorRed = {
        backgroundColor: "red"
    }
    const colorGreen = {
        backgroundColor: "green"
    }

    const checked = e => {
        console.log(!e.target.value)
        let reverse = !e.target.value;
        console.log(reverse);
        setOnePirate({...onePirate, [e.target.name]: reverse});
        console.log(onePirate) }

    const [refresh, setRefresh] = useState(true);
    const update = () => {
        setRefresh(!refresh)
    }

    const [onePirate, setOnePirate] = useState(null);

    const [errors, setErrors] = useState({})
        useEffect(() => {
            axios.get(`http://localhost:8000/api/pirates/${props._id}`)
            .then(res => setOnePirate(res.data))
            .catch(err => console.log("something went wrong showing one pirate", err))
        }, [refresh])


        const handleSubmit = (e) => {
            e.preventDefault();
            let opposite = !e.target.value;
            console.log(e.target.name)
            console.log(opposite)
            axios.put(`http://localhost:8000/api/pirates/update/${props._id}`, {[e.target.name]: opposite})
            .then(res=> {
                        if(res.data.error) {
                            console.log("something went wrong", res.data.error);
                            setErrors(res.data.error.errors);
                        } else {
                            console.log("its Done!!");
                        }})
            .catch(err => console.log("Didn't work!", err))
        }
    return(
        <div>
    
        {
            onePirate ? <div>
                                
                                <div className= "container">
                                    <div className= "row">
                                    <h1 className="mb-4">{onePirate.name}</h1>
                                        <div className="col-3">
                                        <img src={onePirate.image} style={{width: "400px"}}/>
                                            <h2> {onePirate.catchPhrase}</h2>
                                        </div>
                                        <div className="col-5">
                                            <h3>Position: {onePirate.position}</h3>
                                            <h3>Treasures: {onePirate.treasure}</h3>
                                            <br></br>

                                            <h3>Peg Leg: {display(onePirate.pegleg)}</h3> <button className="btn" value={onePirate.pegleg} checked={onePirate.pegleg} onClick={checked}> {display(onePirate.pegleg)} </button>

                                            <h3>Eye Patch: {display(onePirate.eyepatch)}</h3><button className="btn" onClick={handleSubmit}>{display(onePirate.eyepatch)}</button>

                                            <h3>Hook: {display(onePirate.hook)}</h3><button className="btn" onClick={handleSubmit}>{display(onePirate.hook)}</button>
                                        </div>
                                     </div>
                                </div>
                         </div>
                         : ""
        }
        </div>
    )
}

export default Show;