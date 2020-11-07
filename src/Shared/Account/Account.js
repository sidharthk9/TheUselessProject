import React from "react";
import { Divider, Header, Icon, Reveal, Image, Item, Container, Label } from 'semantic-ui-react';
//Components
import "../../assets/semantic/dist/semantic.min.css";
import ImageModal from "./EditingModals/ImageModal";
import profileImage from "../../Static/Images/potato.svg";

const Account = () => {
    return(
        <div>
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
                            <Item.Description>
                                First Name
                            </Item.Description>
                            <Item.Meta>Sidharth</Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description>
                                Surname
                            </Item.Description>
                            <Item.Meta>Kishore</Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description>
                                Email
                            </Item.Description>
                            <Label color="orange" basic circular>
                                Unverified
                            </Label>
                            <Item.Meta>
                                sidharth@gmail.com
                            </Item.Meta>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Description>
                                Phone Number
                            </Item.Description>
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
                            <Item.Description>
                                Password
                            </Item.Description>
                            <Item.Meta>***************</Item.Meta>
                        </Item.Content>
                    </Item>

                </Item.Group>
            </Container>

        </div>
    );
}

export default Account;