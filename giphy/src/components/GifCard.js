import React from 'react';

function GifCard(props){
    return(
        <img src={props.gif} height="200" width="200"  padding="10px 10px 10px 10px"/>
    )
}

export default GifCard;