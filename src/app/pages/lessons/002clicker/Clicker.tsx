import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./style.css";
import Store from "../../../shared/components/store/Store";
import { ClickerProvider, ClickerContext } from "../../../shared/context/ClickerContext";

export const Clicker = () => {
  const { clicks, addClick } = useContext(ClickerContext);

  return (
    <>
      <ClickerProvider>
        <h1 className="main-title">Clicker</h1>
        <section className="grid-container">
          <div>
            <h2>Clicks: {clicks}</h2>
          </div>
          <div className="center">
            <Button variant="contained" onClick={addClick}>
              Click
            </Button>
          </div>
          <div className="right">
            <h2>Store</h2>
            <Store />
          </div>
        </section>
      </ClickerProvider>
    </>
  );
};
