import React from 'react';
import {BrowserRouter} from "react-router-dom";

import AlertWrapper from "Context/alert";
import Auth from "Context/authentication";
import Notification from "Components/alert/notification";
import Interceptor from "Services/httpservice";
import Bylaw from "bylaw";
import ModalContext from "Context/modal";


const App = () => {

    return (
        <AlertWrapper>
            <BrowserRouter>
                <Auth>
                    <Interceptor/>
                    <ModalContext>
                        <Bylaw/>
                    </ModalContext>
                </Auth>
                <Notification/>
            </BrowserRouter>
        </AlertWrapper>
    );
};

export default App;