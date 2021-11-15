import { useState } from "react";
import ProgressBar from "./ProgressBar";


function PooledSwaps(props) {
    const [filter, setFilter] = useState("Open")
    return (
        <>
        <div className="options-pooled-swaps">
            <button style={{color:"white"}} className="content-toggle-btn sm-btn-swaps" onClick={()=> props.setIsFormVisible(!props.isFormVisible)}>
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6466 2.04953L13.2601 0L0 11.4635L13.2735 22.9269L15.6466 20.8774L4.74627 11.4635L15.6466 2.04953Z" fill="white"/>
</svg>
            </button>
<p className="pooled-swaps-label">MY POOLED SWAPS</p>
            <button onClick={e => setFilter("Open")} className={filter==="Open"?"btns pooled-btns ls active": "btns pooled-btns ls"} >Open</button>
            <button onClick={e => setFilter("Executed")} className={filter==="Executed"?"btns pooled-btns ls active": "btns pooled-btns ls"} >Executed</button>
            <button onClick={e => setFilter("Completed")} className={filter==="Completed"?"btns pooled-btns ls active": "btns pooled-btns ls"} >Completed</button>
            <button onClick={e => setFilter("Cancelled")} className={filter==="Cancelled"?"btns pooled-btns ls active": "btns pooled-btns ls"} >Cancelled</button>
            </div>
    <div className="table-wrapper-outside">
        <div className="table-wrapper">
            <table >
                <thead>
                    <tr>
                        <th>Deposit</th>
                        <th>Receive</th>
                        <th>Status</th>
                        <th>Txn hash</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td> <ProgressBar width={50}/> </td>
                        <td>arrow</td>
                        <td>Cancel</td>
                    </tr>

                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td> <ProgressBar width={50}/> </td>
                        <td>arrow</td>
                        <td>Cancel</td>
                    </tr>

                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td> <ProgressBar width={100}/> </td>
                        <td>arrow</td>
                        <td>Cancel</td>
                    </tr>

                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td> <ProgressBar width={0}/> </td>
                        <td>arrow</td>
                        <td>Cancel</td>
                    </tr>

                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td> <ProgressBar width={23}/> </td>
                        <td>arrow</td>
                        <td>Cancel</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    </>
    );
}

export default PooledSwaps;
