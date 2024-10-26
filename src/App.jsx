import logo from "./assets/logo.png"
import bannerImage from "./assets/banner-main.png"
import footerLogo from "./assets/logo-footer.png"
import AvailablePlayer from "./components/availablePlayer/AvailablePlayer"
import SelectedPlayer from "./components/selectedPlayer/SelectedPlayer"
import { useState } from "react"
import { useEffect } from "react"
import AavailablePlayers from "./components/availablePlayers/AavailablePlayers"
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isAvailable, setIsAvailable] = useState(true)
  const [availablePlayers, setAvailablePlayers] = useState([])
  const [availableCoins, setAvailableCoins] = useState(0)
  const [selectedPlayers, setSelectedPlayers] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data => setAvailablePlayers(data))
  },[])

  const handleAvailableCoins = ()=>{
    const newCoins = availableCoins+1500000;
    setAvailableCoins(newCoins)
  }

  const handleRemainingCoins = (reducedCoins) =>{  
    const remaing = availableCoins-reducedCoins
    setAvailableCoins(remaing)
  } 

  const handleSelectedPlayers = (player)=>{
    const isPlayerSelected = selectedPlayers.find(prevPlayer => player.playerId === prevPlayer.playerId)
    
    if(isPlayerSelected){
      toast.warn('Player Already exist' )
    }
    else{
      if(availableCoins<player.biddingPrice) toast.warn("don't have enough coins")
      else{
        handleRemainingCoins(player.biddingPrice)
        selectedPlayers.length<=5 ? setSelectedPlayers([...selectedPlayers, player]) : toast.warn("6 player already selected")
      }
    }
    
  }

  const handleDeletePlayer = (player =>{
    // console.log(selectedPlayers);  
    const remainingPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerId !== player.playerId)
    setSelectedPlayers([...remainingPlayers])    
  })
  
  
  return (
    <div>
      <header className="w-full h-screen px-[6vw]">
      {/* navbar */}
        <nav className="py-[2.5vh]">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <a className="p-0 m-0 w-full cursor-pointer">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end navbar-end flex lg:hidden">
                {/* nav button */}
                <div tabIndex={0} role="button" className="btn btn-ghost justify-self-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                  <li><a>Home</a></li>
                  <li><a>Fixture</a></li>
                  <li><a>Team</a></li>
                  <li><a>Schedules</a></li>
                  
                  <a className="btn">{availableCoins} Coins </a>
                </ul>
            </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Team</a></li>
              <li><a>Schedules</a></li>
            </ul>
            <a className="btn bg-transparent border border-slate-300 rounded-lg hover:bg-[#E7FE29]">{availableCoins} Coins </a>
          </div>
        </div>
        </nav>
      {/* header */}
        <div className="py-[15vh] 
        bg-[url('./assets/bg-shadow.png')] 
        bg-center 
        bg-cover
        bg-no-repeat
        flex 
        flex-col 
        justify-center 
        items-center
        m-0 p-0 bg-black">
        <img src={bannerImage} alt="banner image" />
        <h1 className="text-4xl py-6 text-white font-bold text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h3 className="text-slate-100">Beyond Boundaries Beyond Limits</h3>
        <button onClick={handleAvailableCoins} className="mt-6 bg-[#E7FE29] py-3 px-5 text-center rounded-xl font-bold hover:bg-slate-100">Claim Free Credits</button>
        </div>
      
      </header>

    {/* player section */}
      <section className="w-full py-[5vh] px-[6vw] mb-[15%]">
        <div className="flex justify-between items-center py-[3vh]">
          <h2 className="text-2xl font-bold">
            {
              isAvailable ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`
            }
          </h2>
          <div>
            <button onClick={()=>setIsAvailable(true)} className={`me-6 py-4 px-5 rounded-lg font-bold border border-slate-300 
              ${isAvailable ? 'bg-[#E7FE29] text-black' : 'bg-transparent text-slate-400'}`}>Available</button>
            <button onClick={()=>setIsAvailable(false)} className={`py-4 px-5 rounded-lg font-bold border border-slate-300
              ${isAvailable ?  'bg-transparent text-slate-400' : 'bg-[#E7FE29] text-black'}`}>Selected ({selectedPlayers.length})</button>
          </div>
        </div>
      {/* available player */}
      {
        (isAvailable) ? <AavailablePlayers handleSelectedPlayers={handleSelectedPlayers} availablePlayers={availablePlayers}></AavailablePlayers> : <SelectedPlayers setIsAvailable={setIsAvailable} handleDeletePlayer={handleDeletePlayer} selectedPlayers={selectedPlayers}></SelectedPlayers>

      }
      {/* selected player */}

  

      </section>

      {/* footer */}
      <footer className="w-full bg-black text-white relative">
      {/* subscribe */}
      <div className="mx-[5vw]">
      <div className="-top-[20%] w-[90%]
      text-black
      p-8 
      border 
      border-slate-300 
      rounded-xl 
      bg-slate-100 
      bg-opacity-30 
      absolute 
      z-50
      -top-6">
        <div className="
        bg-white
        bg-[url('./assets/bg-shadow.png')] 
        bg-cover 
        bg-no-repeat 
        bg-center 
        w-full 
        flex 
        flex-col 
        justify-center 
        items-center
        p-11
        rounded-xl">
          <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
          <p className="my-6">Get the latest update and news right in your inbox!</p>
          <div className="text-slate-300">
              <input type="text" placeholder="Enter your email" className="py-3 px-5 rounded-lg border border-slate-300 me-6"/>
              <button className="py-3 px-3 rounded-lg bg-gradient-to-r from-[#df5de3] from-30% to-[#b3b400] to-90% text-black font-bold">Subscribe</button>
          </div>
        </div>
      </div>
      </div>
        <div className="px-[5vw] pb-14 pt-[35vh]">
        <img src={footerLogo} alt="logo" className="mx-auto"/>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-between items-start gap-[10vw] py-[5vh]">
          <div>
            <h3 className="font-bold text-xl pb-4">About Us</h3>
            <p className="text-slate-400">We are a passionate team dedicated to providing the best services to our customer</p>
          </div>
          <div className="mx-auto">
            <h3 className="font-bold text-xl pb-4">Quick Links</h3>
            <ul className="text-slate-400">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl pb-4">Subscribe</h3>
            <p className="text-slate-300 pb-4">Subscribe to our newslatter for our latest updates.</p>
            <div className="text-slate-300">
              <input type="text" placeholder="Enter your email" className="py-3 px-5 rounded-l-lg"/>
              <button className="py-3 px-3 rounded-r-lg bg-gradient-to-r from-[#df5de3] from-30% to-[#b3b400] to-90% text-black font-bold">Subscribe</button>
            </div>
          </div>
        </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="text-slate-100 py-6">@2024 all right reserve to Khairun Nahar</p>
        </div>
      </footer>
      <ToastContainer position="top-center"/>
    </div>
  )
}

export default App
