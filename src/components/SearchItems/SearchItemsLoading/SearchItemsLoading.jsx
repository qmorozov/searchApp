import ContentLoader from "react-content-loader";
import style from './SearchItemsLoading.module.scss';

const SearchItemsLoading = () => (
    <div className={style.wrapper}>
        <ContentLoader
            speed={2}
            viewBox="0 0 927 95"
            backgroundColor="#f5f5f540"
            foregroundColor="#2a2a2a2e"
            className={style.loader}
        >
            <rect x="5" y="0" rx="4" ry="4" className={style.title} />
            <rect x="5" y="33" rx="3" ry="3" className={style.url} />
            <rect x="5" y="60" rx="5" ry="5" className={style.description} />
        </ContentLoader>
    </div>
)

export default SearchItemsLoading;