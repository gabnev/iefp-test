import Link from "next/link";
import axios from "axios";
import { AnimalType } from "../api/AnimalType";
import { NextPageContext } from "next";

export interface AnimalProps {
  animal: AnimalType[] | undefined;
}

const Animal = ({ animal }: AnimalProps) => {
  return (
    <div>
      {animal && (
        <p>
          {animal[0].name} the {animal[0].race}
        </p>
      )}

      <Link href="/pets">Back to list</Link>
    </div>
  );
};

interface NextPageContextType extends NextPageContext {
  query: {
    race: string;
    name: string;
  };
}

Animal.getInitialProps = async ({ query }: NextPageContextType) => {
  const res = await axios(
    "http://localhost:4001/animals?race=" + query.race + "&name=" + query.name
  );
  const json: AnimalType[] | undefined = res.data;
  return { animal: json };
};

export default Animal;
