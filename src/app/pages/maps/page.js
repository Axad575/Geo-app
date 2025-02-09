"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import users from '@/app/data/users.json';


export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const[selectedCountry, setSelectedCountry]= useState("");
  const[regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const[selectedRegion, setSelectedRegion]= useState("");
  const[cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const[isDarkMode, setIsDarkMode] = useState(false);
  const[isLanguage, setIsLanguage] = useState(false);
  const[isProfile, setIsProfile] = useState(false);
  const[isDark, setIsDark] = useState(false);
  const[isLight, setIsLight] = useState(false);
  // const region = {value: ""};
  const user = users;





  // const activeUser = users.find(user => user.status === "active");

  // localStorage.setItem('username', activeUser.username);

  // const username = localStorage.getItem('username');
  const myProfile = () => {
    window.location.href = './pages/profile';
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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryDropdownOpen(false);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setRegionDropdownOpen(false);
  };

  const DarkmodeOn = () => {
    setIsDark(true);
    setIsLight(false);
    document.body.classList.add('dark');
    user.darkMode = true;
  }
  
  const LightModeOn = () => {
    setIsLight(true);
    setIsDark(false);
    document.body.classList.remove('dark');
    user.darkMode = false;
  }

  if (user.darkMode === true) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const contryDropdown = () => {
    setCountryDropdownOpen(!countryDropdownOpen);
  }

  const regionDropdown = () => {
    setRegionDropdownOpen(!regionDropdownOpen);
  }

  const cityDropdown = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  }

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
          {/* <h1 className="font-sans font-semibold text-4xl text-center">Maps</h1>
          <div className="grid  m-12 p-7 rounded-xl">
            <div className="flex justify-center">
              <div className="p-5">
                <h1 className="font-sans font-semibold text-2xl">Country:</h1>
                <input
                  onClick={contryDropdown}
                  className="w-80 p-2 border rounded"
                  placeholder="Write here"
                  value={selectedCountry}
                  readOnly
                />
                {countryDropdownOpen && (
                  <ul
                  onMouseEnter={() => setCountryDropdownOpen(true)}
                  onMouseLeave={() => setCountryDropdownOpen(false)}
                  className="absolute w-1/5 bg-slate-700 border rounded shadow-lg">
                    <li onClick={() => handleCountrySelect('Uzbekistan')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Uzbekistan</li>
                    <li onClick={() => handleCountrySelect('Russia')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Russia</li>
                    <li onClick={() => handleCountrySelect('USA')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">USA</li>
                  </ul>
                )}
              </div>
              <div className="p-5">
                <h1 className="font-sans font-semibold text-2xl">Region:</h1>
                <input
                  onClick={regionDropdown}
                  className="w-80 p-2 border rounded"
                  placeholder="Write here"
                  value={selectedRegion}
                  readOnly
                />
                {regionDropdownOpen && (
                  <ul
                  onMouseEnter={() => setRegionDropdownOpen(true)}
                  onMouseLeave={() => setRegionDropdownOpen(false)}
                  className="absolute w-1/5 bg-slate-700 border rounded shadow-lg">
                    <li onClick={() => handleRegionSelect('Tashkent')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Tashkent</li>
                    <li onClick={() => handleRegionSelect('Andijan Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Andijan Region</li>
                    <li onClick={() => handleRegionSelect('Bukhara Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Bukhara Region</li>
                    <li onClick={() => handleRegionSelect('Fergana Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Fergana Region</li>
                    <li onClick={() => handleRegionSelect('Jizzakh Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Jizzakh Region</li>
                    <li onClick={() => handleRegionSelect('Namangan Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Namangan Region</li>
                    <li onClick={() => handleRegionSelect('Navoiy Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Navoiy Region</li>
                    <li onClick={() => handleRegionSelect('Qashqadaryo Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Qashqadaryo Region</li>
                    <li onClick={() => handleRegionSelect('Samarkand Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Samarkand Region</li>
                    <li onClick={() => handleRegionSelect('Surkhandarya Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Surkhandarya Region</li>
                    <li onClick={() => handleRegionSelect('Syrdarya Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Syrdarya Region</li>
                    <li onClick={() => handleRegionSelect('Tashkent Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Tashkent Region</li>
                    <li onClick={() => handleRegionSelect('Xorazm Region')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Xorazm Region</li>
                    <li onClick={() => handleRegionSelect('Republic of Karakalpakstan')} className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Republic of Karakalpakstan</li>
                  </ul>
                )}
              </div>
              <div className="p-5">
                <h1 className="font-sans font-semibold text-2xl">City:</h1>
                <input
                  onClick={cityDropdown}
                  className="w-80 p-2 border rounded"
                  placeholder="Write here"
                />
                {cityDropdownOpen && (
                  <ul
                  onMouseEnter={() => setCityDropdownOpen(true)}
                  onMouseLeave={() => setCityDropdownOpen(false)}
                  className="absolute w-1/5 bg-slate-700 border rounded shadow-lg">
                    <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Uzbekistan</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">Russia</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">USA</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">USA</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">USA</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-200 hover:text-black">USA</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div id="map" className="w-1/2 h-1/2">
          </div> */}
          <h1 className="font-sans font-semibold text-4xl text-center">Maps</h1>
          <div className="grid  m-12 p-7 rounded-xl">
              <h1 className="text-center text-3xl font-bold">Maps Page is developing... </h1>
              <p className="text-center text-xl">Please wait for the next update</p>
          </div>
        </div>
      </div>
    </div>

  );
}
