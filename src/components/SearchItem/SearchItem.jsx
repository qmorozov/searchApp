import PropTypes from "prop-types";
import style from './SearchItem.module.scss';

const SearchItem = ({ url, title, description }) => {
    const truncate = (str, n) => str?.length > n ? str.substr(0, n - 1) + "..." : str;

    return (
        <li className={style.wrapper} title={title}>
            <h2 className={style.title}>
                <a href={url} target="_blank" aria-label={title}>{title}</a>
            </h2>
            <a className={style.url} href={url} target="_blank" aria-label={title}>
                {`http://www.google.com/s2/favicons?domain=${url}`
                    ? <img
                        className={style.favicon}
                        src={`http://www.google.com/s2/favicons?domain=${url}`}
                        alt={title}
                    />
                    : null}
                <span className={style.link}>{truncate(url, 40)}</span>
            </a>
            <p className={style.description}>{description}</p>
        </li>
    );
};

SearchItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};


export default SearchItem;