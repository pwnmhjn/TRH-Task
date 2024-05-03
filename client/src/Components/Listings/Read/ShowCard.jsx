import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ShowCard.css";
import { toast } from "react-toastify";
import useListingAuth from "../../../utils/useListingAuth";
import ListingCard from "./ListingCard";
import { ListingContextProvider } from "../../../Contexts/ListingContext/listingContext";
import ListingBtns from "./ListingBtns";
import Review from "../../Reviews/Reviews";
import ReviewForm from "../../Reviews/ReviewForm";
import useLogin from "../../../utils/useLogin";

export default function ShowCard({ listing }) {
  const OwnerId = useListingAuth();
  const Navigate = useNavigate();

  const delList = () => {
    axios
      .delete(`/api/listings/${listing._id}`)
      .then((res) => {
        toast.error(res.data);
        console.log(res);
        Navigate("/");
      })
      .catch((err) => {
        toast.success(err.response.data);
        Navigate("/login");
      });

    console.log("deleted");
  };

  return (
    <div>
      <ListingContextProvider value={{ delList }}>
        <div className="ShowCard">
          <ListingCard listing={listing} />
          {OwnerId == (listing.owner && listing.owner._id) && (
            <ListingBtns id={listing._id} />
          )}
        </div>
      </ListingContextProvider>
      <div className="Reviews" style={{ marginTop: 15 }}>
        <ReviewForm listing={listing} />
        <div className="ReviewCard">
          {listing.reviews &&
            listing.reviews.map((review) => (
              <div key={review._id}>
                <Review review={review} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
