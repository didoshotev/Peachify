import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import HeaderFooterLayout from '../../shared/components/layouts/HeaderFooterLayout/HeaderFooterLayout';
import OverviewList from './OverviewList/OverviewList';
import classes from './Overview.module.scss';

function Overview() {
    return (
        <HeaderFooterLayout>
            <div className={classes['page-bg']}>
                <Container maxWidth="xl">
                    <section className={classes['page-content']}>
                        <OverviewList />
                        <div className={classes.reward}>
                            <div className={classes['reward-info']}>
                                <p className={classes['reward-info-text']}>
                                    Total Reward
                                </p>
                                <p className={classes['reward-info-value']}>
                                    XXXXXXXXXX
                                </p>
                            </div>
                            <div className={classes['reward-action']}>
                                <Button
                                    sx={{
                                        width: '120px',
                                        height: '40px',
                                        marginTop: 3,
                                    }}
                                    size="large"
                                    variant="contained"
                                >
                                    claim
                                </Button>
                            </div>
                        </div>
                        <div className={classes['create-more-container']}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#DBA800',
                                    backgroundColor: 'rgb(48, 39, 52)',
                                    width: '250px',
                                    height: '50px',
                                    fontSize: '22px',
                                }}
                            >
                                Create More
                            </Button>
                        </div>
                    </section>
                </Container>
            </div>
        </HeaderFooterLayout>
    );
}

export default Overview;
