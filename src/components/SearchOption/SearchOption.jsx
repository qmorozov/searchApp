import PropTypes from "prop-types";
import parse from 'html-react-parser';
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../redux/actions/searchQuery";
import {fetchItems, setLoaded} from "../../redux/actions/items";
import ContentLoader from "react-content-loader";
import style from './SearchOption.module.scss';

const SearchOption = ({items, isLoaded}) => {
    const dispatch = useDispatch();

    const newSearch = value => {
        dispatch(setLoaded(false));
        dispatch(setSearchQuery(value));
        dispatch(fetchItems(value));
    };

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>
                {isLoaded
                    ? <>Related queries</>
                    : <>Loading<span className="loading"></span></>
                }
            </h3>
            <ul className={style.list}>
                {isLoaded
                    ? items.map(item => (
                        <li
                            key={item.position}
                            className={style.item}
                            onClick={() => newSearch(item.keyword)}
                            title={`search option: "${item.keyword}"`}
                        >
                            <span className={style.item__text}>{parse(item.keyword_html)}</span>
                        </li>
                    ))
                    : Array(10).fill(0).map((_, index) => (
                        <li className={style.item} key={index}>
                            <span className={style.item__text}>
                               <ContentLoader
                                   speed={2}
                                   // viewBox="0 0 180 16"
                                   backgroundColor="#f5f5f540"
                                   foregroundColor="#2a2a2a2e"
                                   className={style.loader}
                               >
                                    <rect x="16" y="6" rx="3" ry="5" className={style.loader__line}/>
                                </ContentLoader>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

SearchOption.propTypes = {
    items: PropTypes.array
};

export default SearchOption;