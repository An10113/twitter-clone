import { closeSignupModal, openSignupModal } from "@/Redux/ModalSlice"
import { Modal } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "@/firebase"
import { setUser } from "@/Redux/userSlice"
import { useRouter } from "next/router"

export default function SignUpmodal() {

    const isOpen = useSelector(state => state.modal.signupModal)
    const dispatch = useDispatch()


    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    async function handleGuestSignIn(){
      await signInWithEmailAndPassword(
        auth,
        'guest0000@gmail.com',
        'Guest1000'
      )
  }

   async function handleSignUp(){
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:`/assets/pfp/pfp${Math.ceil(Math.random() * 6)}.png`
      })
      router.reload()

    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        if (!currentUser) return;
        dispatch(setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        }))
        console.log(currentUser)
    })
      return unsubscribe
    },[])

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
      <button
        onClick={handleGuestSignIn}
        className="bg-white text-black rounded-md
        w-full font-bold text-lg p-2">
          Sign in as Guest
        </button>
        <h1 className="text-center mt-4 font-bold text-lg">or</h1>
        <h1 className="text-center mt-4 font-bold text-4xl">Create your account</h1>
        <input 
        onChange={e => setName(e.target.value)} 
        className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" 
        placeholder="fullname" type={"text"} />
        <input
        onChange={e => setEmail(e.target.value)} 
        className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" 
        placeholder="email" type={"email"} required/>
        <input
        onChange={e => setPassword(e.target.value)} 
        className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" 
        placeholder="password" type={"password"} required/>
        <button
        onClick={handleSignUp}
        className="bg-white text-black mt-8 rounded-md
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