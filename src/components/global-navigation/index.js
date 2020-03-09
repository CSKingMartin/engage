import React, { useState, useRef } from 'react';
import zenscroll from 'zenscroll';

import Button from '@tags/button';
import Icon from '@tags/icon';

export const GlobalNavigation = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;


  const classes = ['global-navigation', className].join(' ');
  const [isOpen, toggleMenu] = useState(false);

  // const main = document.querySelector('.pageshell__main');

  const menu = useRef(null);
  const button = useRef(null);

  // const scrollToTop = () => {
  //   main.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // };

  const onToggle = () => {
    if (!isOpen) {
      toggleMenu(!isOpen);
      menu.current.querySelector(':not([disabled])').focus(); 
    }
  };

  const handleTravel = (e) => {
    e.preventDefault();
    const target = e.target.href;

    // main.scrollTo(target);

    toggleMenu(false);
  };

  const handleKeypress = (e) => {
    console.log(e.keyCode);

    if (e.keyCode === 13) {
      toggleMenu(!isOpen);
    } else if (e.keyCode === (40 || 32)) {
      toggleMenu(true);
      menu.current.querySelector(':not([disabled])').focus(); 
    } else if (e.keyCode === (38)) {
      toggleMenu(false);
    }
  };

  const handleButtonKeypress = (e) => {
    e.preventDefault();

    if (e.keyCode === 9) {
      button.current.focus();
    } else if (e.keyCode === 40) {
      menu.current.querySelector(':not([disabled])').focus();
    }
  };

  return (
    <div className={classes} {...rest}>
      <label id="menu-label" className="is-hidden">Menu</label>
      <button
        onClick={onToggle}
        className={isOpen ? 'global-navigation__menu-button is-open' : 'global-navigation__menu-button'}
        aria-labelledby="menu-label"
        aria-haspopup={true}
        aria-expanded={isOpen}
        onKeyDown={handleKeypress}
        ref={button}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div ref={menu} className="global-navigation__menu has-rhythm" role="menu" hidden={!isOpen}>
        <Button href="/#about" onClick={handleTravel} role="menuitem" tabIndex={isOpen ? 1 : -1}>About</Button>
        <Button href="/#say-hello" onClick={handleTravel} role="menuitem" tabIndex={isOpen ? 1 : -1}>Say Hello!</Button>
        <Button onKeyDown={handleButtonKeypress} href="/#faq" onClick={handleTravel} role="menuitem" tabIndex={isOpen ? 1 : -1}>FAQ</Button>
      </div>
      <Button className="global-header__up-button">Back up<Icon name="arrow-down" /></Button>
    </div>
  );
};

export default GlobalNavigation;
