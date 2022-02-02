import React from 'react'
import {Link} from '@reach/router'


const Nav = props => {

    return(
        <div className="navbar navbar-expand-sm justify-content-around bg-warning">
            <div className="navbar-nav" >
                <h3 className="m-1 nav-link text-success text-decoration-none" ><Link to="/">View All Pirates</Link></h3>
                <h3 className="m-1 nav-link text-primary text-decoration-none"><Link to="/create">Add Pirate</Link></h3>
   
            </div>
        </div>
    )
}
export default Nav;