import Link from "next/link";

const style = {
  height: "80vh",
  margin: "20vh",
  fontSize: "2rem",
  alignItems: "center",
  justifyContent: "center",
};

const Page = () => {
  return (
    <div style={style}>
      <li>
        <Link href={`${process.env.PUBLIC_URL}/counter`}>Compteur Global</Link>
      </li>
      <li>
        <Link href={`${process.env.PUBLIC_URL}/millions`}>1) millions</Link>
      </li>
      <li>
        <Link href={`${process.env.PUBLIC_URL}/milliers`}>2) milliers</Link>
      </li>
      <li>
        <Link href={`${process.env.PUBLIC_URL}/unites`}>3) unités</Link>
      </li>
    </div>
  );
};

export default Page;
