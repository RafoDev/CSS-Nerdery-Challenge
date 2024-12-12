import React, { useRef, useState } from "react";
import styles from "./navbar.module.scss";
import { RiSquareLine as SquareIcon } from "@remixicon/react";
import { NavLink } from "react-router-dom";
import { Link, Option } from "./types";
import { Modal } from "./components/modal";

const links: Link[] = [
  { icon: SquareIcon, label: "Home", to: "/" },
  { icon: SquareIcon, label: "My Files", to: "/files" },
  { icon: SquareIcon, label: "Recent Files", to: "/recent" },
  { icon: SquareIcon, label: "Shared Filed", to: "/shared" },
  { icon: SquareIcon, label: "File Request", to: "/request" },
  { icon: SquareIcon, label: "Trash", to: "/trash" },
];

const modalOptions: Option[] = [
  { icon: SquareIcon, label: "Upload files" },
  { icon: SquareIcon, label: "Upload folder" },
  { icon: SquareIcon, label: "New folder" },
  { icon: SquareIcon, label: "More" },
];

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleMouseEnter = () => {
    setShowModal(true);
  };
  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
      </div>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li className={styles.listItem} key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : ""}`
              }
            >
              <link.icon className={styles.linkIcon} />
              <p className={styles.linkLabel}>{link.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        {showModal && (
          <Modal
            options={modalOptions}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        )}
        <button className={styles.button} onClick={handleClick}>
          Create New
        </button>
      </div>
    </nav>
  );
};
