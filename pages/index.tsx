import Link from "next/link";

const style = {
  height: "80vh",
  margin: "20vh",
  fontSize: "1.5rem",
  alignItems: "center",
  justifyContent: "center",
};

const Page = () => {
  return (
    <div style={style}>
      <li>
        <Link href={`/millions`}>1) millions</Link>
      </li>
      <li>
        <Link href={`/milliers`}>2) milliers</Link>
      </li>
      <li>
        <Link href={`/unites`}>3) unités</Link>
      </li>
    </div>
  );
};

export default Page;
