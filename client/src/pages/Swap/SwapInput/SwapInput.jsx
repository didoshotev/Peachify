import PropTypes from 'prop-types';
import classes from './SwapInput.module.scss';

function SwapInput({ labelLeft, labelRight, value }) {
    return (
        <>
            <div className={classes.info}>
                <span className={classes['info-leftLabel']}>{labelLeft}</span>
                <span className={classes['info-rightLabel']}>{labelRight}</span>
                <span className={classes['info-value']}>{value}</span>
            </div>
            <div className={classes['input-container']}>
                <input id={value} type="text" className={classes.input} />
                <div className={classes.currency}>AVAX</div>
            </div>
        </>
    );
}

export default SwapInput;

SwapInput.propTypes = {
    labelLeft: PropTypes.string.isRequired,
    labelRight: PropTypes.string.isRequired,
    value: PropTypes.number,
};

SwapInput.defaultProps = {
    value: 0,
};
