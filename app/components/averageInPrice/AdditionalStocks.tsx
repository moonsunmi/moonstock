import { useStockContext } from "@/app/context/stockContext/StockContext";
import { Purchase, PurchaseType } from "@/app/types/stockTypes";
import PurchaseInfo from "./PurchaseInfo";

const AdditionalStocks = () => {
  const {
    state: { additions },
  } = useStockContext();

  return (
    <>
      {additions.map((purchase: Purchase) => {
        return (
          <PurchaseInfo
            key={purchase.id}
            label="추가 매수"
            purchase={purchase}
            purchaseType={PurchaseType.ADDITIONS}
          />
        );
      })}
    </>
  );
};

export default AdditionalStocks;