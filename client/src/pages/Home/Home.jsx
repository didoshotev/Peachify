import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';

function Home() {
    return (
        <div className={classes['home-page-bg']}>
            <section className={classes.content}>
                <div style={{ paddingBottom: '90px', paddingTop: '100px' }}>
                    <img src="/icons/peachify-logo-white-png.png" width={300} height={100} alt="peachify-logo" />
                </div>
                <Box className={classes.btn} type="button">
                    <Link to="/dashboard">
                        <span className={classes['btn-content']}>
                            Connect Wallet
                        </span>
                    </Link>
                </Box>
                <div style={{ marginTop: 100 }}>
                    <img
                        src="/icons/discord-white.svg"
                        alt="discord icon"
                        width={40}
                        style={{ marginRight: 20 }}
                    />
                    <img
                        src="/icons/twitter-white.svg"
                        alt="twitter icon"
                        width={40}
                    />
                </div>
            </section>
        </div>
    );
}

export default Home;
