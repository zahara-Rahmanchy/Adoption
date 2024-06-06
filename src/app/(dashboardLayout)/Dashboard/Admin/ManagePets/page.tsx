"use client";
import {authKey} from "@/constants/authkey";
import {petTableHeads} from "@/constants/petTableHeads";
import {getFromCookiesClient} from "@/utils/local-storage";
import {
  DeleteForeverSharp,
  DeleteSweep,
  EditAttributesRounded,
  EditNoteRounded,
} from "@mui/icons-material";
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
import React, {useEffect, useState} from "react";

const ManagePetPage = () => {
  const [pets, setPets] = useState([]);
  const fetchPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pets`);
    const data = await res.json();
    console.log("pet data: ", data);
    setPets(data.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);
  console.log("pets: ", pets);
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead
          sx={{
            bgcolor: "#f4e0fc",
          }}
        >
          <TableRow>
            {petTableHeads.map((head, key) => (
              <TableCell key={key}>
                {" "}
                <Typography
                  color="primary.main"
                  fontWeight={"bold"}
                  fontSize={"14px"}
                >
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.map((value: any, key: number) => (
            <TableRow key={key}>
              <TableCell
                component="th"
                scope="row"
                // colSpan={2}
                // sx={{bgcolor: "blue", textAlign: "center", mx: "auto"}}
              >
                <Image
                  src={value?.image[0]}
                  alt="pet img"
                  width={200}
                  height={160}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.name as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.species as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.breed as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.age}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.size as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.specialNeeds}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.gender}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.location}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.description as string}
              </TableCell>

              <TableCell component="th" scope="row">
                {value?.adoptedStatus as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.temperament as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.medicalHistory as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.adoptionRequirements as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.createdAt as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.updatedAt as string}
              </TableCell>
              <TableCell component="th" scope="row">
                {value?.adoptionRequests as string}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button
                  sx={{background: "transparent"}}
                  //   component={Link}
                  //   href={`PetPortfolio/${value?.pet?.id}`}
                  size="small"
                >
                  <EditNoteRounded style={{color: "green"}} />
                </Button>
              </TableCell>
              <TableCell component="th" scope="row">
                <Button
                  //   style={{background: "red"}}
                  //   component={Link}
                  //   href={`PetPortfolio/${value?.pet?.id}`}
                  size="small"
                >
                  <DeleteSweep />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManagePetPage;