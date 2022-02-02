import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {

    const {handleChange, errors, pirateForm, handleSubmit, updateChecked} = props;

return(

<div className="container">
    <div className="row">
        <form onSubmit={handleSubmit}>
            {/* left */}
        <div className="col-6">
            {/* NAME */}
            <div className="form-group m-2 form-inline">
                <label className="mr-2" htmlFor="name">Pirate Name: </label>
                <input type="text" name="name" className="form-control" value={pirateForm.name} onChange={handleChange}/>
                {
                    errors.name ? <span className="text-danger font-weight-bold">{errors.name.message}</span> : "" 
                }
            </div>
            {/* IMAGE */}
            <div className="form-group m-2 form-inline">
                <label className="mr-2" htmlFor="image">Image URL: </label>
                <input type="text" name="image" className="form-control" value={pirateForm.image} onChange={handleChange}/>
                {
                    errors.image ? <span className="text-danger font-weight-bold">{errors.image.message}</span> : "" 
                }
            </div>
            {/* TREASURE */}
            <div className="form-group m-2 form-inline">
                <label className="mr-2" htmlFor="treasure">Amount of treasure: </label>
                <input type="number" name="treasure" className="form-control" value={pirateForm.treasure} onChange={handleChange}/>
                {
                    errors.treasure ? <span className="text-danger font-weight-bold">{errors.treasure.message}</span> : "" 
                }
            </div>
            {/* CATCHPHRASE */}
            <div className="form-group m-2">
                <label className="mr-2" htmlFor="catchPhrase">Catchphrase: </label>
                <textarea name="catchPhrase" className="form-control" value={pirateForm.catchPhrase} onChange={handleChange}></textarea>
                {
                    errors.name ? <span className="text-danger font-weight-bold">{errors.name.message}</span> : "" 
                }
            </div>
        </div>
        <div className="col-6">
            {/* right */}
            {/* POSITION */}
        <div className="form-group m-2 ">
                <label className="mr-2" htmlFor="position">Position:</label>
                <select type="text" name="position" className="form-control" onChange={handleChange} value={pirateForm.position}>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Captain">Captain</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                    <option value="First Mate">First Mate</option>
                 </select>
                {
                    errors.position ? <span className="text-danger font-weight-bold">{errors.position.message}</span> : "" 
                }
            </div>
            {/* accessories */}
                <h1>Accessories</h1>
                <div className="form-group m-2 form-inline">
                    <label className="m-2" htmlFor="pegleg">Peg Leg: </label>
                    <input type="checkbox" name="pegleg" checked={pirateForm.pegleg} value={pirateForm.pegleg} onChange={updateChecked}/>
                    { errors.pegleg ? <span className="text-danger font-weight-bold">{errors.pegleg.message}</span> : "" }
                </div>
                <div className="form-group m-2 form-inline">
                    <label className="m-2" htmlFor="eypatch">Eye Patch: </label>
                    <input type="checkbox" name="eyepatch" checked={pirateForm.eyepatch} value={pirateForm.eyepatch} onChange={updateChecked}/>
                    { errors.eyepatch ? <span className="text-danger font-weight-bold">{errors.eyepatch.message}</span> : "" }
                </div>
                <div className="form-group m-2 form-inline">
                    <label className="m-2" htmlFor="hook">Peg Leg: </label>
                    <input type="checkbox" name="hook" checked={pirateForm.hook} value={pirateForm.hook} onChange={updateChecked}/>
                    { errors.hook ? <span className="text-danger font-weight-bold">{errors.hook.message}</span> : "" }
                </div>
        </div>
        <input type="submit" className="btn btn-warning mt-2"></input>
        </form>
    </div>
</div>
)



}

export default Form;