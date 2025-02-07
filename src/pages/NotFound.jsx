import { Link } from "react-router-dom";
import notImg from '../assets/contact/404.gif'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <img src={notImg} alt="" />
      <p className="text-lg mt-4">আপনি যা খুঁজছেন, তা নেই!</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md">
        হোমে ফির যান
      </Link>
    </div>
  );
};

export default NotFound;
