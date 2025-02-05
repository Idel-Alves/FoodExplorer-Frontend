import { FiChevronLeft, FiUpload } from "react-icons/fi";
import { Container, Form, Footer } from "./styles";
import Logo from "../../assets/logo-gray.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";



export function NewDish() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("meals");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    const navigate = useNavigate();

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");

    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleCreateNewDish(event) {
        event.preventDefault();

        if (ingredients.length === 0) {
            return alert("Você precisa adicionar pelo menos um ingrediente para criar o prato.")
        }

        const priceValue = parseFloat(price);
        if (isNaN(priceValue) || priceValue <= 0) {
            alert("O preço deve ser superior a $ 0!");
            return;
        }

        if (!image || !title || !category || !ingredients || !price || !description) {
            alert("Todos os campos são obrigatórios para criar o prato.")
            return
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("ingredients", ingredients.join(", "));
        formData.append("image", image);

        try {
            const response = await api.post("/dishes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }

            });

            alert("Prato criado com sucesso!");
            navigate("/");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível criar o prato.");
            }
        }
    }

    return (
        <Container>
            <Header />
            <main>
                <div className="top">
                    <Link to="/">
                        <FiChevronLeft size={32} />
                        Voltar
                    </Link>
                    <h1>Novo prato</h1>
                </div>

                <Form onSubmit={handleCreateNewDish}>
                    <div className="input-wrapper">
                        <div className="upload-image">
                            <Section title="Dish image" />
                            <label htmlFor="upload">
                                {image ? image.name : "Selecione a imagem"}
                                <FiUpload />
                                <input id="upload" type="file" onChange={(e) => setImage(e.target.files[0])} />
                            </label>
                        </div>

                        <div className="name">
                            <Section title="Name" />
                            <Input placeholder="Ex.: Ceasar salad" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="options">
                            <Section title="Category" />
                            <select name="type" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value={"meals"}>Meals</option>
                                <option value={"drinks"}>Drinks</option>
                                <option value={"desserts"}>Desserts</option>
                            </select>
                        </div>

                        <div className="ingredients">
                            <Section title="Ingredients" />
                            <div className="tags">
                                {
                                    ingredients.map((ingredient, index) => {
                                        return (
                                            <IngredientItem
                                                key={String(index)}
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        )
                                    })
                                }

                                <IngredientItem
                                    isNew
                                    placeholder="New"
                                    onChange={(e) => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </div>

                        <div className="price">
                            <Section title="Price" />
                            <Input type="number" value={price} placeholder="$0" onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="description">
                            <Section title="Description" />
                            <Textarea
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="save-changes">
                        <Button
                            type="submit"
                            title={"Salvar"}
                        />
                    </div>
                </Form>
            </main>
            <Footer>
                <div className="logo">
                    <img src={Logo} alt="Logo explorer" />
                    <h1>food explorer</h1>
                </div>
                <p>© 2025 - All rights reserved.</p>
            </Footer>
        </Container>
    )
}