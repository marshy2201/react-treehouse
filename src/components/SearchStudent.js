import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Consumer } from './context';

const SearchStudent = () => (
  <Consumer>
    {({ actions }) => {
      const searchInput = React.createRef();

      const handleSubmit = (e) => {
        e.preventDefault();
        actions.onSearch(searchInput.current.value);
        e.currentTarget.reset();
      }

      return (
        <Form inline onSubmit={handleSubmit} className="mb-1 mt-2 mb-md-0 mt-md-0 flex-grow-1 flex-md-grow-0 flex-nowrap">
          <Form.Control 
            type="text" 
            placeholder="username..." 
            className="mr-sm-2 flex-grow-1" 
            ref={searchInput}
          />
          <Button type="submit" variant="outline-success" className="flex-grow-1 text-nowrap ml-2 ml-sm-0">Search Student</Button>
        </Form>
      );
    }}
  </Consumer>
)

export default SearchStudent;