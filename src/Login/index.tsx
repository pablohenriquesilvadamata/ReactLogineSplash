import api from "../utils/api";
import secureLocalStorage from "react-secure-storage";
import ImagemFundo from "../../img/imagemfundo.png"
import DesenvolvidoPor from "../../img/desenvolvidopor.png"
import IntegraDashDark from "../../img/integradashdark.png"
import IntegrdashlogoDescuro from "../../img/integrdashwhite.png"
import Olho from "../../img/olho.png"

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./style.css";

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    function fazerlogin(event: any) {
        event.preventDefault()

        const usuario: object = {
            email: email,
            password: senha
        }

        api.post("login", usuario).then((response) => {
            console.log(response)

            secureLocalStorage.setItem("user", response.data)
            // localStorage.setItem("user", response.data)

            navigate("/perfil/" + response.data.user.id)

            // Recarrega a pagina
            navigate(0)

        })
    }

    return (
        <main>
        <section className="paginatotal">
            <div className="quadrado_branco">
                {/* <div class="alinhamento_login"> */}
                <img
                    className="Logo_Integradash"
                    src={IntegraDashDark}
                    alt="Logo da Instegradash Fundo Claro"
                />
                <img
                    className="Logo_Claro"
                    src={IntegrdashlogoDescuro}
                    alt="Logo da Instegradash Fundo Escuro"
                />
                <div className="teste1">
                    <form onSubmit={fazerlogin} className="alinhamento_input" action="login">
                        <label className="negrito" htmlFor="email">
                            Endereco de email
                        </label>
                        <input
                            className="email"
                            type="email"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Digite aqui seu e-mail:"
                            required
                        />
                        <label className="negrito" htmlFor="senha">
                            Senha
                        </label>
                        <div className="zoinho">
                            <input
                                className="senha"
                                type="password"
                                id="senha"
                                onChange={(event) => setSenha(event.target.value)}
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                            <img
                                className="zoio"
                                src={Olho}
                                alt="mostrar - ocultar password"
                            />
                        </div>
                        <div className="mantenha-me">
                            <input type="checkbox" name="checkbox" />
                            <label htmlFor="">Mantenha-me conectado</label>
                        </div>
                        <button className="botao_entrar">Entrar</button>
                        <div className="clique_aqui">
                            <p className="testefonte">Esqueceu a senha?</p>
                            <p className="testefonte2"> teste </p>
                            <a href="">Clique aqui</a>
                        </div>
                    </form>
                </div>
                <div>
                    <img
                        className="desenvolvido_por"
                        src={DesenvolvidoPor}
                        alt="Desenvolvido por Integradash"
                    />
                </div>
            </div>
            <section className="pagina_metade1">
                <div>
                    <img
                        className="rapaz_dashboard"
                        src={ImagemFundo}
                        alt="Rapaz em frente a um Dashboard apontando pra ele"
                    />
                </div>
            </section>
        </section>
    </main>    

    );
}

export default Login;