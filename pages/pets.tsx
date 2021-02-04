import axios from "axios";
import Link from "next/link";
import useSWR from "swr";
import { AnimalType } from "./api/AnimalType";

export interface PetsProps {
  animals: AnimalType[] | undefined;
}

const Pets = ({ animals }: PetsProps) => {
  const { data } = useSWR("http://localhost:4001/animals", {
    initialData: animals,
  });

  const renderList = () => {
    if (data) {
      return data.map((animal) => {
        return (
          <div key={animal.name}>
            <Link href={`/${animal.race}/${animal.name}`}>
              <a>
                Visite {animal.name} the {animal.race}
              </a>
            </Link>
          </div>
        );
      });
    } else {
      return <p>Loading . . .</p>;
    }
  };

  return <div>{renderList()}</div>;
};

Pets.getInitialProps = async () => {
  const res = await axios("http://localhost:4001/animals");
  const json: AnimalType[] | undefined = res.data;

  return { animals: json };
};

export default Pets;
