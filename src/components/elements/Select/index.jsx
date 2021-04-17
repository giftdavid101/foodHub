import React from 'react';
import './select.style.css'

const Select = () => {
    return (
        <div>
            <form className={'form-select'}>
                <div>
                    <div>Date</div>
                    <input type={'date'}/>
                </div>
                <div>
                    <div>Date</div>
                    <input placeholder={'Time'} type={'time'}/>
                </div>
                <div>
                    <div>Guest</div>
                    <input placeholder={'2 people'} type={'number'}/>
                </div>

            </form>

        </div>
    );
};

export default Select;