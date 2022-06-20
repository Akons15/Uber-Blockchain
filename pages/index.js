import Confirm from "../components/Confirm"
import LocationSelector from "../components/LocationSelector"
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import toast, { Toaster } from 'react-hot-toast';

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-[500px] md:h-full w-[300px] md:w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `no-scrollbar h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-y-scroll`,
}


export const welcomeUser = (toastHandler = toast) => {
  toastHandler.success(
    `Transaction complete!`,
    {
      style: {
        borderRadius: '10px',
      }
    }
  )
}


const Home = () => {
  return (
    <div className={style.wrapper}>
      <Toaster
       position="top-center"
       reverseOrder={false}
      />
      <Navbar />
      <div className={style.main}>
        <div className={style.mapContainer}>
        <Map />
        </div>
        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            <LocationSelector />
            <Confirm />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;