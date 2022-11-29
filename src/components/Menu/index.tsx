import { View } from 'react-native';
import Logo from '../../assets/logo.svg';

import { styles } from './styles';

import { Input, InputProps } from '../Input';

export function Menu({onAdd, ...rest}: InputProps){
  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <Input onAdd={onAdd} {...rest}/>
    </View>
  )
}