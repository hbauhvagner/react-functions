import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

export default function FormularioCadastro() {
    const [nome, setNome] = useState('Vagner');
    const [sobrenome, setSobrenome] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            console.log(nome, sobrenome);
        }}>
            <TextField 
                value={nome}
                onChange={event => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substring(0, 3);
                    }

                    setNome(event.target.value);
                    
                }}
                id="nome" 
                label="Nome" 
                margin="normal" 
                fullWidth 
            />

            <TextField 
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
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