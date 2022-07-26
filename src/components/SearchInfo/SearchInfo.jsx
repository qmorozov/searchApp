import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import { SearchInfoList, SearchInfoLoading } from "../index";
import Color from "color-thief-react";
import style from './SearchInfo.module.scss';

const SearchInfo = ({ isLoaded }) => {
    const [image, setImage] = useState('');
    const items = useSelector(({items}) => items.items);

    const getDomain = url => new URL(url).hostname;

    useEffect(() => {
        if (items.knowledge_panel) {
            axios.get(items.knowledge_panel.image && items.knowledge_panel.image.url)
                .then(() => setImage(items.knowledge_panel.image.url))
                .catch(() => setImage(items.knowledge_panel.image.page_url))
                .catch(() => setImage(''));
        }
    }, [items]);

    return (
        <div className={style.inner}>
            {isLoaded && items.knowledge_panel
                ? (
                    <div className={style.wrapper}>
                        {image !== ''
                            ? <Color src={image} crossOrigin="anonymous" format="hex">
                                {({ data }) => {
                                    return (
                                        <div className={style.photo} style={{backgroundColor: data}}>
                                            <img
                                                src={image}
                                                alt={items.knowledge_panel.name}
                                                title={items.knowledge_panel.name}
                                                width={items.knowledge_panel.image.width}
                                                height={items.knowledge_panel.image.height}
                                            />
                                        </div>
                                    );
                                }}
                            </Color> : null
                        }
                        {items.knowledge_panel.description.url
                            ? (<a
                                target="_blank"
                                className={style.source}
                                href={items.knowledge_panel.description.url}
                                title={items.knowledge_panel.description.site}
                                aria-label={items.knowledge_panel.description.site}
                            >
                                <img
                                    alt={items.knowledge_panel.description.site}
                                    src={`http://www.google.com/s2/favicons?domain=${getDomain(items.knowledge_panel.description.url)}`}
                                />
                                <p>{items.knowledge_panel.description.site}</p>
                            </a>)
                            : null
                        }
                        <div className={style.main}>
                            <h2 className={style.main__name}>{items.knowledge_panel.name}</h2>
                            <span className={style.main__label}>{items.knowledge_panel.label}</span>
                        </div>
                        <p className={style.description}>{items.knowledge_panel.description.text}</p>
                        <ul className={style.list}>
                            {items.knowledge_panel.info.map((item, index) => (
                                <SearchInfoList
                                    title={item.title}
                                    value={item.labels[0]}
                                    key={`${index}_${item.title}`}
                                />
                            ))}
                        </ul>
                    </div>
                )
                : <SearchInfoLoading/>
            }
        </div>
    );
};

export default SearchInfo;

// <div className={style.inner}>
//     {isLoaded && items.knowledge_panel
//         ? (
//             <div className={style.wrapper}>
//                 {image !== ''
//                     ? (<div className={style.photo}>
//                         <img
//                             src={image}
//                             alt={items.knowledge_panel.name}
//                             title={items.knowledge_panel.name}
//                             width={items.knowledge_panel.image.width}
//                             height={items.knowledge_panel.image.height}
//                         />
//                     </div>)
//                     : null
//                 }
//                 {items.knowledge_panel.description.url
//                     ? (<a
//                         target="_blank"
//                         className={style.source}
//                         href={items.knowledge_panel.description.url}
//                         title={items.knowledge_panel.description.site}
//                         aria-label={items.knowledge_panel.description.site}
//                     >
//                         <img
//                             alt={items.knowledge_panel.description.site}
//                             src={`http://www.google.com/s2/favicons?domain=${getDomain(items.knowledge_panel.description.url)}`}
//                         />
//                         <p>{items.knowledge_panel.description.site}</p>
//                     </a>)
//                     : null
//                 }
//                 <div className={style.main}>
//                     <h2 className={style.main__name}>{items.knowledge_panel.name}</h2>
//                     <span className={style.main__label}>{items.knowledge_panel.label}</span>
//                 </div>
//                 <p className={style.description}>{items.knowledge_panel.description.text}</p>
//                 <ul className={style.list}>
//                     {items.knowledge_panel.info.map((item, index) => (
//                         <SearchInfoList
//                             title={item.title}
//                             value={item.labels[0]}
//                             key={`${index}_${item.title}`}
//                         />
//                     ))}
//                 </ul>
//             </div>
//         )
//         : <SearchInfoLoading/>
//     }
// </div>