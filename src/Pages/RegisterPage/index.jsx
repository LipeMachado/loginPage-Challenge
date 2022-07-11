import React from "react";
import {
    LoginPageContainerDiv,
    LoginPageImageDiv,
    LoginRegisterPageFormContainerDiv,
    LoginAccountPageFormDiv,
    LoginAccountPageFormTextH4
} from './style.jsx';

import { FormRegister } from '../../Components/FormRegister/'

import { ImageLoginPage } from '../../Assets/ImageLoginPage.jsx';

export function RegisterPage() {
    return (
        <LoginPageContainerDiv>
            <LoginPageImageDiv>
                <ImageLoginPage />
            </LoginPageImageDiv>
            <LoginRegisterPageFormContainerDiv>
                <FormRegister />
                <LoginAccountPageFormDiv>
                    <LoginAccountPageFormTextH4>
                        Já tem uma conta? <a href="/">Logue-se</a>
                    </LoginAccountPageFormTextH4>
                </LoginAccountPageFormDiv>
            </LoginRegisterPageFormContainerDiv>
        </LoginPageContainerDiv>
    );
}