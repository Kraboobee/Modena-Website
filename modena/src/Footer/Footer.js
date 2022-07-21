import React, { Component } from "react";
import images from '../assets/img'

class Footer extends Component {
    render(){
        return (
            <div className="bg-slate-300">
                <div className="container mx-auto px-4 py-5">
                    <div className="flex flex-row gap-5">
                        <div className="basis-1/4">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-lg font-semibold">
                                    Modena Computers
                                </h1>
                                <p>
                                We build computers to suit your exact requirements – saving you time and money, by providing the right tool for the job from the start.
                                </p>
                                <p>
                                We are dedicated to providing you with the best experience possible and are confident that once you experience a Modena Computer, you won’t want to use anything else.
                                </p>
                                <div className="flex flex-row gap-5">
                                    <div>
                                        <a href="http://">
                                            <img src={images.Facebook} alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="http://">
                                            <img src={images.Instagram} alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="http://">
                                            <img src={images.Youtube} alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="http://">
                                            <img src={images.LinkedIn} alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="http://">
                                            <img src={images.Twitter} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="flex flex-col gap-3">
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Contact
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Office Hours
                                    </h1>
                                    <p>
                                        Mon-Fri: 08:00 – 16:30 (SAST)
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                    Tel
                                    </h1>
                                    <p>
                                        +27 (0)21 201 1590
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Email
                                    </h1>
                                    <p>
                                        info@modenacomputers.com
                                        sales@modenacomputers.com
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Address
                                    </h1>
                                    <p>
                                        65 Wolfe Street, Wynberg, Cape Town, South Africa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="flex flex-col gap-3">
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Warranty, Shipping & Support
                                    </h1>
                                </div>
                                <div>
                                    <p>
                                        Every Modena Computer desktop PC is sold with a 3-year warranty (upgradable to 4-year), and life-time hardware support.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        After speaking to a Modena support consultant, and it is found that that something is wrong with your workstation hardware-wise, we offer free return shipping on all warranty claims within the first 3 years of ownership to anywhere in South Africa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="flex flex-col gap-5">

                            </div>
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;