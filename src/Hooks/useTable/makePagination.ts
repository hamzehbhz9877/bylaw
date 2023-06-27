import { useEffect, useState } from "react";

export const MakePagination = (
  currentPage: any,
  allPages: any,
  goTo: (data: number) => void
) => {
  const [pages, setPages] = useState([]);

  const totalPage: Array<string | number> = [];
  for (let i = 1; i <= allPages; i++) {
    totalPage.push(i);
  }

  useEffect(() => {
    let temp: any = [...pages];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (totalPage.length < 6) {
      temp = totalPage;
    } else if (currentPage >= 1 && currentPage <= 3) {
      temp = [1, 2, 3, 4, dotsInitial, totalPage.length];
    } else if (currentPage === 4) {
      const sliced = totalPage.slice(0, 5);
      temp = [...sliced, dotsInitial, totalPage.length];
    } else if (currentPage > 4 && currentPage < totalPage.length - 2) {
      const sliced1 = totalPage.slice(currentPage - 2, currentPage);
      const sliced2 = totalPage.slice(currentPage, currentPage + 1);
      temp = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, totalPage.length];
    } else if (currentPage > totalPage.length - 3) {
      const sliced = totalPage.slice(totalPage.length - 4);
      temp = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      goTo(pages[pages.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      goTo(pages[3] + 2);
    } else if (currentPage === dotsLeft) {
      goTo(pages[3] - 2);
    }
    setPages(temp);
  }, [currentPage, allPages]);

  return pages;
};
