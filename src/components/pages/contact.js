import React,{Component} from "react";
import{Hero} from "../hero-banner/hero-banner";

export class Contact extends Component {
    render(){
        const heroTitle = "Contact Page"
        const heroDescription = "This is my hero description on my contact page"
        return(
            <>
                <div>
                <h1>CONTACT</h1>
                <Hero title={heroTitle} description={heroDescription}></Hero>
                </div>
            </>
        )
    }
}