import React from 'react';
import SearchBox from './searchBox';
import Results from './results';
import { getResults } from './api/getResults';
import loading from '../src/images/loading.gif';

class SearchContacts extends React.Component {
  constructor(props) {
    super(props);
    const { terms } = this.props.params || {};
    const searchActive = Boolean(terms);
    this.state = {
      currentSearch: searchActive ? terms : '',
      results: searchActive ? getResults(terms) : [],
      searchActive: searchActive,
      isLoading: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(searchStr) {
    if (searchStr.length === 0) {
      return this.clearSearch();
    }
    if (this.state.currentSearch !== searchStr) {
      try {
        this.setState({ isLoading: true, isError: false });
        let searchResults = await getResults(searchStr);
        this.setState({
          searchActive: true,
          currentSearch: searchStr,
          results: searchResults,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        this.setState({ isLoading: false, isError: true, searchActive: true });
      }
    }
  }

  clearSearch() {
    this.setState({
      searchActive: false,
      currentSearch: '',
      results: [],
    });
  }

  render() {
    return (
      <section>
        <SearchBox
          onSubmit={this.onSubmit}
          currentSearch={this.state.currentSearch}
        />
        {this.state.isLoading ? (
          <img src={loading} alt="loading" width="100" height="100" />
        ) : this.state.searchActive ? (
          <Results data={this.state.results} isError={this.state.isError} />
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default SearchContacts;
