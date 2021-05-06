import React, { useState } from "react";

import styles from "./paginator.module.css";
import cn from "classnames";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil (totalItemsCount / pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && 
            <button className={styles.paginatorButton} onClick={() => {setPortionNumber(portionNumber - 1)}}>&#8249; Prev</button>}

            {
                pages.filter(page => page >= leftPortionPageNumber && page <= rigthPortionPageNumber)
                    .map(page => {
                        return (
                            <span className={cn({
                                [styles.selectedPage] : currentPage === page
                            }, styles.pageNumber)} key={page}
                                                onClick={(e) => onPageChanged(page)}
                            >{page}</span>
                        )
                    })
            }
        {
            portionCount > portionNumber &&
                <button className={styles.paginatorButton} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next &#8250;</button>
        }
        </div>
    )
}

export default Paginator;