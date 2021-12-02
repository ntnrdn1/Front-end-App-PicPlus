import React from 'react';

import {InputArea, Input} from './styles';

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#C2C2C2" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#C2C2C2"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
