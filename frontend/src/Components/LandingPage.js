import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';

export default function LandingPage() {
  return <div>
      <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo"><h3>The Giving Tree</h3></a>
                </div>
                
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>
                </div>
            </nav>
        </header>

        <main className="l-main">
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__img">
                        
                        <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" data-speed="2" className="move"/>
                    </div>

                    <div className="home__data">
                        <h3
                        className="home__title">Charity<br/> With Grace</h3>
                        <p className="home__description">"Be the change you want to see in the world."</p>
                        <Link to="signup" className="home__button">Sign Up</Link>
                    </div>
                </div>
            </section>
        </main>

  </div>;
}
