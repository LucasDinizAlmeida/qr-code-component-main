

export function Card() {

  return (
    <div className="bg-white w-[390px] min-h-[550px] rounded-3xl p-5 shadow-lg">
      <div className="bg-cyan-700 w-full h-2/3 rounded-xl flex items-center justify-center p-14">
        <img src="./mentoreditado.png" alt="qrcode" className="w-[100%] h-[100%]" />
      </div>

      <div className="px-8">
        <h2 className="text-center text-2xl text-gray-800 font-bold mt-5">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-center text-base text-cyan-600 mt-5 pb-5">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}