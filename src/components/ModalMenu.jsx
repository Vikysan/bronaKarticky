import { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from './UI/Button'
import Dot from './UI/Dot'


const ModalMenu = forwardRef(function ModalMenu({ gameChangeHandler }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
      close() {
        dialog.current.close()
      }
    }
  })
  return (
    <dialog ref={dialog} className='w-80 backdrop:bg-sky-300  rounded-xl  bg-stone-900 p-8'>
      <h2 className='text-center font-extrabold mb-4 tracking-widest text-white text-4xl' style={{ fontFamily: 'Handjet' }}>Vyber hru</h2>
      <div className='flex-col space-y-5'>
        <Button  onClick={() => gameChangeHandler("true_or_false")} className="text-stone-400 text-2xl text-left"><Dot className="bg-red-600 " />True or False</Button>
        <Button onClick={() => gameChangeHandler("which_is_better")} className="text-stone-400 text-2xl text-left"><Dot className="bg-green-600 " />Which is better</Button>

        <Button onClick={() => gameChangeHandler("questions")} className="text-stone-400 text-2xl text-left"><Dot className="bg-pink-950 " />Questions</Button>
      </div>
      {/* <form method="dialog">
        <button className='text-right'>Close</button></form> */}
    </dialog>
  )
})

export default ModalMenu

