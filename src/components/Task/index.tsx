import {styles} from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons';

type Props = { 
  name: string;
  isChecked: boolean;
  prevCount: number;
  handleCheck: () => void;
  
  onRemove: () => void;
  onCompletedTasksCount: () => void;
}

export function Task({name, onRemove, onCompletedTasksCount}: Props){

  const [isChecked, setIsChecked] = useState(false);

    function handleCheck(){
      setIsChecked(!isChecked);
      onCompletedTasksCount(prevCount => isChecked ? prevCount - 1 : prevCount + 1);
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity  
            style={styles.button} 
            onPress={handleCheck}
            >
            {isChecked ? (
              <Text style={styles.checktext}>
                <FontAwesome name="check" size={14} color="white"  />
              </Text>
             ) : (
              <Text style={styles.checktext2}>
                <FontAwesome name="circle" size={14} color="#333" />
              </Text>
            )}
            </TouchableOpacity>
                <Text style={[styles.descriptionTask, isChecked && styles.underline]}> 
                    {name}
                </Text>

              <TouchableOpacity  
                style={styles.button2} 
                onPress={onRemove}
              >
                 <FontAwesome name="trash-o" size={17} color="#808080" />
              </TouchableOpacity>
        </View>

    )
}