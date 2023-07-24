import ButtonBS from 'react-bootstrap/Button';
import CardBS from 'react-bootstrap/Card';

export const Card = ({ id, imagem, title, text, price, pricepromo }) => {
   
    const addCart = () => {
        localStorage.setItem(id,[
            '{'+
            '"text": "'+text+'"', 
            '"pricepromo": "'+pricepromo+'"'
            +'}'
        ] );
        window.quantidadeItens = window.quantidadeItens + 1
    }

    return (
        <CardBS style={{ margin: '8px', width: '18rem' }}>
            <CardBS.Img style={{ padding: '8px', height: '18rem' }} variant="top" src={imagem} />
            <CardBS.Body>
                <CardBS.Title>{title}</CardBS.Title>
                <CardBS.Text>{text}</CardBS.Text>
                <CardBS.Text style={{ color: 'red' }}>De: {price}</CardBS.Text>
                <CardBS.Text >Por:  <strong style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{parseFloat(pricepromo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></CardBS.Text>
                <ButtonBS variant="primary" onClick={addCart}>Colocar no carrinho</ButtonBS>
            </CardBS.Body>
        </CardBS>
    )
}


