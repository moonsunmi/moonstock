import { StockInfoType } from "@/contexts/stockContext/stockReducer";
import { List, ListItemText } from "@mui/material";
import { formatNumberToKorean } from "utils/formatNumberToKorean";

const Result = ({ stocks }: { stocks: StockInfoType[] }) => {
  function calculateWholeStocks() {
    let quantity = 0;
    let investment = 0;
    stocks.map((item) => {
      quantity += item.price === "" ? 0 : Number(item.quantity);
      investment += Number(item.price) * Number(item.quantity);
    });
    let price: number | "" = quantity === 0 ? "" : investment / quantity;
    return { price, quantity, investment };
  }

  const { price, quantity, investment } = calculateWholeStocks();

  return (
    <List
      sx={{
        padding: "10px",
        borderTop: 2,
        borderColor: "darkslateblue",
      }}
      aria-label="Investment Report"
    >
      <ListItemText>
        평균 단가: {price === "" ? "-" : formatNumberToKorean(price.toFixed(2))}
      </ListItemText>
      <ListItemText>총 개수: {formatNumberToKorean(quantity)}</ListItemText>
      <ListItemText>
        총 투자 금액: {formatNumberToKorean(investment)}
      </ListItemText>
    </List>
  );
};

export default Result;
