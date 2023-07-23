import React, {Component} from 'react';
import heroGif from '../assets/gifs/Michal Scott Hero Gif Placeholder.gif';

export class HeroGif extends Component{
    render(){
        return(
            <div>
                <p>
                here is my gif
                </p>
                <img src={heroGif} className="HeroGif" alt="This is Michael Scott" />
            </div>
            
        )
    }
}