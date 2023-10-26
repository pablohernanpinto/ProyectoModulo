import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import ChecklistSent from './elements/checklist';
import InputText from './elements/inputText'

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
    const elementosizq2 = ['JCManzana','JCPera','JCFrambuesa','JCDurazno','Aroma','Manz.Cloudy','JCFrutilla'];
    const elementosDer2 = ['JCCiruelas secas','JCUva','JCCiruela','Pasta Tomate','Pulpa Manzana','Pulpa Durazno'];
    const elementosIzq3 = ['51,8','52','53,7','54,7','55','60','300','Flexi','Otro'];
    const elementosDer3 = ['Peso neto', 'Peso bruto','Tara'];
    const elementosDer3dos = ['T. Métalico','B. Plástico','Tote Bins','Flexi/Iso Bag']
    const elementosFinal  = ['REVISION PESO ETIQUETA DE ENVASADO', 'REVISION FECHA ETIQUETA DE ENVASADO']

  return (
    <View style = {styles.container}>
        <View style = {styles.subContainer}>
            <View style = {styles.leftColumn}>

                <View style = {{flexDirection: 'column'}}>
                    {elementos.map((elemento, index) => (
                        <ChecklistSent key={index} nombre={elemento} index={index} ancho = {100} color={'black'} />
                    ))}
                </View>
            
            </View>
            
            <View style = {styles.rightColumn}>

                <View style = {{flexDirection: 'column'}}>
                    {elementosIzq1.map((elementosIzq1, index) => (
                        <InputText key={index} nombre={elementosIzq1} ancho ={120} />
                    ))}
                </View>
            </View>
        </View>

        <View style = {styles.subContainer}>
            <View style = {styles.leftColumn}>
                <Text style = {[styles.titulo]}>Producto</Text>
                
                <View style = {{flexDirection: 'column'}}>
                    {elementosizq2.map((elementosizq2, index) => (
                        <ChecklistSent key={index} nombre={elementosizq2} index={index} ancho = {100} color={'black'}  />
                    ))}
                </View>
            </View>


            <View style = {styles.rightColumn}>
                <View style = {{paddingTop:37}}>

                    <View style = {{flexDirection: 'column'}}>
                        {elementosDer2.map((elementosDer2, index) => (
                            <ChecklistSent key={index} nombre={elementosDer2} index={index} ancho = {150} color={'black'}  />
                        ))}
                    </View>
                    
                    <InputText nombre={'Otro: Indique'} ancho = {120}></InputText>
                </View>
            </View>
        </View>

        <View style = {styles.subContainer}>
            <View style = {styles.leftColumn}>
                <View style  = {{borderWidth:1,marginBottom:5}}>
                    <Text style= {styles.titulo}>Capacidad en Gals</Text>

                    <View style = {{flexDirection: 'column'}}>
                        {elementosIzq3.map((elementosIzq3, index) => (
                            <ChecklistSent key={index} nombre={elementosIzq3} index={index} ancho = {100}color={'black'}  />
                        ))}
                    </View>
            
                </View> 
            </View>

            <View style = {styles.rightColumn}>
                <View style = {{borderWidth: 1, paddingBottom: 21}}>
                    <View  style = {{flexDirection: 'row'}}>

                        <View style = {{flexDirection: 'column'}}>
                            {elementosDer3.map((elementosDer3, index) => (
                                <InputText key={index} nombre={elementosDer3} ancho={100}/>
                            ))}
                            <Text style = {[styles.titulo,{paddingTop: 10}]}>Tipo de envase</Text>
                            <View style = {{flexDirection: 'column'}}>
                                {elementosDer3dos.map((elementosDer3dos, index) => (
                                    <ChecklistSent key={index} nombre={elementosDer3dos} index={index} ancho = {100} color={'black'}  />
                                ))}
                            </View>
                        </View>
                    </View> 
                </View>
            </View>
        </View>
        
        <View style = {{flexDirection: 'column', paddingLeft: 10}}>
            {elementosFinal.map((elementosFinal, index) => (
            <ChecklistSent color = {'red'} key={index} nombre={elementosFinal} index={index} ancho = {300}  />
            ))}
        </View>
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
      paddingLeft:0,
      paddingBottom: 10,
      paddingRight:4,
    }
  });