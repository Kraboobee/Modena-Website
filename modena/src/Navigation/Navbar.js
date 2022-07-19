import React, { useState } from "react";

// TODO: useState hook to hide menu in mobile


function Nav() {
    
    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-50 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-zinc-700" href="#pablo">
                Modena Computers
                        </a>
                        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                            <span className="block relative w-6 h-px rounded-sm bg-zinc-700"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-zinc-700 mt-1"></span>
                            <span className="block relative w-6 h-px rounded-sm bg-zinc-700 mt-1"></span>
                        </button>
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            Desktops
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            Laptops
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            Solutions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            Support
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-700 hover:opacity-75" href="#pablo">
                            Contact Us
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
