import { Modal } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"

export default function SignUpmodal() {
    // const [isOpen, setIsOpen] = useState(true)
    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)
    const isOpen = useSelector(state => state.modal.signupModal)
    console.log('1')
  return (
    <>
    <button 
    onClick={handleOpen}
    className="hover:bg-[#cbd2d7] h-[40px] w-[160px] 
    rounded-full border border-white text-black bg-white ">
    Sign Up
    </button>
    <Modal 
    open={isOpen}
    onClose={handleClose}
    className="flex justify-center items-center"
    >
    <div className="w-[400px] h-[200px] bg-white">
    sign up over here
    </div>
    </Modal>
    </>
  )
}

// 1:20