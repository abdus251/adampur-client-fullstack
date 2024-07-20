import { useState } from 'react';
import orderCoverImg from '../../../assets/home/building.jpg'
import Cover from '../../Shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ["teacher", 'engineer', 'business', 'artist', 'doctor']
  const {category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const artist = menu.filter(item => item.category === 'artist');
  const doctor = menu.filter(item => item.category === 'doctor');
  const engineer = menu.filter(item => item.category === 'engineer');
  const teacher = menu.filter(item => item.category === 'teacher');
  const business = menu.filter(item => item.category === 'business');
  return (
    <div>
      <Helmet>
                <title>আদমপুর | আমাদের বিদ্যালয়</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"বিদ্যালয়ের মূলভবন"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Teacher</Tab>
          <Tab>Engineer</Tab>
          <Tab>Business</Tab>
          <Tab>Artist</Tab>
          <Tab>Doctor</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={teacher}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={engineer}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={business}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={artist}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={doctor}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Order;