import React from "react";
import { Link } from "react-router-dom";
function pagination() {
  return (
    <div>
      <div class="container paginate">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <Link class="page-link" to="#" tabindex="-1" aria-disabled="true">
                Previous
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="#">
                1
              </Link>
            </li>
            <li class="page-item" aria-current="page">
              <Link class="page-link" to="#">
                2{" "}
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="#">
                3
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="#">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default pagination;
