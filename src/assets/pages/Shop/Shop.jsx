import { useState } from "react";
import shopImg from "../../../assets/Other/flat-back-school-sale-horizontal-banner-template-with-supplies_23-2149480702.jpg";
import Cover from "../../../pages/Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFee from "../../../hooks/useFee";
import OrderTab from "../../../pages/Order/OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [fee] = useFee();

  const donate = fee.filter((item) => item.name === "donate");
  const logo = fee.filter((item) => item.name === "logo");
  const scoutFee = fee.filter((item) => item.name === "scoutFee");
  const partyFee = fee.filter((item) => item.name === "partyFee");
  const tourFee = fee.filter((item) => item.name === "tourFee");

  return (
    <div>
      <Helmet>
        <title>আদমপুর | সততা স্টোর</title>
      </Helmet>
      <div className="mt-24">
        {/* Responsive Cover Image */}
        <Cover img={shopImg} title={"কেনাকাটা করুন"} />

        {/* Tabs Section */}
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="mt-10"
        >
          <TabList className="flex flex-wrap justify-center gap-4 text-purple-400">
            <Tab>অনুদান</Tab>
            <Tab>লোগো</Tab>
            <Tab>স্কাউট চাঁদা</Tab>
            <Tab>শিক্ষা সফর</Tab>
            <Tab>ক্লাস পার্টি</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={donate} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={logo} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={scoutFee} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={partyFee} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={tourFee} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
