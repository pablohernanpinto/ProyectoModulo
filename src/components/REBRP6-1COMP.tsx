import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
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

    const elementosIzq1 = ['Lote Nr.','Lote Nr','Nr de Envases','Patente Camión', 'Cliente','Peso neto', 'Peso bruto','Tara'];
    const elementosizq2 = ['JCManzana','JCPera','JCFrambuesa','JCDurazno','Aroma','Manz Cloudy','JCFrutilla'];
    const elementosDer2 = ['JCCiruelas secas','JCUva','JCCiruela','Pasta Tomate','Pulpa Manzana','Pulpa Durazno'];
    const elementosIzq3 = ['51,8','52','53,7','54,7','55','60','300','Flexi','Otro'];

    const elementosFinal  = ['REVISION PESO ETIQUETA DE ENVASADO', 'REVISION FECHA ETIQUETA DE ENVASADO']




    const [mostrarInputOtro, setMostrarInputOtro] = React.useState(false);
    const [Envio, setEnvio] = React.useState("");
    const TipoDeEnvio = [
        {key:'1', value:'Retiro Planta', },
        {key:'2', value:'Embarque'},
        {key:'3', value:'Otro'},
    ]



    const [mostrarInputOtroProducto, setMostrarInputOtroProducto] = React.useState(false);
    const [producto, setProducto] = React.useState("");
    const Producto = [
        {key:'1', value:'JCManzana', },
        {key:'2', value:'JCPera'},
        {key:'3', value:'JCFrambuesa'},
        {key:'4', value:'JCDurazno'},
        {key:'5', value:'Aroma'},
        {key:'6', value:'Manz Cloudy'},
        {key:'7', value:'JCFrutilla'},
        {key:'8', value:'Otro'},

    ]

    const [TipoDeEnvase, setTipoDeEnvase] = React.useState("");
    const Envase = [
        {key:'1', value:'T. Métalico', },
        {key:'2', value:'B. Plástico'},
        {key:'3', value:'Tote Bins'},
        {key:'4', value:'Flexi/Iso Bag'},
    ]
  
  return (

    <View style = {styles.Container}>
       <View style= {styles.firstContainer}>
          
          <Text style = {styles.titulo}>
                Tipo de Envio
          </Text>
          <SelectList 
          
            boxStyles={styles.box}
            dropdownStyles={styles.box}
            setSelected={(val) => {setEnvio(val);
              if(val === 'Otro') {
                setMostrarInputOtro(true);
              } 
              else {
                setMostrarInputOtro(false);
              }
              }} 
            data={TipoDeEnvio} 
            save="value"
            />

          {mostrarInputOtro && (<TextInput
              style={styles.inputOtros}
              onChangeText={onChangeText}
              value={text}
              placeholder="Especifique otro tipo de envio "
              placeholderTextColor="#a9a9a9"
              />
            )}

          <Text style = {styles.titulo}>Producto</Text>
          <SelectList 
            boxStyles={styles.box}
            dropdownStyles={styles.box}
            setSelected={(val) => {setProducto(val);
              if(val === 'Otro') {
                setMostrarInputOtroProducto(true);
              } 
              else {
                setMostrarInputOtroProducto(false);
              }
            }}        
            data={Producto} 
            save="value"
          />

          
          {mostrarInputOtroProducto && (
            <TextInput
              style={styles.inputOtros}
              onChangeText={onChangeText}
              value={text}
              placeholder="Especifique otro producto "
              placeholderTextColor="#a9a9a9"
              />
          )}

          <View style = {{flexDirection: 'column'}}>
              {elementosIzq1.map((elementosIzq1, index) => (
              <InputText key={index} nombre={elementosIzq1} ancho ={"90%"} />
              ))}

          <Text style = {styles.titulo}>Producto</Text>
          <SelectList 
            boxStyles={styles.box}
            dropdownStyles={styles.box}
            setSelected={(val) => setTipoDeEnvase(val)}        
            data={Envase} 
            save="value"
          />

        </View>

       </View>
  


    </View>



  )}

  const styles = StyleSheet.create({
    Container: {
      flex:1,
    },
    firstContainer:{
        borderWidth:1,
        width:'97%',
        margin:"1.5%"
    },
    


    box:{
        backgroundColor:'white',
        width: '95%',


    },
    titulo: {
      fontWeight: 'bold', 
      fontSize: 17,
      paddingLeft:10,
      paddingBottom: 10,
      paddingRight:4,
    },

    inputOtros: {
      width: "90%",
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius:10,
      borderColor:'red',
    },
    selectList:{
      backgroundColor:'white',
      width: '95%',
    }
  });