import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div>
      {pages.map((page, idx) => {
        return (
          <span
            className={currentPage === page ? styles.selectedPage : ""}
            key={idx}
            onClick={() => onPageChanged(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
