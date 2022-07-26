import ContentLoader from "react-content-loader";
import style from './SearchInfoLoading.module.scss';

const SearchInfoLoading = () => (
    <div className={style.wrapper}>
        <ContentLoader
            speed={2}
            className={style.loader}
            // viewBox="0 0 371 575"
            backgroundColor="#f5f5f540"
            foregroundColor="#2a2a2a2e"
        >
            <rect x="0" y="265" rx="3" ry="3" className={style.title} />
            <rect x="125" y="265" rx="2" ry="2" className={style.title__line} />
            <rect x="140" y="273" rx="3" ry="3" className={style.title__description} />
            <rect x="0" y="0" rx="5" ry="5" className={style.img} />
            <rect x="0" y="314" rx="2" ry="2" className={style.line} />
            <rect x="0" y="330" rx="4" ry="4" className={style.description} />
            <rect x="0" y="462" rx="2" ry="2" className={style.line} />
            <rect x="0" y="475" rx="2" ry="2" className={style.info__title} />
            <rect x="130" y="475" rx="2" ry="2" className={style.info__description} />
            <rect x="0" y="500" rx="2" ry="2" className={style.info__title} />
            <rect x="130" y="500" rx="2" ry="2" className={style.info__description} />
            <rect x="0" y="525" rx="2" ry="2" className={style.info__title} />
            <rect x="130" y="525" rx="2" ry="2" className={style.info__description} />
            <rect x="0" y="550" rx="2" ry="2" className={style.info__title} />
            <rect x="130" y="550" rx="2" ry="2" className={style.info__description} />
        </ContentLoader>
    </div>
)

export default SearchInfoLoading;