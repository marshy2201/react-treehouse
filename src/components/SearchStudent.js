import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchStudent = ({ onSearch }) => {
  const searchInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Control 
        type="text" 
        placeholder="username..." 
        className="mr-sm-2" 
        ref={searchInput}
      />
      <Button type="submit" variant="outline-success">Search Student</Button>
    </Form>
  );
}

export default SearchStudent;