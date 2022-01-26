import React from 'react';
import Product from '../product/Product';
import './productList.css'
import { Products } from '../../data';


const ProductList = () => {
  return <div className='pl'>
      <div className='pl-text'>
        <h1 className='pl-title'>Creer & Inspirer par, Dieu-veil Nkindou</h1>
        <p className='pro-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Quasi repudiandae deserunt consequuntur laboriosam delectus veniam odio, inventore, aut, cupiditate blanditiis esse odit rem eum! Ad, cupiditate? Culpa, quo consequatur. Incidunt?</p>
      </div>
    <div className='p-list'>
    {
      Products.map((item)=>(
        <Product key={item.id}
        link={item.link}
        img= {item.img} />
      ))
    }

   
    </div>
 
  </div>;
};

export default ProductList;
