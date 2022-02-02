import 'bootstrap/dist/css/bootstrap.min.css'
import { navigate } from '@reach/router';
import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form'

const Add = props => {
    //states
    const [pirateForm, setPirateForm] = useState({
        name: "",
        image: "",
        treasure: 0,
        catchPhrase: "",
        position: "",
        pegleg: true,
        eyepatch: true,
        hook: true
    });
    const [errors, setErrors] = useState({})
    //functions
     const handleChange = e => {

        setPirateForm({...pirateForm, [e.target.name]: e.target.value})
    }

    const updateChecked = e => {
        console.log(e);
        setPirateForm({...pirateForm, [e.target.name]: e.target.checked});
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates/create", pirateForm)
        .then(res=> {
                    if(res.data.error) {
                        console.log("there were errors", res.data.error);
                        setErrors(res.data.error.errors);
                    } 
                    else {
                        navigate("/");
                    }})

        .catch(err => console.log("Didn't work!", err))
    }

    return(
        <div>

            <h1 className="bg-warning">Add A Pirate</h1>
            <Form handleSubmit={handleSubmit} pirateForm={pirateForm} errors={errors} handleChange={handleChange} updateChecked={updateChecked}/>
        </div>
    )
}
export default Add;