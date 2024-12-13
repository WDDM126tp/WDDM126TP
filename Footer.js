import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <footer><p>© {currentYear} My App</p></footer>;
};

export default Footer;
