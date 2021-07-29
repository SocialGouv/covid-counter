import { Counter } from "../src/Counter";

const counterStyle = {
  height: "200px",
  display: "inline-block",
  fontSize: "calc(100vw / 6)",
};

const Page = () => (
  <div style={{ textAlign: "center", height: "20vh", marginTop: "10vh" }}>
    <h2>Simulation du nombre de primo-vaccinés</h2>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Counter unit="millions" href={`/millions`} style={counterStyle} />
    <Counter unit="milliers" href={`/milliers`} style={counterStyle} />
    <Counter unit="unites" href={`/unites`} style={counterStyle} />
  </div>
);
export default Page;
