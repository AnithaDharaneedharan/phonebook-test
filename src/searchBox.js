import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.input && this.props.onSubmit) {
      this.props.onSubmit(this.input.value);
    }
  }

  render() {
    return (
      <form className="search-box" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Search for contacts"
          ref={el => {
            this.input = el;
          }}
          defaultValue={this.props.currentSearch}
          data-testid="searchValue"
        />
        <button type="submit" ref="submitBtn" data-testid="search">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBox;
