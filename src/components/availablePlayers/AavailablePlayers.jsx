import AvailablePlayer from "../availablePlayer/AvailablePlayer"

const AavailablePlayers = ({availablePlayers, handleSelectedPlayers}) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
    {
      availablePlayers.map((availablePlayer => <AvailablePlayer handleSelectedPlayers={handleSelectedPlayers} key={availablePlayer.playerId} availablePlayer={availablePlayer}></AvailablePlayer>))
    }
  </div>
  )
}

export default AavailablePlayers