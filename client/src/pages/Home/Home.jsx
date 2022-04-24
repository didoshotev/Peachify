import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useWeb3 } from '../../context/Web3Context/Web3ContextProvider';
import classes from './Home.module.scss';

function Home() {
    const navigate = useNavigate();
    const web3 = useWeb3();

    const handleConnect = async () => {
        try {
            await web3.connectWithWallet();
        } catch (error) {
            return;
        }
        navigate('/dashboard');
    };

    return (
        <div className={classes['home-page-bg']}>
            <section className={classes.content}>
                <div style={{ paddingBottom: '90px', paddingTop: '100px' }}>
                    <img src="/icons/peachify-logo-white-png.png" width={300} height={100} alt="peachify-logo" />
                </div>
                {web3.provider
                    ? (
                        <Box className={classes.btn} type="button">
                            <span className={classes['btn-content']} tabIndex={0} role="button" onClick={handleConnect} onKeyDown={handleConnect}>
                                Connect Wallet
                            </span>
                        </Box>
                    )
                    : (
                        <Box className={classes.btn} type="button">
                            <Box sx={{ backdropFilter: 'blur(6px)', fontSize: 30, padding: 5 }}>
                                You must have metamask extension installed to use Peachify
                            </Box>
                        </Box>
                    )}

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
