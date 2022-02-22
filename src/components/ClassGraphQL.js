import "./ClassGraphQL.css"
import React, {useState, useEffect} from 'react';

function ClassGraphQL(props)
{
    const [classInfo, setClassInfo] = useState({});

    const url = "https://api.peterportal.org/graphql/"

    useEffect(() => {
        const fetchData = async () => {
            const query = `query{
                    course (id:"${props.name}"){
                        title
                        department
                        description
                    }
                }`;

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name])

    

    let info;

    if(classInfo) {
        info = <div className="information">
        <p id="title"> {classInfo.title} </p>
        <b id="department"> {classInfo.department} </b>
        <p id="description"> {classInfo.description} </p>
        </div>
    }
    else if (classInfo == null)
    {
        info = <p> Class not found :( </p>
    }
    else
    {
        info = <p> Searching... </p>
    }

    return(
    <div className="class_ql">
        {props.name}
        <div>
            {info}
        </div>
    </div>

    )
}

export default ClassGraphQL;