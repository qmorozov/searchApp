import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../redux/actions/searchQuery";
import {fetchItems, setLoaded} from "../../redux/actions/items";
import style from './SearchPerhaps.module.scss';

const SearchPerhaps = ({ searchQuery, spellingSuggestion, setPerhapsVisible }) => {
    const dispatch = useDispatch();

    const searchByCorrect = () => {
        setPerhapsVisible(false);
        dispatch(setLoaded(false));
        dispatch(setSearchQuery(spellingSuggestion));
        dispatch(fetchItems(spellingSuggestion));
    };

    const searchByOriginal = () => {
        setPerhapsVisible(false);
        dispatch(setLoaded(false));
        dispatch(fetchItems(searchQuery));
    };

    return (
        <div className={style.perhaps}>
            <p onClick={searchByCorrect} className={style.correct} title={`search by: ${spellingSuggestion}`}>
                Showing results by query: <span>{spellingSuggestion}</span>
            </p>
            <p onClick={searchByOriginal} className={style.origin} title={`search only by: ${searchQuery}`}>
                Do you want results only for: <span>{searchQuery}</span>
            </p>
        </div>
    );
};

SearchPerhaps.propTypes = {
    searchQuery: PropTypes.string,
    spellingSuggestion: PropTypes.string,
    setPerhapsVisible: PropTypes.func
}

export default SearchPerhaps;