import React from 'react'
import { H3 } from '../../../../../../../AbstractElements';
import { BrandText, CategoryText, ColorsText, NewProducts, Price } from '../../../../../../../Utils/Constants';
import BrandFilter from './BrandFilter';
import ColorsFilter from './ColorsFilter';
import PriceRange from './PriceRange';
import CategoryFilter from './CategoryFilter';

export default function ProductCategory() {

    return (
        <>
            <div className="product-filter">
                <H3 className="f-w-600">{CategoryText}</H3>
                <CategoryFilter />
            </div>
            <div className="product-filter">
                <H3 className="f-w-600">{BrandText}</H3>
                <BrandFilter />
            </div>
            <div className="product-filter slider-product">
                <H3 className="f-w-600">{ColorsText}</H3>
                <ColorsFilter />
            </div>
            <div className="product-filter pb-0">
                <H3 className="f-w-600">{Price}</H3>
                <PriceRange />
                <H3 className="f-w-600 pt-3">{NewProducts}</H3>
            </div>
        </>
    );
};
