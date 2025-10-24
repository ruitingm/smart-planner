import { EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="signup" className="flex justify-center items-center">
      <div
        id="signup-box"
        className="bg-white shadow-lg rounded-3xl max-w-sm w-full p-8 text-gray mt-10"
      >
        <h2 className="text-3xl text-center font-semibold my-5">Sign up</h2>
        <form id="signiup-form" className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="signup-first-name"
              className="text-xs text-start ps-1"
            >
              First Name
            </label>
            <input
              id="signup-first-name"
              type="text"
              placeholder="First Name"
              className="w-full rounded border border-gray-300 ps-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 border-gray text-gray"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="signup-last-name"
              className="text-xs text-start ps-1"
            >
              Last Name
            </label>
            <input
              id="signup-last-name"
              type="text"
              placeholder="Last Name"
              className="w-full rounded border border-gray-300 ps-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 border-gray text-gray"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="signup-email" className="text-xs text-start ps-1">
              Email
            </label>
            <input
              id="signup-email"
              type="text"
              placeholder="Email"
              className="w-full rounded border border-gray-300 ps-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 border-gray text-gray"
            />
          </div>
          <div className="relative flex flex-col">
            <label
              htmlFor="signup-password"
              className="text-xs text-start ps-1"
            >
              Password
            </label>
            <input
              id="signup-password"
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
            className="w-full bg-blue-400 py-2 rounded mt-4 hover:bg-blue-500 text-white text-lg font-semibold
          "
          >
            Sign up
          </button>
          <div className="text-sm text-center">
            Already have an account? &nbsp;
            <Link to="/login" className="text-blue-500 hover:text-gray-800">
              Log in
            </Link>
          </div>
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
              <span className="ms-2 text-gray-600">Sign up with Google</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
