import { Container } from '@mui/material';
import HeaderFooterLayout from '../../shared/components/layouts/HeaderFooterLayout/HeaderFooterLayout';
import classes from './Dashboard.module.scss';

function Dashboard() {
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
