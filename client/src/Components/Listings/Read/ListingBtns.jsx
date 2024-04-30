import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Btn from "../../../Reusable/Button";
import { ListingContext } from "../../../Contexts/ListingContext/listingContext";
import { useNavigate } from "react-router-dom";

function ListingBtns({ id }) {
  const { delList } = useContext(ListingContext);
  const Navigate = useNavigate();

  const Edit = () => {
    Navigate(`/show/${id}/edit`);
  };

  return (
    <div direction="row" className="btns" spacing={2} m={5}>
      <Btn
        func={delList}
        icon={<DeleteIcon />}
        name="Delete"
        style="contained"
      />
      <Btn func={Edit} icon={<EditIcon />} name="Edit" style="outlined" />
    </div>
  );
}

export default ListingBtns;
