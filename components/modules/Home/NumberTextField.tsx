import { TextField, TextFieldProps } from "@mui/material";

type Props = {
  scroll?: boolean;
} & TextFieldProps;

const NumberTextField = ({ scroll = false, ...rest }: Props) => {
  return (
    <>
      <TextField
        size="small"
        InputProps={{
          sx: {
            "& input": {
              textAlign: "right",
            },
            "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
              scroll
                ? {}
                : {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
          },
        }}
        {...rest}
      />
    </>
  );
};

export default NumberTextField;
