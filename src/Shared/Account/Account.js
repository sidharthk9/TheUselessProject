import React from "react";
import { Divider, Header, Icon, Reveal, Image, Item, Container, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import ImageModal from "./EditingModals/ImageModal";
import profileImage from "../../Static/Images/truePotato.png";
import EmailModal from "./EditingModals/EmailModal";
import FirstNameModal from "./EditingModals/FirstNameModal";
import PasswordModal from "./EditingModals/PasswordModal";
import SurnameModal from "./EditingModals/SurnameModal";
import PhoneNumberModal from "./EditingModals/PhoneNumberModal";
import { useAuth } from "../Auth/AuthContext";


export function Account() {
    const { currentUser } = useAuth();

    return(
        <Container fluid>
            <Divider horizontal>
                <Header as="h3">
                    <Icon name="user circle"/>
                    Edit Account
                </Header>
            </Divider>

            <Reveal animated="move">
                <Reveal.Content visible>
                    <Image src={ profileImage } size="small" rounded/>
                </Reveal.Content>

                <Reveal.Content hidden>
                    <ImageModal />
                </Reveal.Content>
            </Reveal>

            <Divider />

            <Container fluid textAlign={ "center" }>
                <Item.Group>

                    <Item>
                        <Item.Content>
                            <Item.Description as={ Link } to="/#" component={ FirstNameModal } />
                            <Item.Meta>Sidharth</Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description as={ Link } to="/#" component={ SurnameModal } />
                            <Item.Meta>Kishore</Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description as={ Link } to="/#" component={ EmailModal } />
                            <Label color="orange" basic circular>
                                Unverified
                            </Label>
                            <Item.Meta>
                                { currentUser.email }
                            </Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description as={ Link } to="/#" component={ PhoneNumberModal } />
                            <Label color="green" basic circular>
                                Verified
                            </Label>
                            <Item.Meta>
                                +971501234567
                            </Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description as={ Link } to="/#" component={ PasswordModal } />
                        </Item.Content>
                    </Item>

                </Item.Group>
            </Container>
        </Container>
    );
}