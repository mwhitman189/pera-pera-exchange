import { useState } from 'react';


export default (initialValue) => {
    const [ value, setValue ] = useState(initialValue);
    const handleChange = (e) => {
        if (e.target) {
            setValue(e.target.value);
        } else {
            setValue(e);
        }
    };
    const reset = () => {
        setValue('');
    };
    return [ value, handleChange, reset ];
};
