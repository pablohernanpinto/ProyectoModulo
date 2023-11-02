import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import InputText from '../elements/inputText';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

export default function Dos(){


  const [text, onChangeText] = React.useState('');
  const elementosIzq1 = ['Lote Nr.','Lote Nr','Nr de Envases','Patente Camión', 'Cliente','Peso neto', 'Peso bruto','Tara'];

  
  const [mostrarInputOtro, setMostrarInputOtro] = React.useState(false);
  const [Envio, setEnvio] = React.useState("");
  const TipoDeEnvio = [
      {key:'1', value:'Retiro Planta', },
      {key:'2', value:'Embarque'},
      {key:'3', value:'Otro'},
  ]

  const [mostrarInputOtroProducto, setMostrarInputOtroProducto] = React.useState(false);
  const [Revision, setRevision] = React.useState("");
  const RevisionList = [
      {key:'1', value:'Nombre del Producto', },
      {key:'2', value:'Nombre y Dirección del Manufacturador'},
      {key:'3', value:'Simbología de Almacenaje y Manipulación'},
      {key:'4', value:'Acidez'},
      {key:'5', value:'Brix'},
      {key:'6', value:'Color'},
      {key:'7', value:'Capacidad'},
      {key:'9', value:'Alcohol'},
      {key:'10', value:'Fold'},
  ]

  const [RequerimientosDeCliente, setRequerimientosDeCliente] = React.useState("");
  const Envase = [
      {key:'1', value:'Marcas Requeridas por el Cliente', },
      {key:'2', value:'Bandas Requeridas por el Cliente'},
      {key:'3', value:'Etiquetas Requeridas por el Cliente'},

  ]

  const [capacidadEnGals, setCapacidadEnGals] = React.useState("");
  const capGals = [
      {key:'1', value:'51,8', },
      {key:'2', value:'52'},
      {key:'3', value:'53,7'},
      {key:'4', value:'54.7'},
      {key:'5', value:'55', },
      {key:'6', value:'60'},
      {key:'7', value:'300'},
      {key:'8', value:'Flexi'},
      {key:'9', value:'Otro', },
  ]

  const [SelectMulti, setSelectMulti] = React.useState([]);
  const SelectMultilist = [
      {key:'1', value:'REVISION PESO ETIQUETA DE ENVASADO', },
      {key:'2', value:'REVISION FECHA ETIQUETA DE ENVASADO'},
  ]


  return(
      <View style= {styles.firstContainer}>
          <View>
            <Text style = {[styles.titulo,{fontSize:17}]}>
              Llenar solo en el Embarque (Durante el mismo)
            </Text>
            <Text style = {[styles.titulo]}>
              Marcas en los Envases 
            </Text>
          </View>

          <View style = {styles.containerDrop}> 
            <Text style = {styles.titulo}>
              Revision
            </Text>
      
            <MultipleSelectList 
            setSelected={(val) => setRevision(val)} 
            boxStyles={styles.box}
            dropdownStyles={styles.box}
            data={RevisionList} 
            save="value"
            label="Categories"
            />
          </View> 

          <View style = {styles.containerDrop}> 
            <Text style = {styles.titulo}>
              Requerimientos de clientes
            </Text>
      
            <MultipleSelectList 
            setSelected={(val) => setRequerimientosDeCliente(val)} 
            boxStyles={styles.box}
            dropdownStyles={styles.box}
            data={RevisionList} 
            save="value"
            label="Categories"
            />
          </View> 
          
          <View style = {styles.containerDrop}>

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
          </View>
            


          <View style = {{flexDirection: 'column'}}>
              {elementosIzq1.map((elementosIzq1, index) => (
              <InputText key={index} nombre={elementosIzq1} ancho ={"90%"} />
              ))}

          <View style = {[styles.containerDrop, {paddingBottom:'1%'}]}>

          <Text style = {styles.titulo}>Tipo de envase</Text>
          <SelectList 
            boxStyles={styles.box}
            dropdownStyles={styles.box}
            setSelected={(val) => setTipoDeEnvase(val)}        
            data={Envase} 
            save="value"
          />
          </View>
        </View>


        <View style = {styles.containerDrop}>           
            <Text style = {styles.titulo}>
              Capacidad en gals
            </Text>
            <SelectList 
              boxStyles={styles.box}
              dropdownStyles={styles.box}
              setSelected={(val) => {setCapacidadEnGals(val);
                if(val === 'Otro') {
                  setMostrarInputOtro(true);
                } 
                else {
                  setMostrarInputOtro(false);
                }
                }} 
              data={capGals} 
              save="value"
              />            

          
          {mostrarInputOtro && (<TextInput
              style={styles.inputOtros}
              onChangeText={onChangeText}
              value={text}
              placeholder="Especifique otro tipo gals "
              placeholderTextColor="#a9a9a9"
              />
            )}
          </View>


      </View>
  )
}


const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
  containerDrop:{
    paddingLeft: 10,
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
    paddingLeft:'1%',
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