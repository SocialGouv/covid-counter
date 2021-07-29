import { Counter } from "../src/Counter";
import { useData } from "../src/useData";

const counterStyle = {
  height: "200px",
  display: "inline-block",
  fontSize: "calc(100vw / 6)",
};

const Page = () => {
  const data = useData();
  return (
    <div style={{ textAlign: "center", height: "20vh", marginTop: "10vh" }}>
      <h2>Simulation du nombre de primo-vaccinés</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Counter
        data={data}
        unit="millions"
        href={`/millions`}
        style={counterStyle}
      />
      <Counter
        data={data}
        unit="milliers"
        href={`/milliers`}
        style={counterStyle}
      />
      <Counter
        data={data}
        unit="unites"
        href={`/unites`}
        style={counterStyle}
      />
    </div>
  );
};
export default Page;
