import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContacts from './searchContacts';


jest.mock('./api/data', () => [
  {
    name: 'George Michael',
    phone: '01234567891',
  },
  {
    name: 'John Smith',
    phone: '01234567892',
  },
  {
    name: 'Sue Perkins',
    phone: '01234567893',
  },
  {
    name: 'Tim Cook',
    phone: '01234567894',
  },
]);

describe('searchContacts', () => {
  describe('when a search term is provided via the url param', () => {
    const givenParams = { terms: 'tim' };
    it('prefills the search box with the search term', () => {
      const { getByPlaceholderText } = render(
        <SearchContacts params={givenParams} />
      );
      const searchBox = getByPlaceholderText('Search for contacts');
      expect(searchBox.value).toBe('tim');
    });
    it('shows matching a contact results', () => {
      const { queryByText } = render(<SearchContacts params={givenParams} />);
      const searchItem = queryByText('Tim Cook');
      expect(searchItem).toBeDefined();
    
    });
  });

  describe('when no search has been made', () => {
    it('does not show any results or messages', () => {
      const { container } = render(<SearchContacts />);
      expect(container.querySelector('.results')).toBeNull();
    });
  });

  describe('when a new search is submitted', () => {
    describe('when a valid search term is used', () => {
      it('shows matching contacts', () => {
        const { getByPlaceholderText, queryByText } = render(
          <SearchContacts />
        );
        const searchBox = getByPlaceholderText('Search for contacts');
        userEvent.type(searchBox, 'George');
        const searchButton = queryByText('Search');
        userEvent.click(searchButton);
        const searchItem = queryByText('George Michael');
        expect(searchItem).toBeDefined();
      });
    });

    describe('when the search box is empty', () => {
      it('clears the search results', () => {
        const { getByPlaceholderText, queryByText, container } = render(
          <SearchContacts />
        );
        const searchBox = getByPlaceholderText('Search for contacts');
        userEvent.type(searchBox, 'George');
        const searchButton = queryByText('Search');
        userEvent.click(searchButton);
        expect(container.querySelector('.results')).toBeDefined();
        userEvent.clear(searchBox);
        userEvent.click(searchButton);
        expect(container.querySelector('.results')).toBeNull();
      });
    });
  });
});
