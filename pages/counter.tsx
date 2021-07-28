import { Counter } from "../src/Counter";

const Page = () => (
  <div style={{ textAlign: "center", height: "80vh", marginTop: "30vh" }}>
    <Counter
      unit="millions"
      style={{
        height: "200px",
        display: "inline-block",
        fontSize: "calc(100vw / 8)",
      }}
    />
    <Counter
      unit="milliers"
      style={{
        height: "200px",
        display: "inline-block",
        fontSize: "calc(100vw / 8)",
      }}
    />
    <Counter
      unit="unites"
      style={{
        height: "200px",
        display: "inline-block",
        fontSize: "calc(100vw / 8)",
      }}
    />
  </div>
);
export default Page;
