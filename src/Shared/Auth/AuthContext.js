import React, { createContext, useContext, useEffect, useState } from "react";
import { Container, Divider, Header, Icon } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import firebase from "../Firebase/Firebase";


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    let [currentUser, setCurrentUser] = useState(null);
    const [loadedCredentials, loadingCredentials] = useState(false);

    const signUpProcess = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
    };

    const loginProcess = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
    };

    const logoutProcess = () => {
        return firebase
            .auth()
            .signOut();
    };

    useEffect(() => {
        return firebase
            .auth()
            .onAuthStateChanged( (user) => {
            setCurrentUser(user);
            loadingCredentials(true);
        });
    }, [currentUser]);

    if(loadedCredentials === false){
        return(
            <Container textAlign="center">
                <Divider horizontal>
                    <Header as="h4">
                        <Icon name="spinner" />
                        <Header.Content>Loading</Header.Content>
                    </Header>
                </Divider>
            </Container>
        );
    }

    return (
        <AuthContext.Provider
            value={ { currentUser, signUpProcess, loginProcess, logoutProcess } }
            >
            { loadedCredentials && children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);