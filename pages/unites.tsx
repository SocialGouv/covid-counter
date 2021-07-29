import { Counter } from "../src/Counter";
import { useData } from "../src/useData";

const Page = () => {
  const data = useData();
  return <Counter data={data} href="/" unit="unites" />;
};

export default Page;
