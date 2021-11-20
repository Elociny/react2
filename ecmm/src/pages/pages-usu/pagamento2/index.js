import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import DadosPessoais from '../../../components/styled/dadosPessoais/index';
import Entrega from '../../../components/styled/entrega/index';
import Cartao from '../../../components/styled/cartao/index';

export default function pagamento() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="area">
                    <DadosPessoais />
                    <Entrega />
                    <Cartao />

                    
                </div>
            </div>
        </Div>
    );
}