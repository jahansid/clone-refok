import Button from "./Button";

function Nav() {
  const nav = ["Home", "Work", "Culture", "", "News"];
  return (<div className="px-10">
    <div className="py-5  max-w-screen-xl mx-auto flex items-center justify-between border-b-[1px] border-zinc-600 ">
      <div className=" nleft flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Refokuss"
        ></img>

        <div className="links flex gap-16 ml-24 font-satoshi ">
          {nav.map((items, index) =>
            items.length === 0 ? (
              <span key={index} className=" w-[1px] h-4 bg-zinc-400"></span>
            ) : (
              <a
                key={index}
                className=" text-sm capitalize flex items-center gap-1 "
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className=" inline-block w-1 h-1 bg-[#00FF19] rounded-full mb-1"
                  ></span>
                )}

                {items}
              </a>
            )
          )}
        </div>
      </div>
      <Button></Button>
    </div>
    </div>
  );
}

export default Nav;
