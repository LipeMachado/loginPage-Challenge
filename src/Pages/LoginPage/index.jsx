import React from "react";
import {
    LoginPageContainerDiv,
    LoginPageImageDiv,
    LoginRegisterPageFormContainerDiv,
    RegisterAccountPageFormDiv,
    RegisterAccountPageFormTextH4
} from './style.jsx';

import { FormLogin } from '../../Components/FormLogin/'

import { ImageLoginPage } from '../../Assets/ImageLoginPage.jsx';

export function LoginPage() {
    return (
        <LoginPageContainerDiv>
            <LoginPageImageDiv>
                <ImageLoginPage />
            </LoginPageImageDiv>
            <LoginRegisterPageFormContainerDiv>
                <FormLogin />
                <RegisterAccountPageFormDiv>
                    <RegisterAccountPageFormTextH4>
                        Não tem uma conta? <a href="/register">Cadastra-se</a>
                    </RegisterAccountPageFormTextH4>
                </RegisterAccountPageFormDiv>
            </LoginRegisterPageFormContainerDiv>
        </LoginPageContainerDiv>
    );
}