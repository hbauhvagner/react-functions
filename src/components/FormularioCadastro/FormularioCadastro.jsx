import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido: true, texto: ''}});

    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField 
                value={nome}
                onChange={event => {
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
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}

                onBlur={event => {
                    const ehValido = validarCPF(event.target.value)
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                margin="normal" 
                fullWidth 
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch
                    checked={promocoes}
                    onChange={event => {
                    setPromocoes(event.target.checked);
                }} name="promoções" />} 
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={event => {
                    setNovidades(event.target.checked);
                }} name="novidades" />}
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