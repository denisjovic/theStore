import {
  Typography,
  Container,
  ButtonGroup,
  Button,
  Alert,
  AlertTitle,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import agent from "../../api/agent";
import { useState } from "react";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("this should not work"))
      .catch((error) => setValidationErrors(error));
  }
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
        <Button variant="contained" onClick={getValidationError}>
          Test Validation
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
