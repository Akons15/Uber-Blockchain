import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import eth from '../temp/eth.png';
import { UberContext } from '../context/uberContext';

const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1 `,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    service: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.3rem]`,
    ethLogo: `ml-[10px]`,
}


const basePrice = 154;

const RideSelector = () => {
    const [cartList, setCarList] = useState([])
    const {setSelectedRide, selectedRide, setPrice, basePrice} = useContext(UberContext)

    useEffect(() => {
        ;(async () => {
            try{
                const response = await fetch('/api/db/getRideTypes')

                const data = await response.json()
                setCarList(data.data)
                setSelectedRide(data.data[0])
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
      {cartList.map((car, i) => (
          <div 
          className={`${
              selectedRide?.service === car.service ? 
              style.selectedCar : style.car}`}
          onClick={() => {
            setSelectedRide(car)
            setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))    
        } }
          key={i}
           >
              <Image
              src={car.iconUrl}
              width={50}
              height={50}
              className={style.carImage} />
              <div className={style.carDetails}>
                  <div className={style.service}>
                      {car.service}
                  </div>
                  <div className={style.time}>{Math.floor(Math.random() * 10)} minutes away</div>
              </div>
              <div className={style.priceContainer}>
                  <div className={style.price}>
                      {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                  </div>
                  <Image
                  src={eth}
                  className={style.ethLogo}
                  height={20}
                  width={25} />
              </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default RideSelector
