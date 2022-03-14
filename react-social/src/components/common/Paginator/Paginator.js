import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page, idx) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === page,
                },
                styles.pageNumber
              )}
              // className={currentPage === page ? styles.selectedPage : ""}
              key={idx}
              onClick={() => onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
