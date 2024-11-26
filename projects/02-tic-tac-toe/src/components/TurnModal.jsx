import { Square } from "./Square";
export function TurnModal({ turn, TURNS }) {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
    </section>
  );
}
