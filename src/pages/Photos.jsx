import { useContext } from "react";
import { Context } from "../components/Context";
import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className={getClass(index)} />
  ));

  return <main className="photos">{imageElements}</main>;
}
export default Photos;
