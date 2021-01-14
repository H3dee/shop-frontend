import { MenuCategory, SubCategory } from "./IMenu";

interface Togglers{
      toggleTimetable?: () => void,
      toggleSearch?: () => void
}

interface InfoSectionProps{
      showTimetable: boolean,
}

interface MenuProps{
      showMenu: boolean
      showSearch: boolean,
      subCategories: SubCategory[] | null | undefined
      categories: MenuCategory[],
      HoverMenuHandler: (id: number) => void,

}

export type InfoSection = InfoSectionProps & Togglers
export type Menu  = MenuProps & Togglers