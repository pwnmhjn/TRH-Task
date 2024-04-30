import { Button } from "@mui/material";

import React from "react";

function Btn({ func, icon, name, style }) {
  return (
    <>
      <Button variant={style} sx={{ margin: 2 }} endIcon={icon} onClick={func}>
        {name}
      </Button>
    </>
  );
}

export default Btn;
