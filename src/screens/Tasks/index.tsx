import {styles} from './styles';

import { View, TextInput, Image, TouchableOpacity,Text, FlatList} from 'react-native';
import { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons';

import logoImage from '../../../assets/Logo(3).png';
import clipboard from '../../../assets/Clipboard3x.png';

import {Task} from './../../components/Task';



export default function Tasks(){
    

    const [todos, setTodos] = useState<{}[]>([]);
    const [nameTodo, setNameTodo] = useState("");
    const [completedTasksCount, setCompletedTasksCount] = useState(0);
    const [totalCountTodo, setTotalCountTodo] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    

    function  handleRemoveTask(name: string){
        setTodos(todos.filter(todo => todo!== name));
        setTotalCountTodo(prevCount => prevCount - 1);

        if(completedTasksCount >= 1){
            setCompletedTasksCount(prevCount => prevCount - 1);
        }
    }

    const handleFocus = () => {
        ;
      };
    
console.log(`nome digitado no imput: ${nameTodo}`);
console.log(todos);
console.log(completedTasksCount);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.logo}
                    source={logoImage}
                />
            </View>
            <View style={styles.form}>
                <TextInput 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={text =>setNameTodo(text)}
                    style={[styles.input,isFocused && styles.inputFocused]}
                    value={nameTodo}
                    onFocus={()=> setIsFocused(!isFocused)}
                    onBlur={()=> setIsFocused(!isFocused)}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        setTodos( prevState => [...prevState, nameTodo]);
                        setTotalCountTodo(prevCount => prevCount + 1);
                        setNameTodo("");
                    }}
                >
                    <Text>
                        <FontAwesome name="plus-circle" size={20} color="#FFF" />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.form2}>
                <View style={styles.group}>
                <Text style={styles.subTitle}> Criadas </Text>
                <Text style={styles.radiusNumber}>{totalCountTodo}</Text>
                </View>
                
                <View style={styles.group}>
                <Text style={styles.subTitle2}>Concluídas</Text>
                <Text style={styles.radiusNumber}>{completedTasksCount}</Text>
                </View>
            </View>
            <View  style={styles.form3}>
            <FlatList
                    data={todos}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Task 
                            onCompletedTasksCount={setCompletedTasksCount}
                            onRemove={()=> handleRemoveTask(item)} 
                            name={item}  
                        />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>(
                    <View style={styles.viewListEmpty}>
                        <Text style={styles.viewListEmptyText}>
                            <Image 
                                style={styles.logoClipboard}
                                source={clipboard}
                            />
                        </Text> 

                        <Text style={styles.listEmptyText}>
                            Você ainda não tem tarefas Cadastradas
                        </Text>
                        <Text style={styles.listEmptyText2}>
                            Crie Tarefas e Organize seus itens a fazer
                        </Text>
                          
                       
                    </View>
                )}
                />
            </View>
        </View>
    )
}