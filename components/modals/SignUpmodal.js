import { closeSignupModal, openSignupModal } from "@/Redux/ModalSlice"
import { Modal } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

export default function SignUpmodal() {

    const isOpen = useSelector(state => state.modal.signupModal)
    const dispatch = useDispatch()
    console.log(isOpen)


  return (
    <>
    <button 
    onClick={()=> dispatch(openSignupModal())}
    className="hover:bg-[#cbd2d7] h-[40px] w-[160px] 
    rounded-full border border-white text-black bg-white ">
    Sign Up
    </button>
    <Modal 
    open={isOpen}
    onClose={() => dispatch(closeSignupModal())}
    className="flex justify-center items-center"
    >
    <div className="w-[90%] h-[400px] 
    bg-black text-white
    border border-gray-700 rounded-lg
    md:w-[560px] md:h-[600px] 
    flex justify-center
    ">
      <div className="w-[90%] mt-8 flex flex-col">
      <button className="bg-white text-black rounded-md
        w-full font-bold text-lg p-2">
          Sign in as Guest
        </button>
        <h1 className="text-center mt-4 font-bold text-lg">or</h1>
        <h1 className="text-center mt-4 font-bold text-4xl">Create your account</h1>
        <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="fullname" type={"text"} />
        <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="email" type={"email"} />
        <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="password" type={"password"} />
        <button className="bg-white text-black mt-8 rounded-md
        w-full font-bold text-lg p-2">
          Create account
        </button>
      </div>
    </div>
    </Modal>
    </>
  )
}

// 1:20