export interface CounterState {
  data: number,
  title: string
}

const initState : CounterState = {
  data: 42,
  title: 'Redux toolkit rules'
}