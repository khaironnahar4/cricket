const AvailablePlayer = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
            <i className="fa-solid fa-user"></i> Name
        </h2>
        <div className="flex justify-between items-center">
        <p className="text-slate-400"><i className="fa-solid fa-flag"></i> Country</p>
        <button className="bg-slate-100 border border-slate-300 py-3 px-4 rounded-lg">All-rounder</button>
        </div>
        <hr />
        <h3 className="font-bold py-6">Ratting</h3>
        <div className="flex justify-between items-center">
            <h3 className="font-bold">Left-Hand-bat</h3>
            <h3 className="text-slate-400">Left-Hand-bat</h3>
        </div>
        <div className="flex justify-between items-center">
            <h3 className="font-bold">Price: $1500000</h3>
            <button className="bg-transparent border border-slate-300 py-3 px-4 rounded-lg hover:bg-[#E7FE29]">Choose Player</button>
        </div>
        
      </div>
    </div>
  );
};

export default AvailablePlayer;
