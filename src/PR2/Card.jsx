import React, { Component, useState } from 'react'
import './style.css'

const Card = () => {
    const [data, setData] = useState(
        [
            {
                img: "https://omreels.in/wp-content/uploads/2022/07/kedarnath-wallpaper-hd-for-mobile-sm.jpg",
                name: "Kedarnath",
                info: "The temple is one of the four major sites in India's Chota Char Dham pilgrimage of Northern Himalayas and is the first of the Panch Kedar pilgrimage sites. This temple is the highest among the 12 Jyotirlingas.",
            },
            {
                img: "https://e0.pxfuel.com/wallpapers/42/772/desktop-wallpaper-badrinath.jpg",
                name: "Badrinath",
                info: "Badrinath is located at Garhwal Himalayas, on the banks of the Alaknanda river, this sacred town lies between Nar and Narayana mountain ranges. The temple is believed to have been established by sage Adi Shankaracharya ."
            },
            {
                img: "https://e1.pxfuel.com/desktop-wallpaper/540/8/desktop-wallpaper-gangotri-temple-info-gangotri.jpg",
                name: "Gangotri",
                info: "Gangotri, more than anything else, is known as the origin of the sacred river Ganges.The legend of Ganges says that the Ganges came down on earth after long penance of King Bhagirathi to Lord Shiva."
            },
            {
                img: "https://www.euttaranchal.com/tourism/photos/dharchula-7803829.jpg",
                name: "Yamnotri",
                info: "Yamunotri stands proudly with its enormous mountain peaks, glaciers and gushing waters of Yamuna. River Yamuna, the second most sacred river of India, originates in Yamunotri making it one of the pilgrimage sites in Char Dham Yatra in Uttarakhand."
            },
            {
                img: "https://rkalert.in/public/img/wp-uploads/2020/08/ayodhya-ram-mandir-full-hd-wallpaper-photo-pics-2020.jpg",
                name: "Ram Mandir",
                info: "Ram Mandir is Hindu temple that is being built in Ayodhya,Uttar Pradesh, at site of Ram Janmabhoomi, birthplace of Rama, principal of Hinduism.The temple construction is being supervised by Shri Ram Janmabhoomi Teerth Kshetra."
            },
            {
                img: "https://c8.alamy.com/comp/2GBWR0A/swaminarayan-akshardham-temple-at-new-delhi-is-a-mandir-an-abode-of-god-a-hindu-house-of-worship-and-a-spiritual-and-cultural-campus-dedicated-to-2GBWR0A.jpg",
                name: "Akshardham",
                info: "'Akshardham' means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham is a Mandir an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony."
            },
        ]
    )



    return (
        <>
            <h1 className='title'>Some Famouse Temples Of India</h1>
            <div className="container">
                <div className="row">
                    {data &&
                        data.map((data) => (
                            <div className="col-3">
                                <div className="card">
                                    <img src={data.img} alt="" width="100%" height="100%" />
                                    <h1>{data.name}</h1>
                                    <p>{data.info}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )

}
export default Card;