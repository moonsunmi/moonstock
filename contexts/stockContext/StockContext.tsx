import { Dispatch, createContext, useContext } from "react";
import { StockAction, StockInfo } from "./stockReducer";

interface StockContext {
  state: StockInfo[];
  dispatch: Dispatch<StockAction>;
}

const StockContext = createContext<StockContext | null>(null);

const useStockContext = () => {
  const value = useContext(StockContext);
  if (value === null) {
    throw new Error(
      "useStockContext should be used within StockContext.Provider"
    );
  }
  return value;
};

export { StockContext, useStockContext };
