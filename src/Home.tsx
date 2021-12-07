import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardActions, Grid } from "@mui/material";

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={<FormattedMessage defaultMessage="Welcome to React" />}
            subheader={<FormattedMessage defaultMessage="With MUI5" />}
          />
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/sample"
            >
              <FormattedMessage defaultMessage="API Sample" />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export { Home };
