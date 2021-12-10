import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "react";
import { createCategory } from "../../Action/category";
function Createcategory({ createCategory }) {
  //useState
  const [name, setName] = useState("");

  //onchange handler for category
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory({ name });
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <Fragment>
      <section className="hero m-4">
        <div className="container">
          <h3 className="text-center">Create category</h3>

          <form action="" onSubmit={onSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">category</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={handleChange}
                placeholder="create category"
                autoFocus
                required
              />
            </div>
            <button type="submit" className="btn btn-dark btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
Createcategory.propTypes = {
  createCategory: PropTypes.func.isRequired,
};
export default connect(null, { createCategory })(Createcategory);
