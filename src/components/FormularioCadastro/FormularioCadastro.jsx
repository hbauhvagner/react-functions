import { Button, TextField } from "@mui/material";

export default function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome" fullWidth />

            <TextField id="sobrenome" label="Sobrenome" fullWidth />

            <TextField id="cpf" label="CPF" fullWidth />

            <label>Promoções</label>
            <input type="checkbox" />

            <label>Novidades</label>
            <input type="checkbox" />

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