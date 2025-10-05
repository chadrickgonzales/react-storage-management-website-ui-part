"use client";

import { useState } from "react";
import Dashboard from "../pages/dashboard";
import DocumentsPage from "../pages/documents";
import ImagesPage from "../pages/images";
import MediaPage from "../pages/media";
import OthersPage from "../pages/others";
import Image from "next/image";

export default function Sidebar() {
  const [activePage, setActivePage] = useState("dashboard");

  const links = [
    { name: "Dashboard", id: "dashboard", icon: "/assets/icons/dashboard.svg" },
    { name: "Documents", id: "documents", icon: "/assets/icons/documents.svg" },
    { name: "Images", id: "images", icon: "/assets/icons/images.svg" },
    { name: "Media", id: "media", icon: "/assets/icons/video.svg" },
    { name: "Others", id: "others", icon: "/assets/icons/others.svg" },
  ];

  const renderActivePage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "documents":
        return <DocumentsPage />;
      case "images":
        return <ImagesPage />;
      case "media":
        return <MediaPage />;
      case "others":
        return <OthersPage />;
      default:
        return <Dashboard />;
    }
  };

   const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex h-screen">
      {/* 🔹 Sidebar */}
      <nav className="flex flex-col w-64 py-6 px-6 bg-white">
        <div>
          <div className="flex flex-row mb-14 items-center">
            <Image
              src="/assets/icons/logo-brand.svg"
              alt="StorageApp Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-2xl font-medium text-brand-coral">Storage</h1>
          </div>

          {links.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`flex items-center space-x-3  p-3  mb-4 rounded-full transition-all duration-200 w-full text-left ${
                  isActive
                    ? "bg-brand-coral text-brand-white shadow-lg"
                    : "text-brand-charcoal"
                }`}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-5 h-5 mr-2 inline-block"
                />
                <span className="font-medium">{link.name}</span>
              </button>
            );
          })}
        </div>

        <div className="relative flex justify-center mt-auto mb-6">
          <div className="absolute top-16 w-full h-[85px] bg-brand-coral/10 rounded-3xl" />
          <Image
            src="/assets/images/files.png"
            alt="App Logo"
            width={130}
            height={130}
            className="relative z-10"
          />
        </div>

        <div className=" flex flex-row mt-2 mb-6">
          <div>
             <Image
            src="/assets/images/avatar.png"
            alt="App Logo"
            width={50}
            height={50}
            className="relative z-10"
          />
          </div>

          <div className="ml-4 flex flex-col justify-center">
            <p className="text-md text-brand-charcoal">Chadrick Gonzales</p>
            <p className="text-sm text-brand-light-gray">Chadrick@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Main Content Area (with header and page content) */}
      <div className="flex flex-col flex-1">
        {/* Header only over main content */}
        <header className="w-full bg-white p-4 flex items-center justify-between ">
           <div className="flex flex-row rounded-full px-4 py-2 shadow-[0_-2px_6px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.05)]">
           <Image
            src="/assets/icons/search.svg"
            alt="App Logo"
            width={20}
            height={20}
            className="relative z-10"
          />

           <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-80 p-2 placeholder:text-brand-charcoal text-brand-charcoal focus:outline-none"
          />
          </div>

          <div className="flex flex-row">
            <button
              onClick={() => console.log("Custom icon clicked")}
              className="flex items-center gap-2 px-6 py-4 bg-brand-coral text-white rounded-full shadow-lg">
              <img 
                src="/assets/icons/upload.svg" 
                alt="My Icon" 
                className="w-5 h-5"
              />
              <span>Upload</span>
            </button>

            <button
              onClick={() => console.log("Custom icon clicked")}
              className="flex items-center gap-2 px-4 py-2">
              <img 
                src="/assets/icons/logout.svg" 
                alt="My Icon" 
                className="w-5 h-5"
              />
            </button>

          </div>
        </header>

        {/* Page content below header */}
        <main className="flex-1 p-6 ">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
}
