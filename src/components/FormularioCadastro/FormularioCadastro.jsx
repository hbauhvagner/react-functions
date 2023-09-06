import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

export default function FormularioCadastro() {
    const [nome, setNome] = useState('Vagner');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            console.log(nome);
        }}>
            <TextField 
                value={nome}
                onChange={event => {
                    nome = event.target.value;

                    if (nome.length >= 3) {
                        nome = nome.substring(0, 3);
                    }
                }}
                id="nome" 
                label="Nome" 
                margin="normal" 
                fullWidth 
            />

            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                margin="normal" 
                fullWidth 
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                margin="normal" 
                fullWidth 
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promoções" defaultChecked />} 
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" defaultChecked />}
            />

            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )
}