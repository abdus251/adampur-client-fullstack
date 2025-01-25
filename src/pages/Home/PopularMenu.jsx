import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";
import PrePrimaryStu from "../../assets/pages/PrePrimary/PrePrimaryStu";
import OneStu from "../../assets/pages/One/OneStu";
import TwoStu from "../../assets/pages/Two/TwoStu";
import ThreeStu from "../../assets/pages/Three/ThreeStu";
import FourStu from "../../assets/pages/PrePrimary/Four/FourStu";
import FiveStu from "../../assets/pages/Five/FiveStu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  const prePrimary = menu.filter((item) => item.category === "prePrimary");

  const classOne = menu.filter((item) => item.category === "classOne");

  const classTwo = menu.filter((item) => item.category === "classTwo");

  const classThree = menu.filter((item) => item.category === "classThree");

  const classFour = menu.filter((item) => item.category === "classFour");

  const classFive = menu.filter((item) => item.category === "classFive");

  return (
    <section className="mb-6 font-noto-sans-bengali">
      <div className="grid md:grid-cols-3 gap-10 sm:pl-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div>
        {/*CLASS 0  */}
        <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
          {" "}
          প্রাক প্রাথমিক শ্রেণির শিক্ষার্থীবৃন্দ
        </h1>
        <p></p>
        <div className="grid md:grid-cols-2 gap-10">
          {prePrimary.map((item) => (
            <PrePrimaryStu key={item._id} item={item}></PrePrimaryStu>
          ))}
        </div>

        {/*CLASS 1  */}
        <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
          {" "}
          প্রথম শ্রেণির শিক্ষার্থীবৃন্দ
        </h1>
        <p></p>
        <div className="grid md:grid-cols-3 gap-10">
          {classOne.map((item) => (
            <OneStu key={item._id} item={item}></OneStu>
          ))}
        </div>

        {/*CLASS 2  */}
        <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
          {" "}
          দ্বিতীয় শ্রেণির শিক্ষার্থীবৃন্দ
        </h1>
        <p></p>
        <div className="grid md:grid-cols-3 gap-10">
          {classTwo.map((item) => (
            <TwoStu key={item._id} item={item}></TwoStu>
          ))}
        </div>

        {/*CLASS 3  */}
        <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
          {" "}
          তৃতীয় শ্রেণির শিক্ষার্থীবৃন্দ
        </h1>
        <p></p>
        <div className="grid md:grid-cols-3 gap-10">
          {classThree.map((item) => (
            <ThreeStu key={item._id} item={item}></ThreeStu>
          ))}
        </div>

        {/*CLASS 4  */}
        <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
          {" "}
          চতুর্থ শ্রেণির শিক্ষার্থীবৃন্দ
        </h1>
        <p></p>
        <div className="grid md:grid-cols-3 gap-10">
          {classFour.map((item) => (
            <FourStu key={item._id} item={item}></FourStu>
          ))}
        </div>

        {/*CLASS 5  */}
        <h1 className="text-center mt-20 mb-5 underline text-3xl text-sky-400">
          {" "}
          ৫ ম শ্রেণির শিক্ষার্থীবৃন্দ
        </h1>
        <p></p>
        <div className="grid md:grid-cols-3 gap-10">
          {classFive.map((item) => (
            <FiveStu key={item._id} item={item}></FiveStu>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
