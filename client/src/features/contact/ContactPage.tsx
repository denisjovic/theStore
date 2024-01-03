import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CounterState, decrement, increment } from "./counterReducer";

export default function ContactPage() {
  const dispatch = useDispatch();
  const data = useSelector((state: CounterState) => state.data);
  const title = useSelector((state: CounterState) => state.title);

  return (
    <>
      <Typography variant="h2">{data}</Typography>
      <h2>{title}</h2>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment())}>Incremenet</Button>
        <Button onClick={() => dispatch(decrement())}>Decremenet</Button>
        <Button color="error" onClick={() => dispatch(decrement(5))}>
          Decremenet 5
        </Button>
      </ButtonGroup>
    </>
  );
}
