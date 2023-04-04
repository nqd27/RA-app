import React, { useEffect } from 'react'
import '../../../assets/css/checkout.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '../../store/selectors/cartSelector'
import currency from 'currency.js'
import { getTotalPrice } from '../../store/selectors/cartSelector'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { getProfile } from '../../store/selectors/accountSelector'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, doc, getDoc, collection, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import cartSlice from '../../store/sclice/cartSlice'
import accountSlice from '../../store/sclice/accountSlice'
import { v4 as uuidv4 } from 'uuid';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const CheckOut = () => {

    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    const t = useSelector(getTotalPrice)
    // console.log(cart)
    const uid = localStorage.getItem("UID")
    const profile = useSelector(getProfile)
    // console.log(profile)

    useEffect(() => {

    }, [])

    const handleCheckout = async () => {
        let email = document.querySelector("#email").value
        let name = document.querySelector("#name").value
        let address = document.querySelector("#address").value
        let phone = document.querySelector("#phone").value
        let note = document.querySelector("#note").value
        let now = new Date()


        let cartOder = {
            profile: {
            email: email,
            name: name,
            address: address,
            phone: phone,
            note: note,
            thanhtoan: 'Trực tiếp',
            date: now.toLocaleString()
            },
            listCart: cart,
            uid: uuidv4(),
            status: 'CHỜ DUYỆT'
        }

        let profileUser = {
            hoppy: profile.hoppy,
            uid: profile.uid,
            avatart: profile.avatart,
            miniCart: [],
            phone: profile.phone,
            name: profile.name,
            email: profile.email,
            address: profile.address,
            vaitro: profile.vaitro,
            job: profile.job,
            cart: [
                ...profile.cart,
                cartOder
            ],
            ps: profile.ps,
            status: true
        }

        console.log(profileUser)
        dispatch(cartSlice.actions.changeCart([]))
        dispatch(accountSlice.actions.getProfile(profileUser))
        await setDoc(doc(db,'Users', uid),profileUser)
    }

    return (
        <>

            <div className="container-checkout">
                <div className="wrapper-checkout">
                    <div className="check-left">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" defaultValue={profile.email} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type='text' defaultValue={profile.name}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type='text' defaultValue={profile.address} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" defaultValue={profile.phone} />
                                </Form.Group>
                            </Row>

                            {/* {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Label>Thanh Toán</Form.Label><br></br>
                                    <Form.Check
                                        inline
                                        checked
                                        label="Trực tiếp"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        label="Chuyển khoản"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))} */}

                            <Form.Group className='mb-3' controlId='note'>
                                <Form.Label>Note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    
                                />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={handleCheckout}>
                                Submit
                            </Button>
                        </Form>
                    </div>

                    <div className="check-right">
                        <div className="list-product">
                            {
                                cart
                                    ?

                                    cart.map((item, index) => {
                                        return (
                                            <>
                                                <div className="product-check">
                                                    <img src={item.url} alt="" />
                                                    <div className="message-product">
                                                        <div className="title-product">
                                                            <p>Name: </p>
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <div className="title-product">
                                                            <p>Price: </p>
                                                            <span>{currency(item.price, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</span>
                                                        </div>
                                                        <div className="title-product">
                                                            <p>Quantity: </p>
                                                            <span><input type="number" defaultValue={item.quantity} min={0} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })

                                    :

                                    ""
                            }
                            {/* <div className="product-check">
                                <img src="https://firebasestorage.googleapis.com/v0/b/shoponline-ra.appspot.com/o/product%2F24cb0d7d-10cf-4e14-9d4e-c6f04774d00e?alt=media&token=2ff7da18-e102-404a-8d94-8571752e84d2" alt="" />
                                <div className="message-product">
                                    <div className="title-product">
                                        <p>Name: </p>
                                        <span>asdjkfhkashf</span>
                                    </div>
                                    <div className="title-product">
                                        <p>Price: </p>
                                        <span>asdjkfhkashf</span>
                                    </div>
                                    <div className="title-product">
                                        <p>Quantity: </p>
                                        <span><input type="number" min={0}/></span>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                        <div className="total-price">
                            <div className="title-price">
                                <p>Tổng phụ: </p>
                                <span>{currency(t, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</span>
                            </div>
                            <div className="title-price">
                                <p>VAT(10%): </p>
                                <span>{currency(t * 0.1, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</span>
                            </div>
                            <div className="title-price">
                                <p>Tổng hóa đơn: </p>
                                <span>{currency(t * 0.9, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
        </>
    )
}

export default CheckOut