import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import "/styles/global.css";
import { useState } from "react";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [deleteName, setDeleteName] = useState(false);
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          deleteName={deleteName}
          onDeleteName={setDeleteName}
        />
      </SWRConfig>
    </>

  );
}