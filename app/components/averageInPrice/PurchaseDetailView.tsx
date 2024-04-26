import { Purchase } from "@/app/types/stockTypes";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Container, FormGroup, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ChangeEvent } from "react";
import NumericInput from "../customUI/NumericInput";

type PurchaseDetailViewProps = {
  purchase: Purchase;
  label: string;
  isDeletable?: boolean;
  investmentAmount: number | undefined;
  dispatchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRemove: () => void;
};

const PurchaseDetailView = ({
  label,
  purchase,
  investmentAmount,
  isDeletable,
  dispatchValue,
  handleRemove,
}: PurchaseDetailViewProps) => {
  return (
    <Container
      sx={{
        marginTop: 1,
        padding: 1,
        bgcolor: blue[50],
        width: "auto",
        borderRadius: 2,
      }}
      aria-label="Purchase Entry List"
    >
      <Typography variant="subtitle1">{label}</Typography>
      <FormGroup
        sx={{
          mt: 1.5,
          maxWidth: "md",
        }}
      >
        <Grid container spacing={1} sx={{ alignItems: "center" }}>
          <Grid item xs={7} sm={4}>
            <NumericInput
              name="price"
              value={purchase.price}
              label="가격"
              onBlur={dispatchValue}
            />
          </Grid>
          <Grid item xs={5} sm={2}>
            <NumericInput
              name="quantity"
              value={purchase.quantity}
              label="수량"
              onBlur={dispatchValue}
            />
          </Grid>
          <Grid item xs={isDeletable ? 11 : 12} sm={5.5}>
            <NumericInput
              name="investmentAmount"
              value={investmentAmount || ""}
              label="총합"
              onBlur={() => {}}
            />
          </Grid>
          <Grid item xs={1} sm={0.5}>
            {isDeletable ? (
              <RemoveCircleIcon
                color="warning"
                aria-label="Icon To Remove Additional Purchase Field"
                onClick={handleRemove}
                fontSize="small"
              />
            ) : (
              <div style={{ width: 20 }}></div>
            )}
          </Grid>
        </Grid>
      </FormGroup>
    </Container>
  );
};
export default PurchaseDetailView;