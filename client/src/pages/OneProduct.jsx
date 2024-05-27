import React, { useEffect, useRef, useState } from 'react'
import '../style/oneproduct.css'
import Navb from '../components/Navb'
import { useNavigate, useParams } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'
import { fetchImages, fetchProduct } from '../store/products'
import { useCart } from 'react-use-cart'



const OneProduct = () => {
    const { addItem, items } = useCart();

    

    const [slideIndex, setSlideIndex] = useState(1);
    const [width, setWidth] = useState(0);
    const [start, setStart] = useState(0);
    const [change, setChange] = useState(9);
    const slideRef = useRef();

    useEffect(() => {
        if (!slideRef.current) return;
        const scrollWidth = slideRef.current.scrollWidth;
        const childrenElementCount = slideRef.current.childElementCount;
        const width = scrollWidth / childrenElementCount;
        setWidth(width);
    }, [])
    function plusSlides(n) {
        setSlideIndex(prev => prev + n);
        slideShow(slideIndex + n);
    }
    function slideShow(n) {

        if (n > oneProduct?.Images?.length) { setSlideIndex(1); }
        if (n < 1) { setSlideIndex(oneProduct?.Images?.length); }
    }
    //drag
    function dragStart(e) {
        setStart(e.clientX);
    };
    function dragEnd(e) {
        if (change > 0) {
            slideRef.current.scrollLeft += width;
        }
        else {
            slideRef.current.scrollLeft -= width;
        }
        ;
    }
    useEffect(() => {
        if (!slideRef.current || !width) return;
        let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
        slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
    }, [width, slideIndex])
    function dragOver(e) {
        let touch = e.clientX;
        setChange(start - touch);
    };
    //details
    const { id } = useParams();
    const oneProduct = useSelector((state) => state.products?.product)
    console.log(oneProduct, "state")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct(id));


    }, [dispatch, id])
    console.log(items,'items')
    const addToCart = () => {
        const item = items.filter((e, i) => e.id === oneProduct.id )
        if (item.length === 0) {
            addItem(oneProduct)}
    }

    return (

        <main>
            <Navb />

            <section className="product-details">
                <div className="product-page-img">
                    <div className='big-images'>
                        {oneProduct?.Images?.map((image, index) =>
                            <div key={index} className="mySlides" style={{ display: (index + 1) === slideIndex ? 'block' : 'none' }}>
                                <div className="numbertext">{index + 1} / {oneProduct?.Images?.length} </div>
                                <img src={image.url} alt={image.alt} />
                            </div>
                        )}
                        <a href="#!" className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a href="#!" className='next' onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                    <div className="slider-img" draggable={true} ref={slideRef}
                        onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>

                        {oneProduct?.Images?.map((image, index) =>
                            <div key={index} className={`slider-box ${index + 1 === slideIndex && 'active'}`}
                                onClick={() => setSlideIndex(index + 1)}>
                                <img src={image.url} alt={image.alt} />
                            </div>
                        )}
                    </div>
                </div>


                <div className="product-page-details" >
                    <strong>{oneProduct?.title}</strong>
                    <p className='small-desc'>Description : {oneProduct?.description}</p>
                    <p className='procuct-price'>Price : ${oneProduct?.price}</p>
                    {/* <p className='procuct-price'>Categorie : ${oneProduct?.Categorie[categorieId]}</p> */}

                    <div className="cart-btns">

                        {oneProduct && <p className="add-cart bg-gradient-to-r from-primary to-secondary cursor-pointer" onClick={() => addToCart()}>Add to Cart</p>}
                        <p className="add-cart buy-now bg-gradient-to-r from-primary to-secondary cursor-pointer" onClick={()=>window.open(`${oneProduct?.link}`)}>Live Preview</p>
                    </div>
                </div>


            </section>
            <section className="product-all-info">

            </section>

            {/* <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div> */}

        </main>
    )
}

export default OneProduct;
