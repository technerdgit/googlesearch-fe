import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBook(props) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card  mt-3" >
          <div className="card-content">
            <form className="search">
              <div className="form-group">
                <label htmlFor="books" className="align:center">Book Search:</label>
                <input
                  value={props.search}
                  onChange={props.handleInputChange}
                  name="book"
                  type="text"
                  className="form-control input float-left"
                  placeholder="Type in book to search"
                  id="book"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success button float-left">
                  Search
        </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBook;
