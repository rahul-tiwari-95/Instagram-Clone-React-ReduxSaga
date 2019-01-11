const validate = (val , rules , connectedValue)=>{

    let isValid = true;

    for(let rule of rules){

        switch(rule){
            case 'isEmail':
                //Email Validator Code
                isValid = isValid && emailValidation(val);
                break;
            
            case 'minLength':
                // Minimum Length Code
                isValid = isValid && minLengthValidation(val , rules[rule]);
                break;

            case 'equalTo':
                //Equal to Password Code
                isValid = isValid && equalToValidation(val , connectedValue[rule]);
                break;

            
            default:
            isValid=true;

            
        }
    }
}

const emailValidation = (val)=>{

    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);

    //Test will resturn True or False


}

const minLengthValidation =(val , minLength)=>{

    return val.length >= minLength;

}

const equalToValidation =(val , equalTo)=>{

    return val === checkValue


}

export default validate;