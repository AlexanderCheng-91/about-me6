import alexPic from '../assets/alexCardPictures/alexpicSmallResized180by180.png';
import React, {Component} from 'react'

export class AlexCard extends Component{
    render(){
        return (
            <div>
                <h2>Hi, I am a Test!</h2>
                <img src={alexPic} className='alexPicClass' alt="Alexander Cheng"/>     
            </div>
            
        )
    }
}
