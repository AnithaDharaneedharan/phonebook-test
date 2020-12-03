import React, { useState } from 'react';
import ContactDetails from './contactDetails';
import { getResults } from './api/getResults';

function ContactPage(props) {
  const [results, setResults] = useState([]);

  getResults(props.params.contact).then((responseObj) =>
    setResults(responseObj)
  );
  return results.length > 0 ? <ContactDetails data={results[0]} /> : '';
}

export default ContactPage;
