import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider'
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { PiMapPinLineFill } from 'react-icons/pi';

const BookNowModal = ({ isVisible, onClose, category }) => {
    const { productName, productPrice, sellerContactNumber, sellerLocation, productCategory, productCondition, productBuyingPrice, productDescription, productImgURL, postingTime, totalUsed, sellerName } = category
    const { user } = useContext(AuthContext)
    if (!isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ' onClick={() => onClose()}>
            <div className='flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose()}>x</button>
                <div className='overflow-hidden bg-gray-300 rounded-lg has-shadow w-96 p-4 flex flex-col gap-2 '>
                    <h3 className='text-xl bg-sky-500/35 py-2 rounded-md text-center font-bold leading-3'>
                        {productName}
                    </h3>
                    <div className='flex gap-4'>
                        <div>
                            <img src={productImgURL} className='w-48 h-40 rounded-lg' alt="" />
                            <h2 className='font-semibold text-md'>TK {productPrice}</h2>
                        </div>
                        <div className='space-y-2 py-4'>
                            <h2>Sellers Details:</h2>
                            <div className='flex justify-start items-center gap-1'>
                                <span><FaUser className='text-sm text-gray-600' /></span>
                                <h3 className='text-sm'>{sellerName ? sellerName : "No Name"}</h3>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <span><MdEmail className='text-sm text-gray-600' /></span>
                                <h3 className='text-sm'>Email: {user?.uid ? user.email : "email is black"}</h3>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <span><FaPhoneAlt className='text-sm text-gray-600' /></span>
                                <p>{sellerContactNumber}</p>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <span><PiMapPinLineFill className='text-sm text-gray-600' /></span>
                                <p>{sellerLocation}</p>
                            </div>


                        </div>
                    </div>
                    <button className='btn solid success w-full'>
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BookNowModal