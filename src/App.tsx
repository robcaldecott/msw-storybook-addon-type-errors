import { Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Home } from "./Home";
import { Sample } from "./Sample";

function App() {
  return (
    <Container component="main" sx={{ padding: 2 }}>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/sample">
        <Sample />
      </Route>
    </Container>
  );
}

export { App };
