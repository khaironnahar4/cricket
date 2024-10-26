const SelectedPlayer = ({selectedPlayer, handleDeletePlayer}) => {
    const {name, image, role}= selectedPlayer;
  return (
  <div className="bg-base-100 w-full shadow-xl flex justify-between items-center border border-slate-200 rounded-lg p-6 mb-6">
    <div className="flex items-center gap-6">
        <img className="h-16 w-16 rounded-lg object-cover object-center" src={image} alt="player" />
        <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-slate-400">{role}</p>
        </div>
    </div>
    <div onClick={()=> handleDeletePlayer(selectedPlayer)} className="text-red-600 text-2xl cursor-pointer"><i className="fa-solid fa-trash"></i></div>
  </div>
  )
};

export default SelectedPlayer;
