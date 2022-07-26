import PropTypes from "prop-types";
import style from './SearchInfoList.module.scss';

const SearchInfoList = ({ title, value }) => {
    return (
        <li className={style.item}>
            <span className={style.title}>{title}:</span>
            <span className={style.value}>{value}</span>
        </li>
    );
};

SearchInfoList.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
};

export default SearchInfoList;