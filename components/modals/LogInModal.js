
import { closeLoginModal, openLoginModal, openSignupModal } from "@/Redux/ModalSlice"
import { Modal } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

export default function LogInmodal() {

    const isOpen = useSelector(state => state.modal.loginModal)
    const dispatch = useDispatch()
    console.log(isOpen)


  return (
    <>
    <button 
    onClick={()=> dispatch(openLoginModal())}
    className="hover:bg-[#cbd2d7] h-[40px] w-[160px] rounded-full border border-white text-white bg-transparent"
    >
    Log In
    </button>
    <Modal 
    open={isOpen}
    onClose={() => dispatch(closeLoginModal())}
    className="flex justify-center items-center"
    >
    <div className="w-[90%] h-[400px] 
    bg-black text-white
    border border-gray-700 rounded-lg
    md:w-[560px] md:h-[600px] 
    flex justify-center 
    ">
      <div className="w-[90%] mt-8 flex flex-col">
        <h1 className="p-3 mt-4 font-bold text-4xl text-left">Sign in to your account</h1>
        <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="email" type={"email"} />
        <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="password" type={"password"} />
        <button className="bg-white text-black rounded-md mt-8
          w-full font-bold text-lg p-2">
            Sign in
          </button>
        <h1 className="text-center mt-4 font-bold text-xl">or</h1>
        <button 
        // onClick={() => dispatch(openSignupModal())}
        className="bg-white text-black mt-8 rounded-md
        w-full font-bold text-lg p-2">
          Sign in as Guest
        </button>
      </div>
    </div>
    </Modal>
    </>
  )
}

// 1:20
