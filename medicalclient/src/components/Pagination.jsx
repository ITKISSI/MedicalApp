import { useState } from "react";

const Pagination = ({ onClick, tottalPages }) => {
  const [currentSelected, setCurrentSelected] = useState(0);
  const normalCss = "page-item";
  const selectedCss = "page-item active";

  const numbers = [];
  for (let i = 0; i < tottalPages; i++) {
    numbers.push(
      <li className={currentSelected == i ? selectedCss : normalCss}>
        <a
          onClick={() => {
            onClick(i);
            setCurrentSelected(i);
          }}
          className="page-link "
          href="#"
        >
          {i}
        </a>
      </li>
    );
  }
  return (
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {numbers}

          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
