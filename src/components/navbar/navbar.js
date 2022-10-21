import './navbar.css'
import React,{Component} from "react";

export class Navbar extends Component {
    render(){
        return(
            <>
                <div className='navigation'>
                    <img alt='logo' className='navigation-item logo' src={require('../../imgs/cropped-logo.png')}></img>
                    <a href='/' className='navigation-item'>Home</a>
                    <a href='/about' className='navigation-item'>About</a>
                    <a href='/contact' className='navigation-item'>Contact</a>
    
                </div>
            </>
        )
    }
}