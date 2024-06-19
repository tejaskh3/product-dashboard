import React from "react";
import LogoutButton from "./LogoutButton";
import { DEFAULT_IMAGE_URL } from "../constants";

interface HeaderProps {
  userName: string;
  userEmail: string;
  userPicture: string;
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  userEmail,
  userPicture = DEFAULT_IMAGE_URL,

  onSearch,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gray-800 text-white p-4 rounded-md md:flex md:justify-between md:items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src={userPicture}
            alt="User"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">{userName}</h1>
            <p className="text-sm">Logged in as: {userEmail}</p>
          </div>
        </div>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search by name, money, or product..."
            onChange={handleSearchChange}
            className="border p-2 rounded-md w-full md:w-96 focus:outline-none text-black"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute right-3 top-3 text-gray-400 hidden md:block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 2a6 6 0 014.16 10.16l5.64 5.64a1 1 0 01-1.41 1.41l-5.64-5.64A6 6 0 118 2zm0 2a4 4 0 100 8 4 4 0 000-8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <LogoutButton />
    </header>
  );
};

export default Header;
