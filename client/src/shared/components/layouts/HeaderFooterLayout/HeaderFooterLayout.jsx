import PropTypes from 'prop-types';
import Header from '../../Header/Header';

function HeaderFooterLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default HeaderFooterLayout;

HeaderFooterLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
