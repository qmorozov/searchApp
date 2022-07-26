import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    Form, SearchItems, SearchInfo,
    SearchPerhaps, SearchOption,
    SearchResultNumbers, SearchPagination
} from "../index";
import style from './SearchPage.module.scss';

const SearchPage = () => {
    const [perhapsVisible, setPerhapsVisible] = useState(false);
    const searchQuery = useSelector(({searchQuery}) => searchQuery.query);
    const items = useSelector(({items}) => items.items);
    const isLoaded = useSelector(({items}) => items.isLoaded);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex - itemsPerPage;
    const currentItems = items.results && items.results.slice(firstItemsIndex, lastItemsIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        if (items.related_keywords) {
            (Object.keys(items).length !== 0 && items.related_keywords.spelling_suggestion)
                ? setPerhapsVisible(true)
                : setPerhapsVisible(false);
            (Object.keys(items).length !== 0 && items.related_keywords.spelling_suggestion) === searchQuery
            && setPerhapsVisible(false);
        }

        document.title = searchQuery !== '' ? `Search query - ${searchQuery}` : 'search app';
    }, [items, searchQuery]);

    return (
        <div className={style.container}>
            <Form/>
            {perhapsVisible && items.related_keywords.spelling_suggestion && isLoaded
                ? (<SearchPerhaps
                    searchQuery={searchQuery}
                    setPerhapsVisible={setPerhapsVisible}
                    spellingSuggestion={items.related_keywords.spelling_suggestion}
                />)
                : null
            }

            {items.results ? <SearchResultNumbers numbers={items.results.length} isLoaded={isLoaded}/> : null}

            {items
                ? (<div className={`${style.wrapper} ${items.knowledge_panel === null ? style.onlyMain : ''}`}>
                    <div className={style.first__column}>
                        <SearchItems currentItems={currentItems} items={items.results} isLoaded={isLoaded}/>

                        {items.related_keywords ? <SearchOption items={items.related_keywords.keywords} isLoaded={isLoaded}/> : null}

                        {items.results && isLoaded
                            ? <SearchPagination
                                paginate={paginate}
                                totalItems={items.results.length}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                            />
                            : null
                        }
                    </div>

                    {items.knowledge_panel ?
                        <div className={style.second__column}>
                            <SearchInfo isLoaded={isLoaded}/>
                        </div>
                        : null
                    }
                </div>)
                : null
            }
        </div>
    );
};

export default SearchPage;