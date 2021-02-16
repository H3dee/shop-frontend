import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductCardProps } from '../interfaces/IProductCard';
import { Meta, Story } from '@storybook/react/types-6-0';
import mockImg from '../assets/img/image 29test.png'

export default {
    component: ProductCard,
    title: 'Product card',
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const GridView = Template.bind({})
GridView.args = {
      id: 1,
      imageUrl: mockImg,
      productName: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On',
      price: 12323,
      isExpanded: false
} 

export const ListView = Template.bind({})
ListView.args = {
      ...GridView.args,
      isExpanded: true
}