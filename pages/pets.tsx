import axios from "axios";
import Link from "next/link";
import useSWR from "swr";
import { AnimalType } from "./api/AnimalType";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export interface PetsProps {
  animals: AnimalType[] | undefined;
}

const Pets = ({ animals }: PetsProps) => {
  const { data } = useSWR("http://localhost:3000/api/animals", {
    initialData: animals,
  });

  const renderBody = () => {
    if (data) {
      return data.map((animal) => {
        return (
          <TableRow key={animal.id}>
            <TableCell>{animal.id}</TableCell>
            <TableCell>{animal.race}</TableCell>
            <TableCell key={animal.name}>
              <Link href={`/animal/${animal.id}`}>
                <a>{animal.name}</a>
              </Link>
            </TableCell>
          </TableRow>
        );
      });
    } else {
      return <p>Loading . . .</p>;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Race</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderBody()}</TableBody>
      </Table>
    </TableContainer>
  );
};

Pets.getInitialProps = async () => {
  const res = await axios("http://localhost:3000/api/animals");
  const json: AnimalType[] | undefined = res.data;

  return { animals: json };
};

export default Pets;
