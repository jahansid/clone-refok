function Marquee({ imgurls }) {
  return (
    <div className=" flex w-full gap-20 py-6 overflow-hidden whitespace-nowrap">
      {imgurls.map((url, index) => (
        <img key={index} src={url} className=" flex-shrink-0 w-[6em]" />
      ))}
      {imgurls.map((url, index) => (
        <img key={index} src={url} className=" flex-shrink-0 w-[6em]" />
      ))}
    </div>
  );
}

export default Marquee;
