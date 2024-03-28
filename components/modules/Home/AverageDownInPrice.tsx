import { StockContext } from "@/contexts/stockContext/StockContext";
import { initialStocks } from "@/contexts/stockContext/initialStocks";
import {
  ActionType,
  StockInfoType,
  stockReducer,
} from "@/contexts/stockContext/stockReducer";
import styled from "@emotion/styled";
import { Box, Button, Container, Paper } from "@mui/material";
import { useReducer } from "react";
import Result from "./Result";
import StockInfo from "./StockInfo";

const AverageDownInPrice = () => {
  const [state, dispatch] = useReducer(stockReducer, initialStocks);

  const addStock = () => {
    const newStock: StockInfoType = {
      id: `addedStock${Date.now()}`,
      title: "추가 매수",
      price: "",
      quantity: "",
    };
    dispatch({ type: ActionType.ADD_ROW, payload: newStock });
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      aria-label="Calculate Average Down In Price"
    >
      <StockContext.Provider value={{ state, dispatch }}>
        {state.map((item: StockInfoType) => {
          return <StockInfo key={item.id} stockInfo={item} />;
        })}
        <ButtonWrapper>
          <Button variant="outlined" onClick={addStock}>
            매수 추가
          </Button>
        </ButtonWrapper>
        <Result stocks={state} />
      </StockContext.Provider>
    </Paper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
`;

export default AverageDownInPrice;