import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



function Product() {
    const [Product, setProduct] = useState({});
    const [finalList, setFinalList] = useState([])
    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log('prodresponse', response)
        setProduct(response.data)
    }
    const handleCart = () => {
        if (finalList.includes(Product)) {
            alert('product already in cart')
        }
        else {
            localStorage.setItem('cart', JSON.stringify([...finalList, Product]))
            setFinalList(() => [...finalList, Product])
        }

    }
    useEffect(() => {
        fetchData();
        let alreadyInCart = JSON.parse(localStorage.getItem("cart"));
        alreadyInCart && setFinalList(alreadyInCart)
    }, [])
    const { id } = useParams();
    console.log('finallist', finalList)
    return (
        <div>
            <div>
                {Product.title}
                <img src={Product.image} height='200' width={200} />
                <button onClick={handleCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product