import React, { useState } from 'react';
import './style.css';

const Card = () => {
  const product = [
    {
        id: '1',
        name: 'formals',
        img: 'https://i.pinimg.com/236x/1c/7d/f2/1c7df2b8ca735fa607966ffb533f1bd8.jpg',
        price: '5000/-',
        discription: 'The formal dress code for men is the most traditional option and generally consists of a full suit or tuxedo.'
    },
    {
        id: '2',
        name: 'crop-tops',
        img: 'https://fashionjackson.com/wp-content/uploads/2019/09/Fashion-Jackson-Wearing-Rebecca-Minkoff-Leopard-Sweatshirt-Ripped-Jeans-Tan-Ankle-Strap-Heeled-Sandals-Aviator-Sunglasses-Rebecca-Minkoff-MAB-Quilted-Satchel-Blush.jpg',
        price: '2000/-',
        discription: 'A crop top may also be referenced as a half shirt, midriff, belly shirt, cutoff shirt, etc.'
    },
    {
        id: '3',
        name: 'partywear-dress',
        img: 'https://www.indiabazaaronline.com/image/cache//catalog/products7/printed-lycra-sleeve-less-choli-lehenga-for-party-ms7910559-711x1280.jpg',
        price: '2500/-',
        discription: 'A party dress is a garment that is worn on a special occasion, like a wedding, get together or a celebration.'
    },
    {
        id: '4',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '5',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '6',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '7',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '8',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '9',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '10',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '11',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '12',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
    {
        id: '13',
        name: 'casual',
        img: 'https://i.pinimg.com/236x/f7/6d/7d/f76d7d86726c21bc977fc113a39ca3f4.jpg',
        price: '3000/-',
        discription: 'Casual wear (or casual attire or clothing) is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.'
    },
  ];

  const itemsPerPage = 4; 

  const [cloth, setCloth] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);

  
  const totalPages = Math.ceil(cloth.length / itemsPerPage);

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = cloth.slice(startIndex, endIndex);

  return (
    <>
      <div className="text-center">
        <h2 className='m-3'>Enter Cloths Name</h2>
        <input type="name" className='mb-3' />
      </div>
      <div className="row">
        {itemsToDisplay.map((ele) => (
          <div className="col-3" key={ele.id}>
            <div className="card mt-2 bg-grey p-3">
              <h3 className="text-muted">{ele.name}</h3>
              <div className="text-center pt-2">
                <img src={ele.img} alt="" />
              </div>
              <h4 className="text-muted mt-2">{ele.price}</h4>
              <p className="text-muted">{ele.discription}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button
          type=''
          className='border-0 ms-1 mt-2 bg-secondary rounded text-muted p-2'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type=''
          className='border-0 ms-1 mt-2 bg-secondary rounded text-muted p-2'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Card;
