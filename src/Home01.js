 import { useState } from "react";

const Home = () => {
    const [name, setName] = useState ('mario');
    const [age, setAge] = useState('40');

    const handleclick = (name) =>{
        setName('luigi');
        setAge(100);
        console.log('happy new year ' + name);
    }
    // const handleTarget = (name, e) =>{
    //     console.log('happy new year ' + name, e.target);
    // }

    return ( 
        <div className="home">
            <h2>home page</h2>
            <p>{name} is {age} year old now</p>
            <button onClick={() => handleclick('james')}>Rename</button>

            {/* <button onClick={(e) => handleTarget('james',e)}>Delete target</button> */}
           
        </div>
     );
}
 
export default Home;