import React from 'react';


const listTags = (props) => {
    return(
        <ul className="listTags">
            {props.tags.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <button type="button" onClick={() => { props.removeTag(item.id); }}>X</button>
                </li>
            ))}
        </ul>
    )
}
 
export default listTags;