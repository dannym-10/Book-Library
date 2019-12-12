import React, { useState } from 'react';
import SocialIcons from '../Components/SocialIcons';
import store from '../stores';

function Header () {
    const [ navOpen, setNavOpen ] = useState(false);

	const getNavigationItmes = () => {
		return store.navigation.map((items, index) => {
            return <a className='nav-item' key={index} href='#'>{items.displayName}</a>
        });
    }

    const toggleNavigation = () => {
        setNavOpen(!navOpen)
    }
    return(
        <header>
            <SocialIcons additionalClass='header-social-items' items={store.social} />
			<div className='header-mobile'>
                <h1 className='header-title'>The Book Store</h1>
				<div className='burger' onClick={toggleNavigation}>
					<span />
					<span />
					<span />
				</div>
			</div>
            <div className='header-top'>
                <div className='header-logo'>
                    <img src='' atl='logo'/>
                </div>
            </div>
            <div className={`header-bottom ${navOpen ? 'header-open' : ''}`}>
                {getNavigationItmes()}
            </div>
        </header>
        );
}

export default Header;