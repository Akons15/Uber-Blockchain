import Image from 'next/image'
import React, {useContext} from 'react'
import userAvatar from '../temp/user.png'
import {BsPerson} from 'react-icons/bs'
import { UberContext } from '../context/uberContext'


const style = {
    wrapper: `h-16 w-full bg-black text-white flex justify-around items-center px-70 fixed z-20`,
    leftMenue: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menueItem: `hidden md:flex text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenue: `flex gap-3 items-center `,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
    loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
    loginText: `ml-2`,
}


const Navbar = () => {
    const {currentAccount, connectWallet, currentUser} = useContext(UberContext);

    
  return (
    <div className={style.wrapper}>
        <div className={style.leftMenue}>
            <div className={style.logo}>Uber</div>
                <div className={style.menueItem}>Ride</div>
                <div className={style.menueItem}>Drive</div>
                <div className={style.menueItem}>More</div>
            </div>
        <div className={style.rightMenue}>
        <div className={style.menueItem}>Help</div>
            <div className={style.menueItem}>{currentUser?.name}</div>
            <div className={style.userImageContainer}>
                <Image
                className={style.userImage}
                src={userAvatar}
                alt=''
                width={40}
                height={40} 
                />
            </div>
            {currentAccount ? (
            <div>{currentAccount.slice(0, 5)}...{currentAccount.slice(-5)}</div>
            ) : (
                <div className={style.loginButton} onClick={() => {
                    connectWallet()
                }}>
                    <BsPerson />
                    <span className={style.loginText}>Log In</span>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar

