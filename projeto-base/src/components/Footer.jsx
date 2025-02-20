import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Footer = () => {
    return (
        <div className="footer-container">
            <AccountBalanceIcon />
            <p>© 2025 AR Bank, Inc.</p>
            <p>Termos</p>
            <p>Privacidade e segurança</p>
            <p>Contatos</p>
            <p>Cookies</p>
        </div>
    );   
};

export default Footer;