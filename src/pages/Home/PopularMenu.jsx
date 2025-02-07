import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";


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
    </section>
  );
};

export default PopularMenu;
