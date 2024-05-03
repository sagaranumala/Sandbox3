import React from 'react'

const Transactions = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
        <span className=''>Transactions -&gt; Customer Credit Transfer -&gt; IPTXN20240812000001</span>
        <div className='w-auto flex flex-wrap gap-[20px] border-solid border-[2px] border-black p-[20px] rounded-[20px]'>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Txn ID: IPTXN20240812000001</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Txn Type: CCT</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Party :<a href='#' className='text-[blue] underline'>HDFC NY</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Account # : <a href='#' className='text-[blue] underline'>012345</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Service : <a href='#' className='text-[blue] underline'>Payments</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Account Type: <a href='#' className='text-[blue] underline'>DDA</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Preferred Account : NO</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Preferred Account : NO</div>
        </div>
        <div className='w-auto flex flex-wrap gap-[20px] border-solid border-[2px] border-black p-[20px] rounded-[20px]'>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Settlement Amount: 25000.00</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Settlement Currency: USD</div>
            <div className='h-[40px] bg-[lightgray] w-[300px] text-center rounded-[5px] p-[5px]'>Execution Date: 08082024T12:35.56.000</div>
            <div className='h-[40px] bg-[lightgray] w-[200px] text-center rounded-[5px] p-[5px]'>MOP: <a href='#' className='text-[blue] underline'>FEDNOW</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>MOP Business Date: 08092024</div>
            <div className='h-[40px] bg-[lightgray] w-[280px] text-center rounded-[5px] p-[5px]'>Value Date: 08082024T12:35.56.000</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>MOP Profile: <a href='#' className='text-[blue] underline'>Realtime Payments</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>MOP Curreny: USD</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Charges: Nil</div>
        </div>
        <div className='flex flex-col gap-[10px] '>
             <div className='bg-[gray] h-[40px] rounded-[5px] p-[5px] text-[white] text-[20px] pl-[20px]'>Payment Header</div>
             <div className='bg-[gray] h-[40px] rounded-[5px] p-[5px] text-[white] text-[20px] pl-[20px]'>Debtor Agent</div>
             <div className='bg-[gray] h-[40px] rounded-[5px] p-[5px] text-[white] text-[20px] pl-[20px]'>Creditor Agent</div>
             <div className='bg-[gray] h-[40px] rounded-[5px] p-[5px] text-[white] text-[20px] pl-[20px]'>Remittance Information</div>
        </div>
    </div>
  )
}

export default Transactions
