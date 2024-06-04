"use client";
import getEnvVariable from "@/utils/getEnvVariable";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

const tableHeads = ["", "Name", "Adoption Date", "Details"];
const AdoptedPetTable = ({accessToken}: {accessToken: string}) => {
  const [adopteds, setAdopteds] = useState([]);
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  useEffect(() => {
    const adoptedPet = async () => {
      const res = await fetch(`${url}/adopted-pets`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken ? accessToken : "",
        },

        cache: "no-store",
      });
      const petsData = await res.json();
      console.log("petsData: ", petsData);
      setAdopteds(petsData.data);
    };
    adoptedPet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  console.log("adp:", adopteds);
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead
          sx={{
            bgcolor: "#f4e0fc",
          }}
        >
          <TableRow>
            {tableHeads.map((head, key) => (
              <TableCell key={key}>
                {" "}
                <Typography color="primary.main" fontWeight={"bold"}>
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {adopteds.map((value: any, key: number) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                <Image
                  style={{borderRadius: "50%"}}
                  src={value?.pet?.image}
                  alt="pet img"
                  width={100}
                  height={0}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.pet?.name as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.updatedAt as string}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button
                  component={Link}
                  href={`PetPortfolio/${value?.pet?.id}`}
                  size="small"
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdoptedPetTable;
