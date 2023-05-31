// MovieRoller.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToFavorites, removeFromFavorites } from "../../favouratesactions/favoritesActions";
import { fetchMovies } from "../../favouratesactions/favoritesActions";

function MovieRoller({ searchTerm }) {
  const [currentPage, setCurrentPage] = useState(1);
  const movies = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    dispatch(fetchMovies(searchTerm, currentPage));
  }, [currentPage, searchTerm, dispatch]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const isFavorite = (movie) => {
    return favorites.some((favMovie) => favMovie.id === movie.id);
  };

  const handleAddToFavorites = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} className="mb-4">
            <Card className="h-100" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <Card.Title>MovieName: {movie.title}</Card.Title>
                  <Link onClick={() => handleAddToFavorites(movie)}>
                    {isFavorite(movie) ? (
                      <AiFillHeart size={24} color="red" className="filled" />
                    ) : (
                      <AiOutlineHeart
                        size={24}
                        color="red"
                        className="bordered"
                      />
                    )}
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
          <Button
            variant="secondary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
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
