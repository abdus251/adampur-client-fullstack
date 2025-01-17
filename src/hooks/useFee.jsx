import { useEffect, useState } from "react";

const useFee = () => {
  const [fee, setfee] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://https://adampur-server-fullstack-4.onrender.com/fee")
      .then((res) => res.json())
      .then((data) => {
        setfee(data);
        setLoading(false);
      });
  }, []);
  return [fee, loading]
};
export default useFee;
