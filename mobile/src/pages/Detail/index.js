import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'

export default function Detail(){

    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Bezerro linchado" com o valor de R$120,00'

    function navigationBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Bezerro linchado',
            recipients: ['bbjhbjhb8.bx@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp(){

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity onPress={navigationBack}>
                        <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                    <Text style={[styles.incidentProperty, {marginTop:0}] }>ONG:</Text>
                    <Text style={styles.incidentValue }>APAD</Text>

                    <Text style={styles.incidentProperty }>Descrição:</Text>
                    <Text style={styles.incidentValue }>Bezerro linchado</Text>

                    <Text style={styles.incidentProperty }>Valor:</Text>
                    <Text style={styles.incidentValue }>R$ 540,45</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle }>Salve o dia!</Text>  
                <Text style={styles.heroTitle }>Seja o Herói desse caso.</Text>

                <Text style={styles.heroDescription }>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
