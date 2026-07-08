import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

export default function Login() {
  const {
    register,
    // ^ 등록
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  console.log(isValid);

  const onSubmit = (data) => {
    // console.log(data);
    // => data = 유저가 인풋에 입력한 내용을 객체로 반환받음
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] w-full p-12 bg-white rounded-xl shadow flex flex-col"
      >
        <h1 className="font-bold text-3xl mb-3">LOGIN</h1>

        <input
          {...register("username", {
            required: "*아이디는 필수입니다",
            // ^필수
          })}
          className="p-2 border border-gray-300 rounded-md "
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage message={errors?.username?.message} />
        {/*  체이닝 연산자 */}

        <input
          {...register("password", {
            required: "*패스워드는 필수입니다",
            minLength: {
              value: 8,
              message: "패스워드는 최소 8자 이상 입력해주세요",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
              //   => 정규식. 자바스크립트에서는 슬래시 안쪽에 넣어야함
              message: "영문과 숫자를 포함해야합니다.",
            },
          })}
          className="p-2 border border-gray-300 rounded-md mt-3"
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage message={errors?.password?.message} />

        <button
          className={`w-full rounded-md p-2 font-bold text-white cursor-pointer mt-3 
            ${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"}`}
        >
          로그인
        </button>
      </form>
    </div>
  );
}
