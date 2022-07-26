import PropTypes from "prop-types";
import style from './SearchResultNumbers.module.scss';

const SearchResultNumbers = ({ numbers, isLoaded }) => {
    return (
        <>
            {isLoaded
                ? (<div className={style.wrapper}>
                    {numbers} <span>Results</span>
                </div>)
                : <div className={style.wrapper}>Loading<span className="loading"></span></div>
            }
        </>
    );
};

SearchResultNumbers.propTypes = {
    numbers: PropTypes.number.isRequired
};

export default SearchResultNumbers;