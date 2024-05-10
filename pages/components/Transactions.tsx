import React, { useState } from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ObjectDataComponent from './ObjectRender';

interface TransactionData {
  txnId: string;
  txnType: string;
  party: string;
  acct: string;
  service: string;
  acctType: string;
  prfdAcct: string;
  sttlmtAmt: string;
  sttlmtCur: string;
  execDt: string;
  mop: string;
  mopBizzDt: string;
  valueDt: string;
  mopProfile: string;
  mopCur: string;
  charges: string;
}

interface AppHeaderData {
  dbtrId: string;
  cdtrId: string;
  bizMsgId: string;
  msgType: string;
  creationDt: string;
  // Add an index signature to allow dynamic property access
  [key: string]: string;
}
// interface Props {
//   data: TransactionData;
//   headerData: { appHdr: AppHeaderData };
// }

const Transactions:  React.FC= () => {
   const [transactionData,setTransactionData]=useState({  "txnId": "IPTXN20240812000001",  "txnType": "CCT",  "party": "HDFC NY",  "acct": "12345",  "service": "Payments",  "acctType": "DDA",  "prfdAcct": "NO","prfdCur":"USD", "sttlmtAmt": "25000",  "sttlmtCur": "USD",  "execDt": "08082024T12:35.56.000",  "mop": "FEDNOW",  "mopBizzDt": "8092024",  "valueDt": "8092024",  "mopProfile": "RealTimePayments",  "mopCur": "USD",  "charges": "Nil" })
   const [headerData,setHeaderData]=useState({"appHdr": {    "dbtrId": "21040078",    "cdtrId": "21150706",    "bizMsgId": "20230604021040078Sc04Step5aMsgId",    "msgType": "pacs.008.001.08",    "creationDt": "2023-06-04T11:55:30-04:00"   },  "grpHdr": {    "msgId": "20220701021000018EKSGUZS12618216417",    "creDtTm": "2022-07-01T14:47:13.7511489-04:00",    "sttlmMtd": "CLRG",    "cd": "FDN"   },  "pmtDtls": {    "instrId": "20220701021000018EKSGUZS12618216417",    "lclInstrm": "FDNA",    "endToEndId": "3487393749394",    "ctgyPurp": "GOVT",    "chrgBr": "SLEV",    "intrBkSttlmtDt": "2024-05-07",    "intrBkSttlmtAmt": "10000",    "instgAgt": "21000678",    "instdAgt": "999999996"   },  "dbtr": {    "nm": "BNYM TEST DEBTOR",    "dbtrAcct": "31234567"   },  "cdtr": {    "nm": "BNYM TEST CREDITOR",    "cdtrAcct": "9999999971111112"   },  "cdtrAgt": {    "cd": "USABA",    "mmbId": "999999996"   },  "dbtrAgt": {    "cd": "USABA",    "mmbId": "21000018",    "nm": "Citi Bank"   },  "ultmDbtr": {    "nm": "satya",    "lEI": "987654321"   },  "ultmCdtr": {    "nm": "karthik",
   "lEI": "9876545321"   },
 "rmtInf": {
   "strd": "string"   }})
   const [groupHedaer,setGroupHeader]=useState({...headerData.appHdr});

   const [hdrop1,setshowhdrop1]=useState('hidden');
   const [hdrop2,setshowhdrop2]=useState('hidden');
   const [hdrop3,setshowhdrop3]=useState('hidden');
   const [hdrop4,setshowhdrop4]=useState('hidden');
   const [hdrop5,setshowhdrop5]=useState('hidden');
   const [hdrop6,setshowhdrop6]=useState('hidden');
   const [hdrop7,setshowhdrop7]=useState('hidden');
   const [hdrop8,setshowhdrop8]=useState('hidden');
   const [hdrop9,setshowhdrop9]=useState('hidden');
   

  return (
    <div className='flex flex-col gap-[20px] '>
        <span className=''>Transactions -&gt; Customer Credit Transfer -&gt; IPTXN20240812000001</span>
        <div className='w-auto flex flex-wrap gap-[20px] border-solid border-[2px] border-black p-[20px] rounded-[20px]'>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Txn ID:{transactionData.txnId}</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Txn Type:{transactionData.txnType}</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Party :<a href='#' className='text-[blue] underline'>{transactionData.party}</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Account # : <a href='#' className='text-[blue] underline'>{transactionData.acct}</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Service : <a href='#' className='text-[blue] underline'>{transactionData.service}</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Account Type: <a href='#' className='text-[blue] underline'>{transactionData.acctType}</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Preferred Account : {transactionData.prfdAcct}</div>
           <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Preferred Currency :{transactionData.prfdCur}</div>
        </div>
        <div className='w-auto flex flex-wrap gap-[20px] border-solid border-[2px] border-black p-[20px] rounded-[20px]'>
            <div className='h-[40px] bg-[lightgray] w-[300px] text-center rounded-[5px] p-[5px]'>Settlement Amount:{transactionData.sttlmtAmt}</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Settlement Currency: {transactionData.sttlmtCur}</div>
            <div className='h-[40px] bg-[lightgray] w-[350px] text-center rounded-[5px] p-[5px]'>Execution Date:{transactionData.txnId}</div>
            <div className='h-[40px] bg-[lightgray] text-center rounded-[5px] p-[5px]'>MOP: <a href='#' className='text-[blue] underline'>{transactionData.mop}</a></div>
            <div className='h-[40px] bg-[lightgray] w-[300px] text-center rounded-[5px] p-[5px]'>MOP Business Date: {transactionData.mopBizzDt}</div>
            <div className='h-[40px] bg-[lightgray] w-[300px] text-center rounded-[5px] p-[5px]'>Value Date: {transactionData.valueDt}</div>
            <div className='h-[40px] bg-[lightgray] w-[300px] text-center rounded-[5px] p-[5px]'>MOP Profile: <a href='#' className='text-[blue] underline'>{transactionData.mopProfile}</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>MOP Curreny:{transactionData.mopCur}</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px] p-[5px]'>Charges: {transactionData.charges}</div>
        </div>
        <div className='flex flex-col gap-[10px] '>
               <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop9=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop9(x);
                                    }}>
                            <div className='mt-[10px]'>Business App Header</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop9}>
                         <div>
                              <ObjectDataComponent objectData={headerData.appHdr} />
                         </div>
                    </div>
               </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop1=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop1(x);
                                    }}>
                            <div className='mt-[10px]'>Group Header</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop1}>
                         <div>
                              <ObjectDataComponent objectData={headerData.grpHdr} />
                         </div>
                    </div>
               </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop2=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop2(x);
                                    }}>
                            <div className='mt-[10px]'>Debtor</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop2}>
                         <div>
                              <ObjectDataComponent objectData={headerData.dbtr} />
                         </div>
                    </div>
              </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop3=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop3(x);
                                    }}>
                            <div className='mt-[10px]'>Debtor Agent</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop3}>
                         <div>
                              <ObjectDataComponent objectData={headerData.dbtrAgt} />
                         </div>
                    </div>
              </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop4=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop4(x);
                                    }}>
                            <div className='mt-[10px]'>Ultimate Debtor</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop4}>
                         <div>
                              <ObjectDataComponent objectData={headerData.ultmDbtr} />
                         </div>
                    </div>
              </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop5=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop5(x);
                                    }}>
                            <div className='mt-[10px]'>Creditor</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop5}>
                          <div>
                              <ObjectDataComponent objectData={headerData.cdtr} />
                         </div>
                    </div>
              </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop6=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop6(x);
                                    }}>
                            <div className='mt-[10px]'>Creditor Agent</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop6}>
                          <div>
                              <ObjectDataComponent objectData={headerData.cdtrAgt} />
                         </div>
                    </div>
              </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop7=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop7(x);
                                    }}>
                            <div className='mt-[10px]'>Ultimate Creditor</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop7}>
                         <div>
                              <ObjectDataComponent objectData={headerData.ultmCdtr} />
                         </div>
                    </div>
              </div>
              <div >
                    <div className='bg-[gray] h-[50px] rounded-[5px] text-[white] text-[20px] pl-[20px] pr-[20px] flex justify-between' onClick={()=>{
                                    let x=hdrop8=='hidden'?'block rounded-[10px] ml-[50px] z-[1] mt-[5px]':'hidden';
                                    setshowhdrop8(x);
                                    }}>
                            <div className='mt-[10px]'>Remittance Information</div><div><ChevronRightSharpIcon className='text-[yellow] font-bold text-[50px] mt-[0px]'/></div>
                    </div>
                    <div className={hdrop8}>
                          <div>
                              <ObjectDataComponent objectData={headerData.rmtInf} />
                         </div>
                    </div>
              </div>
             {/* <div className='bg-[gray] h-[40px] rounded-[5px] p-[5px] text-[white] text-[20px] pl-[20px]'>Remittance Information</div> */}
        </div>
        <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
    </div>
  )
}

export default Transactions


// { "appHdr": {    "dbtrId": "21040078",    "cdtrId": "21150706","bizMsgId": "20230604021040078Sc04Step5aMsgId",    "msgType": "pacs.008.001.08",    "creationDt": "2023-06-04T11:55:30-04:00"   },
//   "grpHdr": {    "msgId": "20220701021000018EKSGUZS12618216417","creDtTm": "2022-07-01T14:47:13.7511489-04:00",    "sttlmMtd": "CLRG",    "cd": "FDN"   },
//   "pmtDtls": {    "instrId": "20220701021000018EKSGUZS12618216417","lclInstrm": "FDNA",    "endToEndId": "3487393749394",    "ctgyPurp": "GOVT",    "chrgBr": "SLEV",    "intrBkSttlmtDt": "2024-05-07",    "intrBkSttlmtAmt": "10000",    "instgAgt": "21000678",    "instdAgt": "999999996"   },  
//   "dbtr": {    "nm": "BNYM TEST DEBTOR",    "dbtrAcct": "31234567"},  
//   "cdtr": {    "nm": "BNYM TEST CREDITOR",    "cdtrAcct": "9999999971111112"   },  
//   "cdtrAgt": {    "cd": "USABA",    "mmbId": "999999996"   },
//   "dbtrAgt": {    "cd": "USABA",    "mmbId": "21000018",    "nm": "Citi Bank"   },
//   "ultmDbtr": {    "nm": "satya",    "lEI": "987654321"   },  
//   "ultmCdtr": {    "nm": "karthik", "lEI": "9876545321"   },
//   "rmtInf": {"strd": "string"   }
// }