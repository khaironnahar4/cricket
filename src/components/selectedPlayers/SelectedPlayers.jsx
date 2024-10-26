import SelectedPlayer from "../selectedPlayer/SelectedPlayer"

const SelectedPlayers = ({selectedPlayers, handleDeletePlayer, setIsAvailable}) => {
  return (
    <div className="mt-6">
        {
            selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.playerId} handleDeletePlayer={handleDeletePlayer} selectedPlayer={selectedPlayer}></SelectedPlayer>)
        }
        <div className="flex items-center justify-center">
        <button onClick={()=> setIsAvailable(true)} className="mt-6 bg-[#E7FE29] py-3 px-5 text-center rounded-xl font-bold hover:bg-slate-100">Add More Player</button>
        </div>
    
  </div>
  )
}

export default SelectedPlayers