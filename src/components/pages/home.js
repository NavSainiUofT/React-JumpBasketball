import React,{Component} from "react";
import { ModalTitle } from "react-bootstrap";
import{Hero} from "../hero-banner/hero-banner";

export class Home extends Component {
    render(){
        const heroTitle = "Fall Registration OPEN!"
        const heroDescription = "Register TODAY and SAVE $25 for our Fall programs starting in October!"
        return(
            <>
                <div className="container-fluid">
                    <h1>HOME</h1>
                    <Hero title={heroTitle} description={heroDescription}></Hero>
                    </div>
            </>
        )
    }
}