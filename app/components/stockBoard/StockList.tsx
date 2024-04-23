"use client";

import RegisterStocksButton from "@/app/components/stockBoard/RegisterStocksButton";
import { formatNumToKR } from "@/app/utils/formatNumber";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnMenu,
  GridColumnMenuProps,
} from "@mui/x-data-grid";
// import { Session } from "next-auth";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "종목 이름",
    flex: 1,
  },
  {
    field: "price",
    headerName: "평균 단가",
    flex: 0.9,
    align: "right",
    valueFormatter: (value) => formatNumToKR(value),
  },
  {
    field: "quantity",
    headerName: "수량",
    flex: 0.5,
    align: "right",
    valueFormatter: (value) => formatNumToKR(value),
  },
  {
    field: "investmentAmount",
    headerName: "투자금액",
    flex: 1,
    align: "right",
    valueFormatter: (value) => formatNumToKR(value),
  },
];

function CustomColumnMenu(props: GridColumnMenuProps) {
  return <GridColumnMenu {...props} slots={{ columnMenuColumnsItem: null }} />;
}

type DataRow = {
  name: string;
  price: number;
  quantity: number;
  investmentAmount: number;
};

export default function StockList({
  datarows,
}: {
  datarows: DataRow[] | undefined;
  // session: Session | null;
}) {
  const rows = datarows
    ? datarows.map((datarow, index) => ({ ...datarow, id: index }))
    : [];

  return (
    <>
      <div style={{ width: "100%" }}>
        <DataGrid
          columnHeaderHeight={45}
          rowHeight={45}
          className="myDataGrid"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ columnMenu: CustomColumnMenu }}
          pageSizeOptions={[10]}
        />
      </div>
      <Box display="flex" justifyContent="center" margin={3}>
        <RegisterStocksButton sx={{ width: { xs: "234px", sm: "50%" } }} />
      </Box>
    </>
  );
}
