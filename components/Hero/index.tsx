import ArrowAnim from "../ArrowAnim";

export default function Hero({ innerRef }:any) {
  return (
    <div
      ref={innerRef}
      style={{
        backgroundImage: `url(bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white min-h-screen px-2 backdrop-blur flex justify-center items-center flex-col">
        <p
          style={{ fontSize: "3rem" }}
          className=" text-white text-center font-semibold"
        >
          YOSEF WORKU
        </p>
        <p style={{ color: "#48f" }}>⎼⎼⎼⎼⎼⎼⎼⎼</p>
        <span
          style={{ fontSize: "2rem" }}
          className=" text-white text-center font-thin"
        >
          Android & FullStack Developer
        </span>
        <ArrowAnim />
      </div>
    </div>
  );
}
