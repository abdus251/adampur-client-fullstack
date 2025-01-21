import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }

      axiosPublic.post('/users', userInfo)
      .then(res =>{
        console.log(res.data);
        navigate('/')
      })
    });
  };

  return (
    <div className="items-center mx-16 mt-4">
      <div className="divider"></div>
      <div className="">
        <button onClick={handleGoogleSignIn} className="btn ml-8 mb-4 bg-sky-400">
          <FaGoogle className="mr-4 text-white"></FaGoogle>
          <span className="text-white">Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
