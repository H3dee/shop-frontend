import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { MenuCategory, SubCategory } from "../../interfaces/IMenu";
import { getMenuSubCategories } from "../../util/getMenuSubCategories";
import qs from "qs";
import HeaderInfoSection from "./HeaderInfoSection";
import HeaderMenu from "./HeaderMenu";
import Loader from "../Loader";
import "../../scss/components/header.scss";

const Header: React.FC = React.memo(() => {
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

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesQuery = qs.stringify(
          {
            _where: { parent_null: true },
            _limit: 5,
          },
          { encode: false }
        );

        const parentCategories: MenuCategory[] = await request(
          `/categories?${categoriesQuery}`,
          "GET"
        );

        const subCategoriesQuery = qs.stringify({
          _where: {
            _or: parentCategories.flatMap((category) => [
              ...category.subCategories!.map((subCategory) => ({
                id: subCategory.id,
              })),
            ]),
          },
        });

        const subCategories: SubCategory[] = await request(
          `/categories?${subCategoriesQuery}`,
          "GET"
        );
        
        setCategories(
          parentCategories.map((category) => ({
            id: category.id,
            image: category.image,
            name: category.name,
            parent: category.parent,
            sub_category: category.sub_category,
            updated_at: category.updated_at,
            subCategories: category.subCategories
              ? category.subCategories.flatMap((subCategory) =>
                  getMenuSubCategories(subCategories, subCategory.id)
                )
              : null,
          }))
        );

        setCurrentCategory({
          id: parentCategories[0].id,
          image: parentCategories[0].image,
          name: parentCategories[0].name,
          parent: parentCategories[0].parent,
          sub_category: parentCategories[0].sub_category,
          updated_at: parentCategories[0].updated_at,
          subCategories: parentCategories[0].subCategories
            ? parentCategories[0].subCategories.flatMap((subCategory) =>
                getMenuSubCategories(subCategories, subCategory.id)
              )
            : null,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, [request]);

  return (
    <header className="header" onMouseLeave={() => setShowMenu(false)}>
      <HeaderInfoSection
        showTimetable={showTimetable}
        toggleTimetable={toggleTimetableHandler}
      />
      {loading ? (
        <Loader />
      ) : (
        <HeaderMenu
          showMenu={showMenu}
          showSearch={showSearch}
          HoverMenuHandler={onSelectorHover}
          categories={categories}
          toggleSearch={toggleSearchHandler}
          subCategories={currentCategory?.subCategories}
        />
      )}
    </header>
  );
});

export default Header;
