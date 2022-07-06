import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Paper, TextField } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from "../Forms/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import PaginationCard from "../Pagination/Pagination";
import { useNavigate, useLocation } from "react-router-dom";

import ChipInput from "@mui/material/Chip";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  //const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            // className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar
                // className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="search Memories"
                  fullWidth
                  value="TEST"
                  onChange={() => {}}
                />
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <PaginationCard />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
