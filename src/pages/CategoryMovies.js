import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { Box, Divider, Typography, styled } from "@mui/material";
import { categoryMovies } from "../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  moviesType,
} from "../constants/constant";
import MoviesList from "../components/MoviesList";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")`
  width: 100%;
  height: 520px;
`;

const Container = styled(Box)`
  background: #f5f5f5;
  padding: 10px;
`;

const CategoryMovies = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoryMovies(API_URL);
      setMovies(response.results);
    };
    let API_URL;
    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
    }

    getData(API_URL);
  }, [search]);
  return (
    <>
      <Header />
      <Box style={{ padding: "0 115px" }}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          slidesToslide={1}
        >
          {movies.map((movie) => (
            <>
              <StyledBanner
                alt="Banner"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            </>
          ))}
        </Carousel>
        <Container>
          <Typography variant="h6">IMDb Charts</Typography>
          <Typography variant="h4">
            IMDb {moviesType[search.split("=")[1]]} Movies
          </Typography>
          <Typography style={{ fontSize: 14, margin: 5 }}>
            IMDb Top {movies.length} as rated by regular IMDb voters
          </Typography>
          <Divider />
          <MoviesList movies={movies} />
        </Container>
      </Box>
    </>
  );
};

export default CategoryMovies;
