export const feedbackValidate = inputs => {
    const errors = {};
    if (!inputs.email) {
      errors.email = 'Введите ваш email';
    }
    
    if(inputs.email && inputs.email.length < 3){
        errors.email = 'Слишком коротко'
    }
    
    if (!inputs.msg) {
      errors.msg = 'Вы забыли ввести сообщение';
    }
    return errors;
  };

  export const requiredInput = (input) => {
    return input ? undefined : `Требуется ввод`;
  }
  
  export const correctInput = (input) => {
      return input.length < 3 ? 'Слишком короткий email' : undefined;
  }

  export const matchInput = (input, allInputs) => {
    return input === allInputs.email ? undefined :'Emailы не совпадают';
  }
  
  