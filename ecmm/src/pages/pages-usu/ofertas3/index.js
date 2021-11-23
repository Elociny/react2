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
                                <img src="/assets/images/calca.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Bolso Simples ocasional Calças
                            </div>

                            <div className="f1-preco">
                                R$83,99
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca2.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Cintura contrastada Desportivo Calças
                            </div>

                            <div className="f1-preco">
                                R$85,90
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca3.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Preto Bolso Listrado Glamour Calças
                            </div>

                            <div className="f1-preco">
                                R$81,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca4.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Geométrico Desportivo Calça
                            </div>

                            <div className="f1-preco">
                                R$63,99
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca5.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Preto Gráfico ocasional Calças
                            </div>

                            <div className="f1-preco">
                                R$65,90
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca6.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Preto Bordado Casual Calças
                            </div>

                            <div className="f1-preco">
                                R$58,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca7.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Preto Cordão Carta Casual Calças
                            </div>

                            <div className="f1-preco">
                                R$67,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/calca8.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Bolso Simples ocasional Calças
                            </div>

                            <div className="f1-preco">
                                R$89,95
                            </div>
                        </div>
                    </div>
                </div>

                <RodaPe2 />
            </div>
        </Div>
    );
}