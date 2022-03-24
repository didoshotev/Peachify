import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import classes from './Header.module.scss';

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(73, 38, 64)' }}>
            <Container maxWidth="xl">
                <Toolbar className={classes.header}>
                    <span className={classes['header-logo']}>
                        <Typography variant="h6" component="div">
                            Peachify
                        </Typography>
                    </span>
                    <nav className={classes['header-nav']}>
                        <ul className={classes['header-nav-list']}>
                            <li
                                className={`${classes['header-nav-list-item']} ${classes['header-nav-list-item-active']}`}
                            >
                                dashboard
                            </li>
                            <li className={classes['header-nav-list-item']}>
                                tables
                            </li>
                            <li className={classes['header-nav-list-item']}>
                                overview
                            </li>
                            <li className={classes['header-nav-list-item']}>
                                casino
                            </li>
                            <li className={classes['header-nav-list-item']}>
                                token swap
                            </li>
                            <li className={classes['header-nav-list-item']}>
                                my NFT
                            </li>
                        </ul>
                    </nav>
                    <ul className={classes['header-info-list']}>
                        <li
                            className={`${classes['header-info-list-item']} ${classes['header-info-list-item-account']}`}
                        >
                            123X3456X...456b
                        </li>
                        <li
                            className={`${classes['header-info-list-item']} ${classes['header-info-list-item-dsc']}`}
                        >
                            <img
                                src="/icons/discord-white.svg"
                                alt="discord icon"
                            />
                        </li>
                        <li className={classes['header-info-list-item']}>
                            <img
                                src="/icons/twitter-white.svg"
                                alt="discord icon"
                            />
                        </li>
                    </ul>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
