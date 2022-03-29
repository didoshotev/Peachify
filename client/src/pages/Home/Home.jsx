import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';

function Home() {
    return (
        <div className="page-bg">
            <section className={classes.content}>
                <div style={{ paddingBottom: '100px', paddingTop: '150px' }}>
                    <img src="/icons/peachify-logo-white-png.png" width={250} height={100} alt="peachify-logo" />
                </div>
                <Link to="/dashboard">
                    <Button
                        className={classes['content-action']}
                        sx={{
                            border: '3px solid #FFA200',
                            height: '70px',
                            width: '400px',
                            borderRadius: '39px',
                            backgroundColor: 'rgb(68, 37, 79)',
                            fontFamily: 'MoonLight',
                            fontSize: '25px',
                        }}
                        variant="contained"
                    >
                        Connect Wallet
                    </Button>
                </Link>
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
