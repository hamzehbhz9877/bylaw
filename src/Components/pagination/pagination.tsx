import { FC } from "react";

type Props= {
  pages: Array<any>;
  goTo: (page: number) => void;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  total: number;
}

const Pagination= ({
  pages,
  goTo,
  currentPage,
  nextPage,
  prevPage,
  total,
}:Props) => {
  var rows = pages.map((item, index) => (
    <li
      key={index}
      id={index.toString()}
      className={`pagination__item ${
        currentPage === item ? "pagination__item--active" : ""
      }`}
      onClick={() =>
        item.toString() === "..."
          ? goTo(currentPage + 1)
          : item.toString() === "... "
          ? goTo(currentPage - 1)
          : item.toString() === " ..."
          ? goTo(currentPage + 1)
          : goTo(item)
      }
    >
      <span className="pagination__link">{item}</span>
    </li>
  ));

  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          <li
            className={`pagination__item ${
              currentPage === 1 ? "disabled" : ""
            }`}
            onClick={prevPage}
          >
            <span
              className="pagination__link "
              aria-disabled={currentPage === 1}
            >
              قبلی
            </span>
          </li>
          {rows}
          <li
            className={`pagination__item ${
              currentPage === total ? "disabled" : ""
            }`}
            onClick={nextPage}
          >
            <span className="pagination__link">بعدی</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
