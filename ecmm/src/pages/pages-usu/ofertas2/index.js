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
                                <img src="/assets/images/vestido2.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Gráfico Boho Vestido
                            </div>

                            <div className="f1-preco">
                                R$36,99
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido3.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Bainha de Ruffle Floral Boho Vestido
                            </div>

                            <div className="f1-preco">
                                R$64,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido4.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Corte Bloco de cores Vestido
                            </div>

                            <div className="f1-preco">
                                R$71,90
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido5.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Laço Contraste Simples ocasional Vestido
                            </div>

                            <div className="f1-preco">
                                R$81,99
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido6.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Bolso Simples Fofo Vestido
                            </div>

                            <div className="f1-preco">
                                R$56,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido7.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Bainha de Ruffle de cores Vestido
                            </div>

                            <div className="f1-preco">
                                R$81,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido8.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Vestido babydoll listrado colorblock
                            </div>

                            <div className="f1-preco">
                                R$91,95
                            </div>
                        </div>

                        <div className="produto">
                            <div className="f1-imagem">
                                <img src="/assets/images/vestido9.png" alt=""/>
                            </div>

                            <div className="f1-nome">
                                Bainha de Ruffle Simples Boho Vestido
                            </div>

                            <div className="f1-preco">
                                R$99,99
                            </div>
                        </div>
                    </div>
                </div>

                <RodaPe2 />
            </div>
        </Div>
    );
}