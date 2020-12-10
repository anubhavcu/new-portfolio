import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-10  text-red-100 hover:text-green-800 text-4xl sans-serif tracking-widest"
          >
            Anubhav
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-4 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-4 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-4 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-4 my-6">
          <SocialIcon
            url="https://github.com/anubhavcu"
            className="mr-5"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/anubhav-srivastava-370667198/"
            className="mr-5"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:anubhavcs.py@gmail.com"
            className="mr-5"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/"
            className="mr-5"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            // url="https://wa.me/919315973298"
            url="https://drive.google.com/file/d/1o8MfsRuZqGMTjKMio40sa2xwdpjDyptp/view?usp=sharing"
            className="mr-5"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
