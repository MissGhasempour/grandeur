import Image from "next/image";
import img from "../../images/650bd400fa78b97c70dc9c4e_Stage-02-_31_-mrg-_1_-min.webp";
import img1 from "../../images/651163699aaff1956e77ee75_tall (5)-p-1080.webp";
import img2 from "../../images/6513b9fd64ea4d50100fcd19_Antonelli-Atelier-_1_-p-1080.webp";
import img3 from '../../images/65116392640fc1667b2db5c1_either-p-1080.webp'
export default function Header() {
  return (
    <div>
      <div className="flex relative left-150 m-2">
        <div className=" border-1 w-30 p-2 text-center">Products</div>
        <div className=" border-1 w-30 p-2 text-center">Brands</div>
        <div className=" border-1 w-30 p-2 text-center">About Us</div>
        <div className=" border-1 w-30 p-2 text-center">Contact Us</div>
      </div>
      <div className="flex">
        <div className="w-150 ">
          <Image src={img} alt="sofa-pic" />
          <Image src={img1} alt="sofa" />
        </div>
        <div className="w-150">
          <Image src={img2} alt="sofa" />
          <Image src={img3} alt="sofa" height={400} />
        </div>
      </div>
    </div>
  );
}
