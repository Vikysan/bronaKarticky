import { forwardRef, useImperativeHandle, ref, useRef } from 'react'
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
    <dialog ref={dialog} className='w-80 backdrop:bg-sky-300  rounded-xl  bg-stone-900'>
      <h2 className='text-center font-extrabold mb-4 text-white text-4xl' style={{"font-family": 'Handjet'}}>Vyber hru</h2>
      <ul className='px-4'>
        <li><Button onClick={() => gameChangeHandler("true_or_false")} className="text-stone-400 text-2xl text-left"><Dot className="bg-red-600 "/>True or False</Button></li>
        <li><Button onClick={() => gameChangeHandler("which_is_better")} className="text-stone-400 text-2xl text-left"><Dot className="bg-green-600 "/>Which is better</Button></li>
        
        <li><Button onClick={() => gameChangeHandler("questions")} className="text-stone-400 text-2xl text-left"><Dot className="bg-pink-950 "/>Questions</Button></li>
      </ul>
      {/* <form method="dialog">
        <button className='text-right'>Close</button></form> */}
    </dialog>
  )
})

export default ModalMenu

