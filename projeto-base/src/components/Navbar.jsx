import React, { useState } from "react";
import Logo from "../assets/logo-bank.png";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PaidIcon from '@mui/icons-material/Paid';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import InfoIcon from "@mui/icons-material/Info";
import { HiOutlineBars3 } from "react-icons/hi2"
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Sobre",
            icon: <AccountBalanceIcon />,
        },
        {
            text: "Avaliações",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Investimentos",
            icon: <PaidIcon />,
        },
        {
            text: "Contatos",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Termos e condições",
            icon: <InfoIcon />,
        },
    ];

    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="Logo Banco"/>
            </div>

            <div className="navbar-links-container">
                <a href="">Sobre</a>
                <a href="">Avaliações</a>
                <a href="">Contatos</a>
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={(() => setOpenMenu(false))} anchor="right">
                <Box
                    sx={{ width: 250}}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>                            
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;