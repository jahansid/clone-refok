

function Stripe({val}) {
  return (
    <div className=" w-[16.66%] px-4  py-4 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600 flex items-center justify-between">
        <img src={val.url} 
        style={{width: '100px', height:'20px'}}
        alt="image" />
        <span className=" font-semibold text-sm" > {val.number}</span>
    </div>
  )
}

export default Stripe