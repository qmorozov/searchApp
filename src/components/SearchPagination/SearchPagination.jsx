import PropTypes from "prop-types";
import style from './SearchPagination.module.scss';

const SearchPagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) pageNumbers.push(i);

    return (
        <ul className={style.wrapper}>
            {pageNumbers.map(number => (
                <li
                    key={number}
                    className={`${style.item} ${currentPage === number && style.current}`}
                    onClick={() => paginate(number)}
                >
                    {number}
                </li>
            ))}
        </ul>
    );
};

SearchPagination.propTypes = {
    itemsPerPage: PropTypes.number,
    totalItems: PropTypes.number,
    paginate: PropTypes.func,
    currentPage: PropTypes.number,
};

export default SearchPagination;