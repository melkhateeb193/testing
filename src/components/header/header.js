import React, { useState, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../favouratesactions/langcontext';

function HeaderNav({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const favorites = useSelector((state) => state.favorites);
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
      setSearchQuery('');
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <Navbar bg="dark" expand="lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container fluid>
        <Link to="/" className="navbar-brand text-danger">
          Movie's Geeks
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link to="/" className="nav-link text-danger">
              Home
            </Link>

            <Link to="/favorites" className="nav-link text-danger">
              Favorites ({favorites.length})
            </Link>

            <Link to="/" className="nav-link text-danger">
              Newrelease
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button variant="outline-danger" type="submit">
              Search
            </Button>
          </Form>
          <div className="d-flex">
            <Button
              variant="link"
              className={`text-danger ${language === 'en' ? 'fw-bold' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              {language === 'ar' ? 'العربية' : 'English'}
            </Button>
            <Button
              variant="link"
              className={`text-danger ${language === 'ar' ? 'fw-bold' : ''}`}
              onClick={() => handleLanguageChange('ar')}
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
