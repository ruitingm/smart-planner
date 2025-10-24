import { EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/main");
  };
  return (
    <div id="login" className="flex justify-center items-center">
      <div
        id="login-box"
        className="bg-white shadow-lg rounded-3xl max-w-sm w-full p-8 text-gray mt-10"
      >
        <h2 className="text-3xl text-center font-semibold my-5">Log in</h2>
        <form id="login-form" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="login-email" className="text-xs text-start ps-1">
              Email
            </label>
            <input
              id="login-email"
              type="text"
              placeholder="Email"
              className="w-full rounded border border-gray-300 ps-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 border-gray text-gray"
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="login-password" className="text-xs text-start ps-1">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              className="w-full rounded border border-gray-300 ps-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 border-gray text-gray"
            />
            <EyeOff
              size={18}
              className="absolute text-gray-400 cursor-pointer right-3 top-8"
            />
          </div>
          <button
            className="w-full bg-blue-400 py-2 rounded mt-4 hover:bg-blue-500 text-white text-lg font-semibold"
            onClick={handleLogin}
          >
            Log in
          </button>
          <div className="relative flex items-center">
            <div className="grow border-t border-gray-400"></div>
            <span className="shrink mx-4 text-gray-400">or</span>
            <div className="grow border-t border-gray-400"></div>
          </div>
          <button
            className="w-full py-2 rounded mt-2 hover:bg-gray-100 font-bold border justify-center border-gray-500
          "
          >
            <div className="flex justify-center">
              <FcGoogle size={22} />
              <span className="ms-2 text-gray-600">Log in with Google</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
