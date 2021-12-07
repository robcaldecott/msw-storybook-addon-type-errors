import { useIntl, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  Typography,
  Skeleton,
} from "@mui/material";
import { Home, Replay } from "@mui/icons-material";
import { useQuery } from "react-query";

/**""
 * Sample component that makes an API call using `react-query`.
 */
function Sample() {
  const intl = useIntl();
  const { isLoading, isSuccess, isError, data, refetch } = useQuery<string[]>(
    "states",
    () =>
      fetch("/api/states").then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="h5">
              <FormattedMessage
                id="title"
                defaultMessage="React Query Sample Page"
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button
              variant="contained"
              color="primary"
              startIcon={<Home />}
              component={Link}
              to="/"
            >
              <FormattedMessage id="home" defaultMessage="Home" />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          {isLoading && (
            <List
              aria-label={intl.formatMessage({
                id: "loading",
                defaultMessage: "Loading...",
              })}
            >
              {[...Array(20).keys()].map((key) => (
                <ListItem key={key}>
                  <Skeleton width={200} />
                </ListItem>
              ))}
            </List>
          )}

          {isSuccess && (
            <List>
              {data!.map((state, index) => (
                <ListItem key={index}>{state}</ListItem>
              ))}
            </List>
          )}

          {isError && (
            <Box padding={2}>
              <Typography color="error" gutterBottom>
                <FormattedMessage
                  id="error"
                  defaultMessage="An error occurred!"
                />
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Replay />}
                onClick={() => refetch()}
              >
                <FormattedMessage id="retry" defaultMessage="Try again" />
              </Button>
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export { Sample };
