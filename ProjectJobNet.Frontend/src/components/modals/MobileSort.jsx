'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'

import RadioButton from '../pageComponents/RadioButton';
import Sort from "/src/icons/Sort";

export default function SignIn(){
    const [open, setOpen] = useState(false)
  
    return (
    <>
        <button onClick={() => setOpen(true)} className="hover:bg-sky-200 rounded-full px-3"> <Sort width="24" height="24"/> </button>

            <Dialog open={open} onClose={setOpen} className="relative z-30">
                <DialogBackdrop transition 
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"/>
                <div className="fixed inset-0 z-60 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
                    <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in my-8 w-8/12 max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                    <div className="flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Сортування
                        </h3>
                        <button type="button" data-autofocus onClick={() => setOpen(false)} className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="py-4 px-6">
                        <form className="space-y-4" action="#">
                        <p className="mt-1 font-medium">За датою</p>
                        <div className="my-4 space-y-3">
                        <RadioButton id="CreateAt DES" name="sort" text="Від нових до старих" selected/>
                        <RadioButton id="CreateAt ASC" name="sort" text="Від старих до нових"/>
                        </div>
                        <p className="mt-1 font-medium">За зарплатою</p>
                        <div className="my-4 space-y-3">
                        <RadioButton id="Salary ASC" name="sort" text="За зростанням"/>
                        <RadioButton id="Salary DES" name="sort" text="За спаданням"/>
                        </div>
                            <button type="submit" onClick={() => setOpen(false)} className="w-full text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg px-5 py-2.5 text-center">Відсортувати</button>
                        </form>
                    </div>
            </DialogPanel>
          </div>
        </div>
            </Dialog>
    </>
    )
}