import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiCamera, FiUser, FiMail, FiLock, FiChevronLeft } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(event) {
        event.preventDefault();
        const updated = {
            name, email, password: newPassword, old_password: oldPassword
        }
        const userUpdated = Object.assign(user, updated);
        await updateProfile({user: userUpdated, avatarFile});  
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <button type="button">
                        <FiChevronLeft size={32} />
                    </button>
                </Link>
            </header>

            <Form onSubmit={handleUpdate}>
                <Avatar>
                    <img src={avatar} alt={user.name} />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button type="submit" title="Salvar"/>  
            </Form>

            <Footer/>
        </Container>
    )
}