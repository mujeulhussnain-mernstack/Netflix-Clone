import axios from "axios";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "../store/user.slice";
const LoginOrSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (isLogin) {
      // Login logic
      const user = {
        email: email.current?.value.trim(),
        password: password.current?.value.trim(),
      };
      try {
        const res = await axios.post(
          "http://localhost:2020/api/v1/user/login",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          const { fullName, email } = res.data;
          dispatch(setAuthUser({ fullName, email }));
          navigate("/browse");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
      email.current.value = "";
      password.current.value = "";
    } else {
      if (fullname.current?.value.trim() !== "") {
        let fullName = fullname.current?.value;
        fullName = fullName[0].toUpperCase() + fullName.slice(1).toLowerCase();
        // Signup logic
        const user = {
          fullName: fullName.trim(),
          email: email.current?.value.trim(),
          password: password.current?.value.trim(),
        };
        try {
          const res = await axios.post(
            "http://localhost:2020/api/v1/user/register",
            user,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          if (res.data.success) {
            toast.success(res.data.message);
            setIsLogin(!isLogin);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }

      fullname.current.value = "";
      email.current.value = "";
      password.current.value = "";
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw')] bg-center bg-cover bg-no-repeat bg-fixed">
      <div className="w-96 px-10 py-3 bg-black rounded-lg opacity-85">
        <form onSubmit={handleSubmit}>
          <h2 className="text-white text-center text-3xl poppins font-bold my-2.5">
            {isLogin ? "Login" : "Signup"}
          </h2>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-10 border border-gray-300  rounded-sm  focus:outline-none pl-2 text-white my-1.5"
              ref={fullname}
            />
          )}
          <input
            type="email"
            placeholder="example@gamil.com"
            className="w-full h-10 border border-gray-300  rounded-sm  focus:outline-none pl-2 text-white my-1.5"
            ref={email}
          />
          <input
            type="password"
            placeholder="example"
            className="w-full h-10 border border-gray-300  rounded-sm  focus:outline-none pl-2 text-white my-1.5"
            ref={password}
          />
          <button
            type="subit"
            className="block bg-red-600 rounded-sm w-full text-white poppins font-medium h-10 cursor-pointer my-1.5"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="text-sm text-white font-medium mt-1.5">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginOrSignup;
