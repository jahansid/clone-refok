import Button from "./Button";

function Product({val}) {
  return (
    <div className=" w-full px-10">
      <div className=" max-w-screen-xl py-6 mx-auto text-white flex justify-between items-center">
        <h1 className=" text-5xl font-medium capitalize">{val.title}</h1>
        <div className="w-1/4 mr-28">
          <p className="mb-10">
            {val.desc}
          </p>
          <div className="flex items-center gap-2">
          {val.live && <Button title= "Live Website"/>}
          {val.case && <Button title = "Case Study" />}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
