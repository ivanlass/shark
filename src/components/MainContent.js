import { useState } from 'react';
import Form from './Form'
import PooledSwaps from './PooledSwaps';

function MainContent() {
    const [isFormVisible, setIsFormVisible] = useState(true)
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-2">
                <div className="main-content-wrapper">
                    <div className="row">
                        <div className="col-md-4 left mb-3">
                            <button style={{color:"white"}} className="content-toggle-btn" onClick={()=> setIsFormVisible(!isFormVisible)}>
                                {isFormVisible ? "View Pooled Swaps >": "< Go back"}
                            </button>
                        </div>
                    </div>
                    
                    {isFormVisible ? <Form /> : <PooledSwaps />}
                </div>
            </div>
        </div>
    </div>
    
    
    );
}

export default MainContent;
