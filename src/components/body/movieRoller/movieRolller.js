import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart } from "react-icons/ai";

function MovieRoller({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    loadMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm]);

  const loadMovies = () => {
    let url = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${searchTerm}&page=${currentPage}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${currentPage}`;

    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} className="mb-4">
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <Card.Body className="d-flex flex-column">
                <div className='d-flex justify-content-between'>
                  <Card.Title>MovieName: {movie.title}</Card.Title>
                  <Link>
                    <AiOutlineHeart size={24} color="red" />
                  </Link>
                </div>
                <Link to={`/MovieDetails/${movie.id}`}>
                  <Button variant="danger">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="secondary" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </Button>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" onClick={handleNextPage}>
            Next Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieRoller;
