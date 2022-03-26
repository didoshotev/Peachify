import { Button } from '@mui/material';
import HeaderFooterLayout from '../../shared/components/layouts/HeaderFooterLayout/HeaderFooterLayout';
import classes from './Tables.module.scss';

function Tables() {
    return (
        <HeaderFooterLayout>
            <div className="page-bg">
                <section className={classes.content}>
                    <ul className={classes['content-overview']}>
                        <li className={classes['content-overview-item']}>
                            <span className={classes['content-overview-item-label']}>All Nodes Created</span>
                            <span className={classes['content-overview-item-value']}>XXXXX</span>
                        </li>
                        <li className={classes['content-overview-item']}>
                            <span className={classes['content-overview-item-label']}>My Total Nodes</span>
                            <span className={classes['content-overview-item-value']}>XXXXX</span>
                        </li>
                        <li className={classes['content-overview-item']}>
                            <span className={classes['content-overview-item-label']}>My Rewards</span>
                            <span className={classes['content-overview-item-value']}>XXXXX</span>
                        </li>
                        <li className={classes['content-overview-item']}>
                            <Button variant="contained" sx={{ borderRadius: '31px', width: '150px', height: '45px' }}>Claim Reward</Button>
                        </li>
                    </ul>
                    <div className={classes['content-create']}>
                        <div className={classes['content-create-item']}>
                            Create node
                        </div>
                        <div className={classes['content-create-item']}>
                            Details
                        </div>
                        <div className={classes['content-create-item']}>
                            Details
                        </div>
                    </div>
                    <div className={classes['content-nodes']}>
                        Your nodes
                    </div>
                </section>
            </div>
        </HeaderFooterLayout>
    );
}

export default Tables;
