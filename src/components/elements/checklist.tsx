import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';


export default function ChecklistSent({nombre,index,ancho, color}){
    const [checkBoxStates, setCheckBoxStates] = useState([false, false]);

    const handleCheckBoxClick = (index) => {
        const newCheckBoxStates = [...checkBoxStates];
        newCheckBoxStates[index] = !newCheckBoxStates[index];
        setCheckBoxStates(newCheckBoxStates);
    };
    
    return(

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.styText, {width: ancho, color:color}]}>{nombre}</Text> 
        <CheckBox
          style={styles.styCheck}
          isChecked={checkBoxStates[index]}
          onClick={() => handleCheckBoxClick(index)}
        />

    </View>

    );
}


const styles = StyleSheet.create({
    styCheck: {
      alignItems:'flex-end',
      paddingRight: 10,
      
    },
    styText:{
      paddingRight:4,
      fontSize: 15,
    },
  });



