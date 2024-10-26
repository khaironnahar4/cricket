const AvailablePlayer = ({availablePlayer}) => {
    // console.log(availablePlayer);
    
    const {name,country,image,role,battingType,bowlingType,biddingPrice} = availablePlayer
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="w-full h-60 object-cover object-center overflow-hidden rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
            <i className="fa-solid fa-user"></i> {name}
        </h2>
        <div className="flex justify-between items-center">
        <p className="text-slate-400"><i className="fa-solid fa-flag"></i> {country}</p>
        <button className="bg-slate-100 border border-slate-300 py-3 px-4 rounded-lg">{role}</button>
        </div>
        <hr />
        <h3 className="font-bold py-6">Ratting</h3>
        <div className="flex justify-between items-center">
            <h3 className="font-bold">{battingType}</h3>
            <h3 className="text-slate-400">{bowlingType}</h3>
        </div>
        <div className="flex justify-between items-center">
            <h3 className="font-bold">Price: ${biddingPrice}</h3>
            <button className="bg-transparent border border-slate-300 py-3 px-4 rounded-lg hover:bg-[#E7FE29]">Choose Player</button>
        </div>
        
      </div>
    </div>
  );
};

export default AvailablePlayer;
