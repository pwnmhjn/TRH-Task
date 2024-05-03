import { Button } from "@mui/material";

import React from "react";

function Btn({ func, icon, name, style, variant, type }) {
  return (
    <>
      <Button
        variant={variant}
        sx={{ margin: 2 }}
        endIcon={icon}
        onClick={func || null}
        style={style}
        type={type}
      >
        {name}
      </Button>
    </>
  );
}

export default Btn;
