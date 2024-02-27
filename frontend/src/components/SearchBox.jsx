import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// import './searchbox.css';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    // <Form onSubmit={submitHandler} className='d-flex mb-3 search-form'>
    //   <Form.Control
    //     type='text'
    //     name='q'
    //     onChange={(e) => setKeyword(e.target.value)}
    //     value={keyword}
    //     placeholder='Search Products...'
    //     className='mr-sm-2 search-input'
    //     style={{ minWidth: '300px' }}
    //   ></Form.Control>
    //   <Button type='submit' variant='warning' className='search-button'>
    //     <FaSearch />
    //   </Button>
    // </Form>
    <Form className='d-flex'>
      <Form.Control
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
      />
      <Button variant='warning' className='search-button'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
