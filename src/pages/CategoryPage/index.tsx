import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import AdBanner from '../../components(shared)/AdBanner'
import Footer from '../../components(shared)/Footer/Footer'
import Header from '../../components(shared)/Header/Header'
import BenefitsList from '../../components(shared)/BenefitsCards/BenefitsList'
import SelectedCategoryList from './SelectedCategoryList'
import bannerImg from '../../img/image 26ad2.png'
import '../../scss/components/category-page.scss'

const CategoryPage: React.FC = () => {
  const { id, name: categoryName } = useParams<{ id: string; name: string }>()
  const focusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    focusRef.current!.scrollIntoView({
      block: 'start',
      behavior: 'auto',
      inline: 'start',
    })
  }, [])

  return (
    <>
      <Header />
      <div className="content" ref={focusRef}>
        <div className="container">
          <div className="content__row">
            <AdBanner imageUrl={bannerImg} />
            <div className="content__category-title">{categoryName}</div>
            <SelectedCategoryList parentCategoryId={id} />
            <BenefitsList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CategoryPage
