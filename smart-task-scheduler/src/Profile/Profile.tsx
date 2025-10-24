import dayjs from "dayjs";
import { Search, BellDot } from "lucide-react";
export default function Profile() {
  const userFirstName = "Elly";
  const userLastName = "Ma";
  const userEmail = "rmruitingma@gmail.com";
  const userNickName = "elly";
  const profilePicture = "/public/images/ran_profile.jpg";
  const today = dayjs().format("dddd, MMMM D, YYYY");
  const hasNickname = (nickname: string) => {
    return (
      nickname.trim() === "" || nickname === undefined || nickname === null
    );
  };
  return (
    <div id="profile" className="flex flex-col px-6 mt-5 ">
      <header
        id="profile-header"
        className="flex items-center justify-between mb-5"
      >
        <div>
          <h1 className="text-xl text-gray-500">Welcome, {userFirstName}</h1>
          <h3 className="text-gray-500">{today}</h3>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Task ..."
              className="bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-600 py-2 pl-10 pr-4"
            />
            <Search size={18} className="absolute top-3 left-2 text-gray-300" />
          </div>
          <BellDot size={20} className="text-gray-500" />
          <img
            src={profilePicture}
            alt="Profile"
            className="w-11 h-11 rounded-sm border-white border-2 object-cover text-sm"
          />
        </div>
      </header>
      <main
        id="profile-box"
        className="rounded-lg bg-white pt-8 pb-15 px-5 shadow-lg"
      >
        <div id="profile-content" className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6 items-center">
              <img
                src={profilePicture}
                alt="Profile"
                className="rounded-full h-20 w-20 shadow-sm"
              />
              <div>
                <div className="text-xl text-gray-700 font-semibold">
                  {userFirstName} {userLastName}
                </div>
                <div className="text-sm text-gray-600">{userEmail}</div>
              </div>
            </div>
            <button
              id="edit-profile-btn"
              className="text-lg text-white bg-blue-400 rounded-sm px-5 py-1 hover:bg-blue-500"
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col text-gray-600 text-m space-y-5">
            <div className="flex space-x-10">
              <div className="flex flex-col flex-1">
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  value={`${userFirstName} ${userLastName}`}
                  className="px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="nickname">Nickname</label>
                <input
                  id="nickname"
                  type="text"
                  value={hasNickname(userNickName) ? userNickName : ""}
                  className="px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 "
                />
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="flex flex-col flex-1">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  className="px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="timezone">Time Zone</label>
                <input
                  id="timezone"
                  type="text"
                  className="px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
