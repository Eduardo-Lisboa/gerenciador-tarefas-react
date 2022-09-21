import React from "react";
import Logo from "../assets/icons/Tata-Logo.svg";

export const Login = () =>{
    return(
        <div>
            <img
                src={Logo}
                alt="LogoTCS"
            />
            <form>
                <input type="text" name="login" placeholder="Informe seu ID"/>
                <input type="password" name="senha" placeholder="Informe sua Senha"/>
                <button>Entrar</button>
            </form>
            
        </div>

    );
}

