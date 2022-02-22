import "./Class.css"

function Class(props)
{
    let name_of_class  = props.name;
    return(
    <div className="class">
        Class Title: {name_of_class.toUpperCase()}
    </div>
    )
}

export default Class;