"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import users from '@/app/data/users.json';


export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[isDarkMode, setIsDarkMode] = useState(false);
  const[isLanguage, setIsLanguage] = useState(false);
  const[isProfile, setIsProfile] = useState(false);
  const[isDark, setIsDark] = useState(false);
  const[isLight, setIsLight] = useState(false);

  const activeUser = users.find(user => user.status === "active");

//   localStorage.setItem('username', activeUser.username);
  localStorage.setItem('darkMode', activeUser.darkMode);
//   localStorage.setItem('language', activeUser.language);
  localStorage.setItem('name', activeUser.name);
  localStorage.setItem('email', activeUser.email);
    localStorage.setItem('phone', activeUser.phone);
    localStorage.setItem('location', activeUser.location);



    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const location = localStorage.getItem('location');
    var darkMode = localStorage.getItem('darkMode');
//   const username = localStorage.getItem('username');

const myProfile = () => {
    window.location.href = './profile';
    }

  const projectPage = () => {
    window.location.href = './projects';
  }

  const chatsPage = () => {
    window.location.href = './chats';
  }

  const newsPage = () => {
    window.location.href = './news';
  }
  
  const mapsPage = () => {
    window.location.href = './maps';
  }

  const Logout = () => {
    window.location.href = './authorization';
  }

  const DarkmodeOn = () => {
    setIsDark(true);
    setIsLight(false);
    document.body.classList.add('dark');
    darkMode = true;
  }
  
  const LightModeOn = () => {
    setIsLight(true);
    setIsDark(false);
    document.body.classList.remove('dark');
    darkMode = false;
  }

  if (darkMode === "true") {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const ModeDropdown = () => {
    setIsDarkMode(!isDarkMode);
  }
  const LanguageDropdown = () => {
    setIsLanguage(!isLanguage);
  }
  const ProfileDropdown = () => {
    setIsProfile(!isProfile);
  }
  return (
    // <div>
    //   <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
    //     <h1 className="font-sans font-semibold text-2xl">Geo-app</h1>
    //     <ul className="flex">
    //       <li className="mr-6">
    //         <a href="/">
    //           <Image src="/home.png" alt="home" width={30} height={30} />
    //         </a>
    //       </li>
    //       <li className="mr-6">
    //         <a href="/page">
    //           <Image src="/pages.png" alt="page" width={30} height={30} />
    //         </a>
    //       </li>
    //       <li className="mr-6">
    //         <a href="/about">
    //           <Image src="/Setting.png" alt="about" width={30} height={30} />
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="flex justify-center mt-4 h-screen">
    //     <h1 className="font-sans font-semibold text-4xl">Home</h1>
    // {'flex ${isDarkMode ? 'dark' : 'bg-gray-800'}'}
    // ${isDark ? 'bg-gray-800' : 'bg-white'}, ${isLight ? 'bg-white' : 'bg-gray-800'}

    //   </div> 
    // </div>
    <div className={`flex ${isLight ? 'bg-white' : 'bg-gray-800'}, ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}>
      <nav className="w-1/5 h-screen bg-gray-800 text-white p-4">
        <h1 className="font-sans m-5 font-semibold text-2xl">Geo-app</h1>
        <ul className="mt-10">
          <li className="mb-4">
            <button onClick={mapsPage} className="w-full text-left px-4 py-2 bg-gray-700 rounded">Map</button>
          </li>
          <li className="mb-4">
            <button onClick={projectPage} className="w-full text-left px-4 py-2 bg-gray-700 rounded">Projects</button>
          </li>
          <li className="mb-4">
            <button onClick={chatsPage} className="w-full text-left px-4 py-2 bg-gray-700 rounded">Chats</button>
          </li>
          <li className="mb-4">
            <button onClick={newsPage} className="w-full text-left px-4 py-2 bg-gray-700 rounded">News</button>
          </li>
        </ul>
        <div className="absolute bottom-5">
          <p className="">Made by abdu1axad</p>
          <p className="mt-4">© 2025 Geo-app</p>
        </div>
      </nav>
      <div className="flex-1">
        <nav className="flex items-center justify-end flex-wrap bg-gray-900 p-6">
          <ul className="flex">
            <li className="mr-6">
              <a href="/">
                <Image src="/Home.png" alt="home" width={30} height={30} />
              </a>
            </li>
            <li className="relative mr-6">
              <button 
                onClick={toggleDropdown}
                
               className="flex items-center">
                <Image src="/Setting.png" alt="setting" width={30} height={30} />
              </button>
              {dropdownOpen && (
                <ul
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute right-0 mt-2 w-48 bg-slate-700 border rounded shadow-lg">
                  <li
                    onMouseEnter={() => setIsDarkMode(true)}
                    onMouseLeave={() => setIsDarkMode(false)} 
                  className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Dark Mode</li>
                  {isDarkMode && (
                    <ul 
                    onMouseEnter={() => setIsDarkMode(true)}
                    onMouseLeave={() => setIsDarkMode(false)} 
                    className="absolute right-full top-0 w-48 bg-slate-700 border rounded shadow-lg">
                      <li onClick={DarkmodeOn} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">On</li>
                      <li onClick={LightModeOn} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Off</li>
                    </ul>
                  )}
                  <li 
                    onMouseEnter={() => setIsLanguage(true)}
                    onMouseLeave={() => setIsLanguage(false)} 
                  className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Language</li>
                  {isLanguage && (
                    <ul 
                    onMouseEnter={() => setIsLanguage(true)}
                    onMouseLeave={() => setIsLanguage(false)} 
                    className="absolute right-full top-1/3 w-48 bg-slate-700 border rounded shadow-lg">
                      <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">English</li>
                      <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Russian</li>
                      <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Uzbek</li>
                    </ul>
                  )}
                  <li 
                    onMouseEnter={() => setIsProfile(true)}
                    onMouseLeave={() => setIsProfile(false)}
                  className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Profile</li>
                  {isProfile && (
                    <ul
                    onMouseEnter={() => setIsProfile(true)}
                    onMouseLeave={() => setIsProfile(false)} 
                    className="absolute right-full top-3/4 w-48 bg-slate-700 border rounded shadow-lg">
                      <li onClick={myProfile} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">My Profile</li>
                      <li onClick={Logout} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Log Out</li>
                    </ul>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="grid justify-center mt-4">
          <h1 className="font-sans font-semibold text-4xl text-center">Profile</h1>
          <div className="grid w-11/12 m-12 p-7 rounded-xl text-white bg-slate-500">
              <p className="font-sans font-semibold text-2xl">My name: {name}</p>
              <p className="font-sans mt-2">My E-mail: {email}</p>
                <p className="font-sans mt-2">My Phone: {phone}</p>
                <p className="font-sans mt-2">My Location: {location}</p>
          </div>
        </div>
      </div>
    </div>

  );
}
