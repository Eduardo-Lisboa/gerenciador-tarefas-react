import React, { useState } from "react";
import logo from "../assets/icons/tcLogo.png";
import { Input } from './../components/Input';




export const Login = () =>{

    const [login, setLogin] = useState ('');
    const [senha, setSenha] = useState('');
    const [isLoading, setLoading]= useState(false);

    const executaLogin = evento =>{
        evento.preventDefault();
        setLoading(true);
        console.log('id TCS: ',login);
        console.log('senha: ',senha);
    }

    return(
        <div className="container-login">
            
            <img className="logo"
                src={logo}
                alt="Logo tcs"
            />
     
            <form>
                <Input
                    inputType="text"
                    inputName="login"
                    inputPlaceholder="Informe seu ID"
                    value={login}
                    setValue={setLogin}
                />
                <Input
                    inputType="password"
                    inputName="senha"
                    inputPlaceholder="Informe sua Senha"
                    value={senha}
                    setValue={setSenha}
                />

                 <button  onClick={executaLogin}disabled={isLoading}>{isLoading === true ?'...Loading' : 'Entrar' }</button>
                
            </form>
            
        </div>

    );
}

