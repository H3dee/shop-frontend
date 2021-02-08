import React, { useState, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { MenuCategory } from '../../interfaces/IMenu'
import HeaderInfoSection from './HeaderInfoSection'
import HeaderMenu from './HeaderMenu'
import Loader from '../Loader'
import '../../scss/components/header.scss'

const qs = require('qs')

const Header: React.FC = React.memo(() => {
  const [showTimetable, setShowTimetable] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [currentCategory, setCurrentCategory] = useState<MenuCategory | null>(
    null
  )
  const { loading, request } = useHttp()

  const onSelectorHover: (id: number) => void = (id) => {
    const categoryToReplace = categories.find((category) => category.id === id)
    setShowTimetable(false)
    setCurrentCategory(categoryToReplace!)
    setShowMenu(true)
  }

  const toggleTimetableHandler = () => {
    setShowSearch(false)
    setShowMenu(false)
    setShowTimetable((prev) => !prev)
  }

  const toggleSearchHandler = () => {
    setShowTimetable(false)
    setShowMenu(false)
    setShowSearch((prev) => !prev)
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
        const query = qs.stringify(
          {
            _where: { parent_null: true },
            _limit: 5,
          },
          { encode: false }
        )

        const data = await request(`/categories?${query}`, 'GET')
        setCategories(data)
        setCurrentCategory(data[0])
      } catch (err) {
        console.log(err)
      }
    }

    getCategories()
  }, [request])

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
  )
})

export default Header