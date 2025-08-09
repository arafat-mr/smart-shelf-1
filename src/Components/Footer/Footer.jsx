

import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-black footer-horizontal footer-center text-primary-content p-10">
      <aside>
        <div className="flex justify-center items-center -ml-4 md:px-4">
          <img
            className=" w-8 md:w-10 "
            src="https://i.ibb.co/ymbFQTnC/1-2eb8e33a-removebg-preview.png"
            alt=""
          />
          <p className=" text-lg md:text-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
            Smart <span className="-ml-1">Shelf</span>{" "}
          </p>
        </div>
        <p className="font-medium">
          Your reading journey starts here.
          <br />
          Exploring stories and sparking imagination since 2020.
        </p>

        <div className="mt-2 text-sm leading-6">
          <p>Email: <a href="mailto:contact@smartshelf.com" className="underline">contact@smartshelf.com</a></p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        <p className="mt-2">
          Copyright © {new Date().getFullYear()} - All rights reserved - arafatMr
        </p>
      </aside>

      <div className="flex gap-10">
        <p>
          <a href="#">Terms and Condition</a>
        </p>
        <p>
          <a href="#">Privacy Policy</a>
        </p>
      </div>

      <nav>
        <div className="flex gap-10">
          <a href="https://github.com/arafat-mr" target="blank">
            <BsGithub size={30} />
          </a>
          <a href="https://www.facebook.com/share/1GtzAe3ho9/" target="blank">
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/4rafat.mr?igsh=MW83ZnkybW0wZjkycg=="
            target="blank"
          >
            <BsInstagram size={30} />
          </a>
          <a
            href="https://youtube.com/@arafatmr-n3i?si=8NfuSWk5w2WlRYrg"
            target="blank"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
