import React from "react";
import {
    LoginPageContainerDiv,
    LoginPageImageDiv,
    LoginPageFormDiv
} from './style.jsx';

import { ImageLoginPage } from '../../Assets/ImageLoginPage.jsx';

export function LoginPage() {
    return (
        <LoginPageContainerDiv>
            <LoginPageImageDiv>
                <ImageLoginPage />
            </LoginPageImageDiv>
            <LoginPageFormDiv>
                
            </LoginPageFormDiv>
        </LoginPageContainerDiv>
    );
}