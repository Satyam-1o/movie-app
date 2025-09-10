import React, { useState } from "react";
import Search from "./components/Search";

export default function App(){

    const [searchTerm, setSearchTerm] = useState('');

    return(
        <main className="bg-[url(/images/bg.png)] bg-center">
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="/images/hero-img.png" alt="hero banner" />
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without The Hassle</h1>
                </header>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </main>
    )
}