import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box } from "@mui/material";
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

// const StyledBanner = styled("img")({
//     width: 100%
// })

const Banner = ({ movies }) => {
  return (
    <Box style={{ width: "65%" }}>
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
          <img
            width="100%"
            alt="Banner"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
