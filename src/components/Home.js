import React, {useState} from 'react';
import Class from './Class'
import ClassGraphQL from './ClassGraphQL';
import "./Home.css"

function Home(props)
{
    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => 
    {
        setValue(event.target.value);
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        if (!favoriteClasses.includes(value))
        {
            setClasses(favoriteClasses.concat(value));
            setValue('');
            //alert("Class added!");
        }
        console.log(favoriteClasses);
    }
    return (
        <div>
            <h1>Emil's Favorite Classes</h1>
            <form onSubmit={handleSubmit}>
                <label>Add favorites</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add your fav!</button>
            </form>
            <div className="favs-list">
                {favoriteClasses.map((favClass) => 
                <Class name={favClass} key={favClass}></Class>)}
            </div>
            <div className="favs-list">
                {favoriteClasses.map((favClass) => 
                <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>)}
            </div>
        </div>
    );
}

export default Home;