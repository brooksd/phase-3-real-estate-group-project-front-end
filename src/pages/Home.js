import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Home() {
  return (
    <div>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label></Form.Label>
          <Form.Control type='text' placeholder='Search' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <h1>
        <em>This is our home page</em>
      </h1>
    </div>
  );
}
export default Home;
