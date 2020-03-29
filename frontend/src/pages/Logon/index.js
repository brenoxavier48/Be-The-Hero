import React, {useState} from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api.js';



export default function Logon(){

    
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e){

        e.preventDefault();

        try{

            const response = await api.post('/session', { id });
            
            if(response.data.length !== 0){

                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data[0].name)

                history.push('/profile')

            }
            else throw new Error('ONG not Found with this ID');

        }catch(err){
            alert(err)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}></input>
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register" ><FiLogIn size={16} color="#e02041"/>Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>

    )
}