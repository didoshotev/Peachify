import classes from './OverviewList.module.scss';

function OverviewList() {
    return (
        <ul className={classes.list}>
            <li className={classes['list-item']}>
                <div className={classes['list-item-head']} />
                <div className={classes['list-item-body']}>
                    <p style={{ margin: '8px 0' }}>1 | 200</p>
                    <p style={{ marginBottom: '10px' }}>REWARD: X</p>
                </div>
            </li>
            <li className={classes['list-item']}>
                <div className={classes['list-item-head']} />
                <div className={classes['list-item-body']}>
                    <p style={{ margin: '8px 0' }}>1 | 200</p>
                    <p style={{ marginBottom: '10px' }}>REWARD: X</p>
                </div>
            </li>
            <li className={classes['list-item']}>
                <div className={classes['list-item-head']} />
                <div className={classes['list-item-body']}>
                    <p style={{ margin: '8px 0' }}>1 | 200</p>
                    <p style={{ marginBottom: '10px' }}>REWARD: X</p>
                </div>
            </li>
            <li className={classes['list-item']}>
                <div className={classes['list-item-head']} />
                <div className={classes['list-item-body']}>
                    <p style={{ margin: '8px 0' }}>1 | 200</p>
                    <p style={{ marginBottom: '10px' }}>REWARD: X</p>
                </div>
            </li>
            <li className={classes['list-item']}>
                <div className={classes['list-item-head']} />
                <div className={classes['list-item-body']}>
                    <p style={{ margin: '8px 0' }}>1 | 200</p>
                    <p style={{ marginBottom: '10px' }}>REWARD: X</p>
                </div>
            </li>
        </ul>
    );
}

export default OverviewList;
