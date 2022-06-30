import React,{useState} from 'react'
import 
{
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const App = () => {

    const [numero,setNumero] = useState(0)

    const handleNumero = ()=> {
        const novoNumero = Math.floor(Math.random() * 10) 
        //gera números decimais

        setNumero(novoNumero)

    }


    return(
        <SafeAreaView style={style.container}>
                <Text style={style.number}>{numero}</Text>
                <TouchableOpacity onPress={handleNumero} style={style.btn}>
                    <Text>Gerar Número</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    number:{
        fontSize:38,
        color:'#fff',
        fontWeight:'bold'
    },
    btn:{
        backgroundColor:'#fff',
        width:'60%',
        paddingHorizontal: 4,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
    }
    
})

export default App;

