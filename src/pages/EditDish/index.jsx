import { FiChevronLeft, FiUpload } from "react-icons/fi";
import { Container, Form } from "./styles";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";

export function EditDish() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const fileInputRef = useRef(null);

    const { id } = useParams();
    const navigate = useNavigate();

    function handleAddIngredient() {
        if (newIngredient.trim() === "") {
            alert("Por favor, insira um ingrediente!");
        } else if (ingredients.includes(newIngredient.trim())) {
            alert("Este ingrediente já foi adicionado!");
        } else {
            setIngredients(prevState => [...prevState, newIngredient.trim()]);
            setNewIngredient(""); 
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleUpdateDish(event) {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("description", description);
    
        ingredients.forEach(ingredient => {
            formData.append("ingredients", ingredient);
        });

        if (image) {
            formData.append("image", image); 
        }
        
        setIsLoading(true);
        try {
            await api.patch(`/dishes/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                }
            });
    
            alert("Prato atualizado com sucesso!");
            navigate(`/details/${id}`);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                setIsLoading(false);
            } else {
                alert("Não foi possível atualizar o prato.");
                setIsLoading(false);
            }
        }

        if (ingredients.length === 0) {
            alert("Por favor, insira pelo menos um ingrediente!");
            return;
        }

        if (Number(price) === 0) {
            alert("O preço deve ser superior a $ 0!");
            return;
        }
    
        const newCategory = Array.isArray(category) ? category[0].name : category;
    
        const dishData = {
            title,
            category: newCategory,
            ingredients,
            price,
            description
        };
    
        try {
            await api.put(`/dishes/${id}`, dishData);
            alert("Prato atualizado com sucesso!");
            navigate(`/details/${id}`);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o prato.");
            }
        }
    }

    async function handleDeleteDish() {
        const isConfirm = confirm("Tem certeza de que deseja excluir o prato?")
    
        setIsDeleting(true)
        try {
          if (isConfirm) {
            await api.delete(`/dishes/${id}`)
            navigate("/")
          }
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message)
            setIsDeleting(false)
          } else {
            alert("Não foi possível apagar o prato.")
            setIsDeleting(false)
          }
        }
      }

      useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${id}`);
                const { title, description, category, price, ingredients, image } = response.data;
                if (image) {
                    setImage({ preview: image, name: image });
                }
                setTitle(title);
                setDescription(description);
                setCategory(category);
                setPrice(price);
                setIngredients(ingredients.map((ingredient) => ingredient.name));
            } catch (error) {
                alert("Erro ao carregar os dados do prato");
            }
        }
    
        fetchDish()
      }, [id])

    return (
        <Container>
            <Header />
            <main>
                <div className="top">
                    <Link to="/">
                        <FiChevronLeft size={32} />
                        Voltar
                    </Link>
                    <h1>Editar prato</h1>
                </div>
                <Form onSubmit={handleUpdateDish}>
                    <div className="input-wrapper">
                        <div className="upload-image">
                            <Section title="Dish image" />
                            <label htmlFor="upload">
                                {image ? image.name : "Selecione a imagem"}
                                <FiUpload />
                                <input id="upload" type="file" onChange={(e) => setImage(e.target.files[0])} 
                                 ref={fileInputRef} />
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
                    <div className="btns">
                        <Button
                            type="button"
                            className="delete"
                            title={isDeleting ? "Deletando..." : "Excluir prato"}
                            onClick={handleDeleteDish}
                            disabled={isDeleting}
                        />
                        <Button
                            type="submit"
                            className="save"
                            title={isLoading ? "Carregando..." : "Salvar alterações"}
                            disabled={isLoading}
                        />
                    </div>
                </Form>
            </main>
            <Footer />
        </Container>
    )
}