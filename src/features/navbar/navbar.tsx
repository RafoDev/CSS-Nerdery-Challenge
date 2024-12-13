import { useState } from "react";
import styles from "./navbar.module.scss";
import {
  RiArrowRightBoxLine,
  RiDeleteBin2Line,
  RiExportLine,
  RiFile3Line,
  RiFileTransferLine,
  RiFileUploadLine,
  RiFolderAddLine,
  RiFolderUploadLine,
  RiHome2Line,
  RiMenuLine,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";
import { Modal } from "./components/modal";
import { Link, Option } from "../../shared/types/entities";

const links: Link[] = [
  { icon: RiHome2Line, label: "Home", to: "/" },
  { icon: RiFile3Line, label: "My Files", to: "/files" },
  { icon: RiFile3Line, label: "Recent Files", to: "/recent" },
  { icon: RiFileTransferLine, label: "Shared Filed", to: "/shared" },
  { icon: RiExportLine, label: "File Request", to: "/request" },
  { icon: RiDeleteBin2Line, label: "Trash", to: "/trash" },
];

const modalOptions: Option[] = [
  { icon: RiFileUploadLine, label: "Upload files" },
  { icon: RiFolderUploadLine, label: "Upload folder" },
  { icon: RiFolderAddLine, label: "New folder" },
  { icon: RiArrowRightBoxLine, label: "More" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.burger} onClick={toggleNavBar}>
        <RiMenuLine className={styles.burgerIcon} />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.active : ""} `}>
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
          {showModal && <Modal options={modalOptions} />}
          <button className={styles.button} onClick={handleClick}>
            Create New
          </button>
        </div>
      </nav>
    </>
  );
};

