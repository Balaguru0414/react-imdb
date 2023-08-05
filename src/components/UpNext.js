import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-item: baseline;
  padding-left: 20px;

  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const Poster = styled("img")({
  width: 88,
});

const Wrapper = styled(Box)`
  color: #fff;
  display: flex;
  margin-bottom: 25px;
  & > p {
    margin-left: 20px;
    font-weight: 600;
  }
`;

const UpNext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {movies.splice(0, 3).map((movie) => (
        <Wrapper>
          <Poster
            alt="poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

export default UpNext;
