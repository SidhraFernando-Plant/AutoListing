import React from 'react'
import auto from './img/white_diamond.png';

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-info">
                <div className="d-flex align-items-center p-1">
                    <img src={auto}/>
                    <a class="navbar-brand ml-2"><span className="font-weight-bold">AutoListing</span> by Gameabl</a>
                </div>
            </nav>
        </div>
    )
}
