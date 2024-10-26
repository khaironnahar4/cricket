const SelectedPlayer = () => {
  return (
  <div className="bg-base-100 w-full shadow-xl flex justify-between items-center border border-slate-200 rounded-lg p-6 mb-6">
    <div className="flex items-center gap-6">
        <img className="h-16 w-16 rounded-lg object-cover object-center" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="player" />
        <div>
            <h2 className="text-2xl font-bold">Player Name</h2>
            <p className="text-slate-400">left-hand-bat</p>
        </div>
    </div>
    <div className="text-red-600 text-2xl cursor-pointer"><i className="fa-solid fa-trash"></i></div>
  </div>
  )
};

export default SelectedPlayer;
