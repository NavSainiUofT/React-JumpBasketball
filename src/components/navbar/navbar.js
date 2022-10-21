import './navbar.css'
import React,{Component} from "react";

export class Navbar extends Component {
    render(){
        return(
            <>
                <div className='navigation'>
                    <img className='navigation-item logo' src='../../imgs/cropped-logo.png'></img>
                    <h1 className='navigation-item'>JUMP</h1>
                    <button className='btn btn-primary navigation-item'>Home</button>
                    <button className='btn btn-warning navigation-item'>About</button>
                    <button className='btn btn-danger navigation-item'>Contact Us</button>
                </div>
            </>
        )
    }
}