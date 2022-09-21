import React from "react";
import logo from './src/assets/icons/Tata-logo.svg';

export const Login = () =>{
    return(
        <div>
            <img
                src={logo}
                alt="Logo TCS"
            />
            <form>
                <input type="text" name="login" placeholder="Informe seu ID"/>
                <input type="password" name="senha" placeholder="Informe sua Senha"/>
                <button>Entrar</button>
            </form>
            
        </div>

    );
}

