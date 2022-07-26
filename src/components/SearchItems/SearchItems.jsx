import PropTypes from "prop-types";
import { SearchItem, SearchItemsLoading } from "../index";
import style from './SearchItems.module.scss';

const SearchItems = ({ currentItems, isLoaded }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.items}>
                {isLoaded
                    ? currentItems.map(item => (
                        <SearchItem
                            url={item.url}
                            title={item.title}
                            key={item.position}
                            description={item.description}
                        />
                    ))
                    : Array(10).fill(0).map((_, index) => <SearchItemsLoading key={index} />)
                }
            </div>
        </div>
    );
};

SearchItems.propTypes = {
    currentItems: PropTypes.array,
};

export default SearchItems;