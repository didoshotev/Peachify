/* eslint-disable */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { useWeb3 } from '../../../context/Web3Context/Web3ContextProvider';
import { shortenAddress } from '../../../utils/format';

function Header() {
    const { account } = useWeb3();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(73, 38, 64)' }}>
            <Container maxWidth="xl">
                <Toolbar className={classes.header}>
                    <span className={classes['header-logo']}>
                        <Link to="/">
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ color: 'white' }}
                            >
                                Peachify
                            </Typography>
                        </Link>
                    </span>
                    <nav className={classes['header-nav']}>
                        <ul className={classes['header-nav-list']}>
                            <Link to="/dashboard">
                                <li
                                    className={`${classes['header-nav-list-item']} ${classes['header-nav-list-item-active']}`}
                                >
                                    dashboard
                                </li>
                            </Link>
                            <Link to="/tables">
                                <li className={classes['header-nav-list-item']}>
                                    tables
                                </li>
                            </Link>
                            <Link to="/overview">
                                <li className={classes['header-nav-list-item']}>
                                    overview
                                </li>
                            </Link>
                            <Link to="/casino">
                                <li className={classes['header-nav-list-item']}>
                                    casino
                                </li>
                            </Link>
                            <Link to="/swap">
                                <li className={classes['header-nav-list-item']}>
                                    token swap
                                </li>
                            </Link>
                            <Link to="/myNft">
                                <li className={classes['header-nav-list-item']}>
                                    my NFT
                                </li>
                            </Link>
                        </ul>
                    </nav>
                    <ul className={classes['header-info-list']}>
                        <li
                            className={`${classes['header-info-list-item']} ${classes['header-info-list-item-account']}`}
                        >
                            {account ? shortenAddress(account) : "unknown address"}
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
                                alt="twitter icon"
                            />
                        </li>
                    </ul>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
