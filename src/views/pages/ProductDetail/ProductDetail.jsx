import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, getDocs, collection, doc, query, where } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import '../../../assets/css/productDetail.css'
import currency from 'currency.js'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const ProductDetail = () => {
    const uid = useParams().id
    const [data, setData] = useState([])
    const styleUrlChild = {
        height: '100px',
        width: '200px'
    }

    useEffect(() => {
        getPro()
    }, [])

    console.log(data)

    const getPro = async () => {
        let q = query(collection(db, "Product"), where("uid", "==", uid))
        let d = await getDocs(q)
        let arr = []
        d.forEach(item => {
            arr.push(item.data())
        })

        setData(arr)
    }

    const imgs = document.querySelectorAll(".img-select a");
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener("click", (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage() {
        const displayWidth = document.querySelector(
            ".img-showcase img:first-child"
        ).clientWidth;

        document.querySelector(".img-showcase").style.transform = `translateX(${-(imgId - 1) * displayWidth
            }px)`;
    }

    window.addEventListener("resize", slideImage);

    function format2(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card-wrapper">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="card" key={item.uid}>
                                        {/* <!-- card left --> */}
                                        <div className="product-imgs">
                                            <div className="img-display">
                                                <div className="img-showcase">
                                                    <img src={item.images[0]} alt="shoe image" />
                                                    <img src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146081/Originals/iPhone-14-Pro-Max-vs-iPhone-13-Pro-Max-2.jpeg" alt="shoe image" />
                                                    <img src="https://thoapple.com/wp-content/uploads/2022/04/iphone14-tim.jpg" alt="shoe image" />
                                                    <img src="https://kenh14cdn.com/203336854389633024/2021/12/24/image-2021-12-24-154716-1640335652246995375712.jpg" alt="shoe image" />
                                                </div>
                                            </div>
                                            <div className="img-select">
                                                <div className="img-item">
                                                    <a href="#" data-id="1">
                                                        <img src={item.images[0]} style={styleUrlChild} alt="shoe image" />
                                                    </a>
                                                </div>
                                                <div className="img-item">
                                                    <a href="#" data-id="2">
                                                        <img src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146081/Originals/iPhone-14-Pro-Max-vs-iPhone-13-Pro-Max-2.jpeg" style={styleUrlChild} alt="shoe image" />
                                                    </a>
                                                </div>
                                                <div className="img-item">
                                                    <a href="#" data-id="3">
                                                        <img src="https://thoapple.com/wp-content/uploads/2022/04/iphone14-tim.jpg" alt="shoe image" style={styleUrlChild} />
                                                    </a>
                                                </div>
                                                <div className="img-item">
                                                    <a href="#" data-id="4">
                                                        <img src="https://kenh14cdn.com/203336854389633024/2021/12/24/image-2021-12-24-154716-1640335652246995375712.jpg" style={styleUrlChild} alt="shoe image" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h2 className="product-title">{item.name}</h2>
                                            {/* <a href="#" className="product-link">visit nike store</a> */}
                                            <div className="product-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <span>4.7(21)</span>
                                            </div>

                                            <div className="product-price">
                                                {/* <p className="last-price">Old Price: <span>$257.00</span></p> */}
                                                <p className="new-price">Giá: <span>{currency(item.price, { symbol: '', separator: '.',  decimal: ',', fromCents: true, precision: 0 }).format()} VNĐ</span></p>
                                            </div>

                                            <div className="product-detail">
                                                <h2>Giới thiệu sản phẩm: </h2>
                                                <p>{item.description}</p>
                                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p> */}
                                                <ul>
                                                    <li>Color: <span>Black</span> <span>purple</span> <span>White</span></li>
                                                    <li>Kho: <span>Còn hàng</span></li>
                                                    <li>Category: <span>{item.categories}</span></li>
                                                    <li>Shipping Area: <span>Việt Nam</span></li>
                                                    <li>Shipping Fee: <span>Miễn phí</span></li>
                                                </ul>
                                            </div>

                                            <div className="purchase-info">
                                                <input type="number" min="0" defaultValue="1" />
                                                <button type="button" className="btn">
                                                    Add to Cart <i className="fas fa-shopping-cart"></i>
                                                </button>
                                                <button type="button" className="btn">Compare</button>
                                            </div>

                                            <div className="social-links">
                                                <p>Share At: </p>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-whatsapp"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-pinterest"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail