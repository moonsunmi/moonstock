"use client";
import { StockContext } from "@/contexts/stockContext/StockContext";
import { initialPurchases } from "@/contexts/stockContext/initialPurchases";
import stockReducer from "@/contexts/stockContext/stockReducer";
import { Paper } from "@mui/material";
import { useReducer } from "react";
import AddPurchase from "./AddPurchase";
import AdditionalStocks from "./AdditionalStocks";
import HoldingStock from "./HoldingStock";
import Result from "./Result";
import { Stock } from "types/stockTypes";

const AverageDownInPrice = ({ stockList }: { stockList: Stock[] }) => {
  const [state, dispatch] = useReducer(stockReducer, initialPurchases);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        mt: 10,
      }}
      aria-label="Calculate Average Down In Price"
    >
      <StockContext.Provider value={{ state, dispatch }}>
        <HoldingStock />
        <AdditionalStocks />
        <AddPurchase stockList={stockList} />
        <Result />
      </StockContext.Provider>
    </Paper>
  );
};

export default AverageDownInPrice;