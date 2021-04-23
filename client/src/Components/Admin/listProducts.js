import React from "react";

function listProducts() {
  return (
    <section class="products">
      <h3 class="text-center">Products</h3>
      <hr />
      <div class="container">
        <table class="table text-center mt-5 table-striped table-reflow">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>photo</th>
              <th>Delete</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cooker</td>
              <td class="text-break">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, necessitatibus?
              </td>
              <td>ksh 20000</td>
              <td>kitchen</td>
              <td>n/a</td>
              <td>
                <button class="btn btn-danger">Delete</button>
              </td>
              <td>
                <button class="btn btn-secondary ">
                  <a href="../views/update.html " class="text-white">
                    Update
                  </a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default listProducts;
