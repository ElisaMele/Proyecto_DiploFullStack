import React from "react";
import '../styles/layout/Header.css';

const Header = (props) => {

    return (
        <header>
            <div>
                <img class="logo" src="/images/oasis-hotels-logo-600x293.png" alt="Hotel Oasis"/>

                    <div>
                        <p class="phone">(57) 7289-254-732</p>
                        <button class="btn">BOOK NOW</button>
                    </div>
            </div>
        </header>
    )
};

export default Header;
