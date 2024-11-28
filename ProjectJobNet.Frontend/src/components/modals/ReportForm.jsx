import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'

import RadioButton from '../pageComponents/RadioButton';
import Report from '../../icons/Report';

export default function ReportForm() {
    const [open, setOpen] = useState(false)
  
    function otherCheck(){
        if (document.getElementById('other').checked) {
            document.getElementById('other-input').className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-0.5";
        }
        else document.getElementById('other-input').className="hidden";
    }

    return (
        <>
        <button className="inline absolute top-0 -right-4 opacity-50 hover:bg-red-300 rounded-full" onClick={() => setOpen(true)}> <Report /> </button>

        <Dialog open={open} onClose={setOpen} className="relative z-30">
            <DialogBackdrop transition 
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"/>
            <div className="fixed inset-0 z-60 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
                <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                <div className="flex items-center justify-between rounded-t border-b py-3 md:py-4 px-5">
                    <Report />
                    <h3 className="text-xl ml-2 font-semibold text-gray-900">Повідомити про порушення</h3>
                    <button type="button" data-autofocus onClick={() => setOpen(false)} className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900">
                        <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
            <div className="py-3 md:py-4 px-5 pb-8">
                <fieldset>
                    <p className="mt-1 font-medium">Причина скарги:</p>
                    <div className="my-4 space-y-3">
                        <RadioButton id="reason1" name="report-reason" text="Причина №1" func={otherCheck}/>
                        <RadioButton id="reason2" name="report-reason" text="Причина №2" func={otherCheck}/>
                        <RadioButton id="reason3" name="report-reason" text="Причина №3" func={otherCheck}/>
                        <RadioButton id="reason4" name="report-reason" text="Причина №4" func={otherCheck}/>
                        <RadioButton id="reason5" name="report-reason" text="Причина №5" func={otherCheck}/>
                        <div className="flex items-center gap-x-2">
                            <input id="other" onClick={otherCheck} name="report-reason" type="radio" className="size-4 border-gray-300 text-sky-400 focus:ring-sky-400" />
                            <label htmlFor="other" className="block text-sm font-semibold text-gray-900">Інше:</label>
                            <input type="text" id="other-input" />
                        </div>
                    </div>
                </fieldset>
                <div>
                    <label for="message" className="block mb-2 font-medium text-gray-900">Коментар:</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button type="submit" 
                    onClick={() => setOpen(false)} className="w-full mt-3 rounded-lg bg-red-600 px-5 py-2.5 text-center font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300">Поскаржитись</button>
            </div>
        </DialogPanel>
      </div>
    </div>
        </Dialog>
    </>
    )
}