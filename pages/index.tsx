import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import useSWR from "swr";
import React from "react";
import { BigTitle } from "components/BigTitle";
import helo from "public/helo.jpg";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>home page</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BigTitle>Helo</BigTitle>
        <Image src={helo} alt="helo" />
      </div>
    </React.Fragment>
  );
};

export default Home;
