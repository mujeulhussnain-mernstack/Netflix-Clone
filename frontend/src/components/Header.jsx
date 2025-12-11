import axios from "axios";
import { toast } from "react-hot-toast";
import { NETFLIX_LOGO } from "../utils/constants";
import { setAuthUser } from "../store/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { IoChevronDownCircleOutline } from "react-icons/io5";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.authUser);
  const logoutHandler = async (e) => {
    e.preventDefault();
    // Dispatch logout action here
    try {
      const res = await axios.get("https://netflix-clone-bkhd.onrender.com/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setAuthUser(null));
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="fixed to-0 left-0 w-full flex justify-between items-center bg-gradient-to-b from-black lg:px-10 z-50">
      <div className="">
        <img src={NETFLIX_LOGO} alt="logo" className="w-40" />
      </div>
      {user && (
        <div className="flex gap-3 justify-center items-center poppins">
          <div className="flex gap-1 justify-center items-center text-white">
            <IoChevronDownCircleOutline size={35} className="text-white" />
            <h2>{user?.fullName}</h2>
          </div>
          <form onSubmit={logoutHandler}>
            <button
              type="submit"
              className="bg-red-600 px-2.5 py-2 text-white rounded-sm font-medium cursor-pointer"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
