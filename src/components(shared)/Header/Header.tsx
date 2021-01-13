import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/useHttp";
import { MenuCategory } from "../../interfaces/IMenu";
import HeaderInfoSection from "./HeaderInfoSection";
import HeaderMenu from "./HeaderMenu";
import Loader from "../Loader";
import "../../scss/components/header.scss";

const Header: React.FC = () => {
  const [showTimetable, setShowTimetable] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<MenuCategory | null>(
    null
  );
  const { loading, request } = useHttp();

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

  const getCategories = useCallback(async () => {
    try {
      const data = await request("/categories?_limit=5", "GET");
      setCategories(data);
      setCurrentCategory(data[0])
    } catch (err) {
      console.log(err);
    }
  }, [request]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (loading) {
    return (
      <header className="header" onMouseLeave={() => setShowMenu(false)}>
      <HeaderInfoSection
        showTimetable={showTimetable}
        toggleTimetable={toggleTimetableHandler}
      />
        <Loader />
    </header>
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
