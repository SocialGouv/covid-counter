import { Counter } from "../src/Counter";

const counterStyle = {
  height: "200px",
  display: "inline-block",
  fontSize: "calc(100vw / 7)",
};

const Page = () => (
  <div style={{ textAlign: "center", height: "80vh", marginTop: "10vh" }}>
    <h2>Simulation du nombre de primo-vaccinés</h2>
    <Counter unit="millions" href={`/millions`} style={counterStyle} />
    <Counter unit="milliers" href={`/milliers`} style={counterStyle} />
    <Counter unit="unites" href={`/unites`} style={counterStyle} />
  </div>
);
export default Page;
