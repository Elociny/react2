import styled from "styled-components"; 

const Div = styled.div`
    .area {
        padding: 25px 25px;
    }

    .t-titulo {
        margin: 15px 0px;
        font-weight: bolder;
        font-size: 27px;
        color: #353535;
    }

    .caixa {
        display: flex;
        flex-wrap: wrap;
    }

    .produto {
        text-align: center;

        margin: 55px 55px;

        cursor: pointer;
    }

    .f1-nome {
        font-size: 14px;

        color: #353535;

        margin: 14px 0px;
    }

    .f1-preco {
        font-size: 19px;
        font-weight: bolder;

        color: #353535;
    }
`;

export { Div }