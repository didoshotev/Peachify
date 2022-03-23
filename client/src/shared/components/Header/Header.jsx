import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import classes from './Header.module.scss';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
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
            </AppBar>
        </Box>
    );
}

export default Header;
