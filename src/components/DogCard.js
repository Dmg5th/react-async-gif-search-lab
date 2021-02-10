import React from 'react'; 

function DogCard(props){
    return (
        <div>
            <img src={props.dog} alt="something"/>
        </div>
    )
}

export default DogCard; 