import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row } from 'reactstrap'
import { AppDispatch, RootState } from '../../../../../redux-toolkit/store';
import { Image, Ribbon } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { FilterValueTypes, ProductDataTypes } from '../../../../../Types/EcommerceType';
import ProductModal from './ProductModal';
import { fetchProductData } from '../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';
import ProductHover from './ProductHover';
import ProductDetails from './ProductDetails';

export default function ProductGrid() {
    const dispatch = useDispatch<AppDispatch>();
    const { productItem, filterValue } = useSelector((state: RootState) => state.product);
    const { gridClass, columnClass } = useSelector((state: RootState) => state.filter);
    const [dataId, setDataId] = useState<number>();
    const [modelData, setModelData] = useState<ProductDataTypes>();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const onClickHandle = (data: ProductDataTypes) => {
        setOpenModal(true);
        setModelData(data);
        setDataId(data.id);
    };
    useEffect(() => {
        if (!productItem.length) { dispatch(fetchProductData()); }
    }, []);

    const productData = (products: ProductDataTypes[], filterValue: FilterValueTypes) => {
        let data: ProductDataTypes[] = [];
        products.map((item) => {
            let category;
            if (filterValue.category.includes(item.name)) {
                category = true;
            }
            let brand;
            item.tags.map((element) => {
                if (filterValue.brand.includes(element)) {
                    brand = true;
                }
            });
            let color;
            if (item.colors.includes(filterValue.color)) {
                color = true;
            }
            let value;
            if (item.price >= filterValue.value.min && item.price <= filterValue.value.max) {
                value = true;
            }
            let name;
            if (item.name.toLowerCase().includes(filterValue.searchBy.toLowerCase())) {
                name = true;
            }
            if (category && brand && color && value && name) {
                data.push(item);
            }
        });
        if (filterValue.sortBy === "Lowest Prices") {
            return data.sort((a, b) => a.price - b.price);
        } else if (filterValue.sortBy === "Highest Prices") {
            return data.sort((a, b) => b.price - a.price);
        } else {
            return data;
        }
    };

    return (
        <div className={`product-wrapper-grid ${gridClass}`}>
            <Row>
                {productData(productItem, filterValue).map((item) => {
                    return (
                        <div className={gridClass ? "col-xl-12" : columnClass} key={item.id}>
                            <Card>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        {(item.status !== "none") ?
                                            (<Ribbon className={item.ribbonClassName}>{item.status}</Ribbon>) : ("")
                                        }
                                        <Image className='img-fluid' src={dynamicImage(item.image)} alt='' />
                                        <ProductHover onClickHandle={onClickHandle} item={item} />
                                    </div>
                                    <ProductDetails item={item} />
                                </div>
                            </Card>
                        </div>
                    )
                })}
                <ProductModal value={openModal} dataId={dataId} setOpenModal={setOpenModal} modelData={modelData} />
            </Row>
        </div>
    )
}
