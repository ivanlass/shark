import ProgressBar from "./ProgressBar";


function PooledSwaps() {
    return (
    <div className="table-wrapper-outside">
        <div className="table-wrapper">
            <table >
                <thead>
                    <tr>
                        <th>Deposit</th>
                        <th>Receive</th>
                        <th>Gwei</th>
                        <th>Pooled Gwei</th>
                        <th>Txn Hash</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td> <ProgressBar width={22}/> </td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={66}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={100}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={35}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={35}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={35}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={35}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={35}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                    
                    <tr>
                        <td>0.4 BTC</td>
                        <td>4 ETH</td>
                        <td>15</td>
                        <td><ProgressBar width={35}/></td>
                        <td>arrow</td>
                        <td>Wait</td>
                        <td>Cancel</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    );
}

export default PooledSwaps;
