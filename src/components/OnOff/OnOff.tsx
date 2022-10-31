import React, {useState} from 'react';
import '../../App.css';


const OnOff = () => {
    const [status, setStatus] = useState(false)
    return (
        <div className='wrapper'>
            <div className='wrapper_onOff'>
                <div onClick={() => {setStatus(true)}} className={`onOff ${status && 'onActive'}`}><h3 className='onOffText'>On</h3></div>
                <div onClick={() => {setStatus(false)}} className={`onOff ${!status && 'offActive'}`}><h3 className='onOffText'>Off</h3></div>
            </div>
            <div className={`indicator ${status && 'onActive'} ${!status && 'offActive'}`}></div>
        </div>
    );
};

export default OnOff;