import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuCategory } from "../interfaces/IMenu";
// import Loader from "../components/Loader";
import HeaderInfoSection from "./HeaderInfoSection";
import "../scss/header.scss";
import HeaderMenu from "./HeaderMenu";

const Header: React.FC = () => {
  const [showTimetable, setShowTimetable] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<MenuCategory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const onSelectorHover: (id: number) => void = (id) => {
    const categoryToReplace = categories.find((category) => category.id === id);
    setShowTimetable(false);
    setCurrentCategory(categoryToReplace!);
    setShowMenu(true);
  };

  const toggleTimetableHandler = () => {
    setShowSearch(false);
    setShowMenu(false);
    setShowTimetable((prev) => !prev);
  };

  const toggleSearchHandler = () => {
    setShowTimetable(false);
    setShowMenu(false);
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get<MenuCategory[]>("/categories?_limit=5")
      .then(({ data }) => {
        setCategories(data);
        setCurrentCategory(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", fontSize: "18px", padding: "15px 0" }}>
        Waiting...
      </div>
    );
  }

  return (
    <header className="header" onMouseLeave={() => setShowMenu(false)}>
      <HeaderInfoSection
        showTimetable={showTimetable}
        toggleTimetable={toggleTimetableHandler}
      />
      <HeaderMenu
        showMenu={showMenu}
        showSearch={showSearch}
        HoverMenuHandler={onSelectorHover}
        categories={categories}
        toggleSearch={toggleSearchHandler}
        subCategories={currentCategory?.subCategories}
      />
    </header>
  );
};

export default Header;
