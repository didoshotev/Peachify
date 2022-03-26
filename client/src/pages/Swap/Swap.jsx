import { Button } from '@mui/material';
import HeaderFooterLayout from '../../shared/components/layouts/HeaderFooterLayout/HeaderFooterLayout';
import classes from './Swap.module.scss';
import SwapInput from './SwapInput/SwapInput';

function Swap() {
    return (
        <HeaderFooterLayout>
            <div className="page-bg">
                <div className={classes.container}>
                    <section className={classes.box}>
                        <div className={classes['box-heading']}>
                            <h3>SWAP</h3>
                        </div>
                        <div className={classes['box-content']}>
                            <SwapInput labelLeft="from" labelRight="Max" />
                            <div className={classes['box-content-refresh-icon']}>
                                <img src="/icons/refresh-white.svg" style={{ width: '50px' }} alt="refresh-icon" />
                            </div>
                            <SwapInput labelLeft="to" labelRight="Balance" />
                            <ul className={classes['box-content-info']}>
                                <li className={classes['box-content-info-item']}>
                                    <span className={classes['box-content-info-item-label']}>Price</span>
                                    <span className={classes['box-content-info-item-value']}>X Peaches per AVAX</span>
                                </li>
                                <li className={classes['box-content-info-item']}>
                                    <span className={classes['box-content-info-item-label']}>Auto Slippage</span>
                                    <span className={classes['box-content-info-item-value']}>Active</span>
                                </li>
                                <li className={classes['box-content-info-item']}>
                                    <span className={classes['box-content-info-item-label']}>Maximum Received</span>
                                    <span className={classes['box-content-info-item-value']}>9.999</span>
                                </li>
                            </ul>
                            <div className={classes['box-content-action']}>
                                <Button variant="contained" sx={{ borderRadius: '31px', width: '120px', height: '40px' }}>Swap</Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </HeaderFooterLayout>
    );
}

export default Swap;
