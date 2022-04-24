/* eslint-disable */
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useWeb3 } from '../../context/Web3Context/Web3ContextProvider';
import HeaderFooterLayout from '../../shared/components/layouts/HeaderFooterLayout/HeaderFooterLayout';
import classes from './Dashboard.module.scss';

function Dashboard() {
    const { account } = useWeb3();
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log('current account: ', account);
        if (!account) {
            console.log('redirect');
            navigate("/");
        }
    }, [account])
    

    return (
        <HeaderFooterLayout>
            <div className="page-bg">
                <Container maxWidth="xl" sx={{ width: '100%', margin: 'auto' }}>
                    <section className={classes.content}>
                        <ul className={classes['content-list']}>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                            <li className={classes['content-list-item']}>
                                <span className={classes['content-list-item-head']}>NFT SUPPLY</span>
                                <span>1000</span>
                            </li>
                        </ul>
                    </section>
                </Container>
            </div>
        </HeaderFooterLayout>
    );
}

export default Dashboard;
