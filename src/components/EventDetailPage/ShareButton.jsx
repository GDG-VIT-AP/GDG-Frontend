import Share from "../../assets/Share.svg";
import { Button } from "../ui/button";

export const ShareButton = () => {
  return (
    <Button>
      <img src={Share} alt={"Share"} />
    </Button>
  );
};
