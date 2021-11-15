import { useState } from 'react';
import Form from './Form'
import PooledSwaps from './PooledSwaps';

function MainContent() {
    const [isFormVisible, setIsFormVisible] = useState(true)
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-10 offset-1">
                <div className="main-content-wrapper mt-5">

                         {isFormVisible &&   <button style={{color:"white"}} className="content-toggle-btn" onClick={()=> setIsFormVisible(!isFormVisible)}>
                                View Pooled Swaps >
                            </button>}

                    {isFormVisible ? <Form /> : <PooledSwaps isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>}
                </div>
            </div>
        </div>
    </div>
    
    
    );
}

export default MainContent;
