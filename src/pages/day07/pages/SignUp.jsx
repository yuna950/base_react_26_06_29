export default function SignUp() {
  return (
    <div className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <div className="w-[500px] p-5 bg-white rounded-md">
        <h1 className="font-bold text-3xl ">Sign Up</h1>

        <input
          type="text"
          className="w-full p-2 border border-gray-500 rounded-md mt-5"
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-500 rounded-md mt-5"
        />
      </div>
    </div>
  );
}
