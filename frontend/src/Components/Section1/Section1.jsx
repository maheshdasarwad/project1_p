import React, { useEffect, useState } from 'react';
import LeftContent from './LeftContent';
import RightPhotos from './RightPhotos';

const Section1 = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    setProducts(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=''>
      {products.map((elem) => (
        <div
          key={elem.id}
          className="h-screen flex snap-start"
        >
          {/* LEFT CONTENT */}
          <div className="w-1/3 h-full">
            <LeftContent
              carName={elem.carName}
              price={elem.price}
              companyName={elem.companyName}
              officialLink={elem.officialLink}
              shortDescription={elem.shortDescription}
            />
          </div>

          {/* RIGHT IMAGES */}
          <div className="w-2/3 h-full">
            <RightPhotos
              img1={`http://localhost:8080${elem.img1}`}
              img2={`http://localhost:8080${elem.img2}`}
              img3={`http://localhost:8080${elem.img3}`}
              img4={`http://localhost:8080${elem.img4}`}
              img5={`http://localhost:8080${elem.img5}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section1;
