import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Serenity Haven-{title}</title>
        </Helmet>
    );
};

export default PageTitle;

PageTitle.propTypes = {
    title: PropTypes.string
}