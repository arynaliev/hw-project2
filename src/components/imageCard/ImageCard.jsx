import winter from "../../assets/images/winter.avif";
import fall from "../../assets/images/fall.avif";
import spring from "../../assets/images/spring.avif";
import summer from "../../assets/images/summer.avif";

export const ImageCard = () => {
  return (
    <>
      <img src={winter} alt="Season" width={"50%"} />
      <img src={spring} alt="Season" width={"50%"} />
      <img src={summer} alt="Season" width={"50%"} />
      <img src={fall} alt="Season" width={"50%"} />
    </>
  );
};
