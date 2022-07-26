import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearchQuery} from "../../redux/actions/searchQuery";
import {fetchItems, setLoaded} from "../../redux/actions/items";
import style from './Form.module.scss';

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const searchQuery = useSelector(({ searchQuery }) => searchQuery.query);

    const handleQuery = e => {
        dispatch(setSearchQuery(e.target.value));
        setError(false);
    };

    const search = e => {
        e.preventDefault();

        if (searchQuery) {
            navigate('/search');
            setError(false);
            dispatch(setLoaded(false));
            dispatch(fetchItems(searchQuery));
        } else setError(true);
    };

    return (
        <form className={style.form}>
            <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={handleQuery}
                placeholder="Search the web"
                title="Enter your search term"
                className={`${style.input} ${error && style.error}`}
            />
            <button
                type="submit"
                title="Search"
                onClick={search}
                aria-label="Search"
                className={style.button}
            />
        </form>
    );
};

export default Form;