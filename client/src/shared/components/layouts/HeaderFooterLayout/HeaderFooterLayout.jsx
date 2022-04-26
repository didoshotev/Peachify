import PropTypes from 'prop-types';
import Header from '../../Header/Header';
import { CheckConnection } from '../../HOC/CheckConnection/CheckConnection';

function HeaderFooterLayout({ children }) {
    return (
        <CheckConnection>
            <Header />
            {children}
        </CheckConnection>
    );
}

export default HeaderFooterLayout;

HeaderFooterLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
