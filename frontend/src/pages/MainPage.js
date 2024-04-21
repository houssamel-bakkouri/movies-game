import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Quiz from "./Quiz";
import { Box } from "@mui/system";
import Image from "mui-image";
import logo from "../images/hollyquizz_2.png"; // relative path to image
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const gridItem = {
//   elevation={0}
// };

function MainPage() {
  const [launchGame, setLaunchGame] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid
          container
          spacing={5}
          direction="column"
          alignItems="center"
          justifyContent="start"
          style={{ minHeight: "100vh" }}
          sx={{ width: "75%", mt: 0.5 }}
        >
          <Grid
            item
            sx={{
              height: "25%",
              width: "25%",
              p: 0,
            }}
            minheight="20vw"
            minWidth="20vw"
          >
            <Item elevation={0}>
              <Image
                src={logo}
                alt={"Logo HolyQuizz, étoiles représentatn hollywood"}
                fit="cover"
                duration={1500}
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
                showLoading={false}
                errorIcon={true}
                shift={null}
                shiftDuration={500}
              />
            </Item>
          </Grid>
          <Grid
            item
            sx={{
              height: "15%",
              width: "30%",
              p: 0,
            }}
          >
            <Item elevation={0}>
              <Link to={"/GameMode"} style={{ textDecoration: "none" }}>
                <Button variant="contained">Play The Game</Button>
              </Link>
            </Item>
          </Grid>
         
        </Grid>
      </Box>
      
    </>
  );
}

export default MainPage;
