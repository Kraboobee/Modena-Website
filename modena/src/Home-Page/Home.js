import React, { Component } from "react";
import background from "./img/Header.jpg"

class Home extends Component {
    render(){
        return (
            <div className="bg-cover h-screen flex items-center mb-5" style={{ backgroundImage: `url(${background})`}}>
                <div className="container mx-auto px-4 place-content-center">
                    <h1 className="text-center font-sans text-5xl text-white">TIRED OF SLOW COMPUTERS?</h1>
                    <h2 className="text-center font-sans text-5xl text-white">We're here to help</h2>
                    <p className="text-center font-sans text-5xl text-white">
                        We build high-end workstations tailored just for you
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;