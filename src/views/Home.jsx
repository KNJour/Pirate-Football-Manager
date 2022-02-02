import React, { useEffect, useState} from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = props => {
    
            const [allPirates, setAllPirates] = useState(null);
            const [reset, setReset] = useState(true);
            const refresh = () => {
                    setReset(!reset)
             }


    useEffect(() => {

        axios.get("http://localhost:8000/api/pirates")
        .then(res=> setAllPirates(res.data))
        .catch(err => console.log(err))

    }, [refresh])

    //Display
    return(

        <div className="container bg-dark">
            <h1>Yaaaarg, look at all these pirates</h1>
            {
                allPirates ?
                allPirates.map((pirate, i) => {
                    return <Card pirate={pirate} refresh={refresh}/>
                })
                : ""
            }
        </div>

     
    )
}

export default Home;