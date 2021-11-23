import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import RodaPe2 from '../../../components/common/rodaPe2/index';

export default function home() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="area">
                    <div className="t-titulo">
                        Ofertas
                    </div>

                    <div className="caixa">
                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Simples ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$34,90
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta2.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Malhado Simples ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$42,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta3.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Gráfico ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$35,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta4.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Simples ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$43,99
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta5.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Gráfico ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$34,90
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta6.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Desenho Animado ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$35,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta7.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Desenho Animado ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$35,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/camiseta8.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Desenho ocasional Camiseta
                            </div>

                            <div className="f1-preco">
                                R$39,99
                            </div>
                        </div>
                    </div>
                </div>

                <RodaPe2 />
            </div>
        </Div>
    );
}