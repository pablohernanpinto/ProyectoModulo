import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import ChecklistSent from './elements/checklist';
import InputText from './elements/inputText';
import { SelectList } from 'react-native-dropdown-select-list';

export default function REBRP61COMP() {
    const [checkBoxStates, setCheckBoxStates] = useState([false, false]);
    const [text, onChangeText] = React.useState('');
    const [text1, onChangeText1] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [text3, onChangeText3] = React.useState('');
    const [text4, onChangeText4] = React.useState('');
    const [text5, onChangeText5] = React.useState('');
    const [text6, onChangeText6] = React.useState('');
    const [text7, onChangeText7] = React.useState('');
    const [text8, onChangeText8] = React.useState('');
    const elementos = ['Retiro Planta', 'Embarque','Otro'];
    const elementosIzq1 = ['Lote Nr.','Lote Nr','Nr de Envases','Patente Camión'];
    const elementosizq2 = ['JCManzana','JCPera','JCFrambuesa','JCDurazno','Aroma','Manz Cloudy','JCFrutilla'];
    const elementosDer2 = ['JCCiruelas secas','JCUva','JCCiruela','Pasta Tomate','Pulpa Manzana','Pulpa Durazno'];
    const elementosIzq3 = ['51,8','52','53,7','54,7','55','60','300','Flexi','Otro'];
    const elementosDer3 = ['Peso neto', 'Peso bruto','Tara'];
    const elementosDer3dos = ['T. Métalico','B. Plástico','Tote Bins','Flexi/Iso Bag']
    const elementosFinal  = ['REVISION PESO ETIQUETA DE ENVASADO', 'REVISION FECHA ETIQUETA DE ENVASADO']


    const [selected, setSelected] = React.useState("");
    const TipoDeEnvio = [
        {key:'1', value:'Retiro Planta', },
        {key:'2', value:'Embarque'},
        {key:'3', value:'Otro'},
    ]

    const [producto, setProducto] = React.useState("");

    const Producto = [
        {key:'1', value:'JCManzana', },
        {key:'2', value:'JCPera'},
        {key:'3', value:'JCFrambuesa'},
        {key:'4', value:'JCDurazno'},
        {key:'5', value:'Aroma'},
        {key:'6', value:'Manz Cloudy'},
        {key:'7', value:'JCFrutilla'},

    ]
  
  return (

    <View>
        <Text style = {styles.titulo}>
            Tipo de Envio
        </Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={TipoDeEnvio} 
        save="value"
        />


        <Text style = {styles.titulo}>Producto</Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={Producto} 
        save="value"
        />
    </View>



  )}

  const styles = StyleSheet.create({
    container:{
        borderRadius: 4,
        borderWidth: 3,
        margin: 5,

    },
    
    subContainer: {
      margin: 5,
      flexDirection:'row',
  
    },
    leftColumn:{
      alignItems: 'flex-start',
      paddingLeft: 3,
  
    },
  
    rightColumn:{
      paddingLeft:3,
      alignItems: 'flex-end'
  
    },
    titulo: {
      fontWeight: 'bold', 
      fontSize: 17,
      paddingLeft:10,
      paddingBottom: 10,
      paddingRight:4,
    }
  });