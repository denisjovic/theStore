import { Typography, Container, ButtonGroup, Button } from "@mui/material";
import agent from "../../api/agent";

export default function AboutPage() {
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Testing Errors
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) =>
              console.error(error)
            )
          }
        >
          Test 400
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) =>
              console.error(error)
            )
          }
        >
          Test 401
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) =>
              console.error(error)
            )
          }
        >
          Test 404
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) =>
              console.error(error)
            )
          }
        >
          Test 500
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.getValidationError().catch((error) =>
              console.error(error)
            )
          }
        >
          Test Validation
        </Button>
      </ButtonGroup>
    </Container>
  );
}
