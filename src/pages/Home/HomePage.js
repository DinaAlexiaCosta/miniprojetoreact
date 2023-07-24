import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "../../components/Card/Card";

export const HomePage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={3}><Card id={1} title={"Ar e Ventilação"} text={"Aquecedor termoventilador Mondial A-08 Portatil"} imagem="https://a-static.mlcdn.com.br/280x210/aquecedor-termoventilador-mondial-a-08-portatil/magazineluiza/236925100/d1c2e6741a3520c674de016094f6b0f6.jpg" price={"R$ 219,99"} pricepromo={"134.09"} /></Col>
                <Col xs={12} md={3}><Card id={2} title={"Ar e Ventilação"} text={"Ventilador de mesa e parede ultra V-30B-6P - 30cm 3 Velocidades"} imagem="https://a-static.mlcdn.com.br/280x210/ventilador-de-mesa-e-parede-ultra-v-30b-6p-30cm-3-velocidades/magazineluiza/020470000/ecb55d5405630b2a387fe6751bf5a8f8.jpg" price={"R$ 119,99"} pricepromo={"104.39"} /></Col>
                <Col xs={12} md={3}><Card id={3} title={"Ar e Ventilação"} text={"Ar Condicionado Philco Eco Split Inverter Frio 9000 Btu 220v"} imagem={"https://a-static.mlcdn.com.br/280x210/ar-condicionado-philco-eco-split-inverter-frio-9000-btu-220v/continentalcenter/010101015b10812221/0977c18ad0c940ce17c7d93980fc36b8.jpeg"} price={"R$ 1.798,82"} pricepromo={"1529.00"} /></Col>
                <Col xs={12} md={3}><Card id={4} title={"Ar e Ventilação"} text={"Ventilador de Coluna Mondial 40cm V-75C-6P Preto"} imagem={"https://a-static.mlcdn.com.br/280x210/ventilador-de-coluna-mondial-40cm-v-75c-6p-super-power-6-pas-3-velocidades-140w-preto/techshop/venmon00035/c09c063c2be53b2615f6ccd9d33e9317.jpeg"} price={"R$ 299,99"} pricepromo={"253.79"} /></Col>
                <Col xs={12} md={3}><Card id={5} title={"Ar e Ventilação"} text={"Ventilador de Teto Ventisol Fênix Premium Branco 3 velocidades"} imagem="https://a-static.mlcdn.com.br/280x210/ventilador-de-teto-ventisol-fenix-premium-branco-3-velocidades/techshop/venven00010a/0943f334d50a5eeb94c0858e997db5d4.jpeg" price={"R$ 235,18"} pricepromo={"183.43"} /></Col>
                <Col xs={12} md={3}><Card id={6} title={"Ar e Ventilação"} text={"Ar Condicionado Split Hi Wall Electrolux Ecoturbo 9000"} imagem="https://a-static.mlcdn.com.br/280x210/ar-condicionado-split-hi-wall-electrolux-ecoturbo-9000-btu-h-frio-vi09f-ve09f-220-volts/friopecas/108860/8969ed6df4be04d8444c8588ea2f0253.jpeg" price={"R$ 1.699,00"} pricepromo={"1358.30"} /></Col>
                <Col xs={12} md={3}><Card id={7} title={"Ar e Ventilação"} text={"Aquecedor Elétrico Ventisol - Premium Quartzo"} imagem={"https://a-static.mlcdn.com.br/280x210/aquecedor-eletrico-ventisol-premium-quartzo/magazineluiza/088782000/a095d44fc2ced8b618a8c4a689e3d6a3.jpg"} price={"R$ 159,99"} pricepromo={"89.91"} /></Col>
                <Col xs={12} md={3}><Card id={8} title={"Ar e Ventilação"} text={"Ar Condicionado Split Inverter Samsung WindFree Connect 12000"} imagem={"https://a-static.mlcdn.com.br/280x210/ar-condicionado-split-inverter-samsung-windfree-connect-12000-btus-frio-220var12bvfaawkxaz/continentalcenter/010101003001212224/10b925a94c11a0477b5dd2501eaf1f74.jpeg"} price={"R$ 2.469,41"} pricepromo={"2099.00"} /></Col>
                <Col xs={12} md={3}><Card id={9} title={"Ar e Ventilação"} text={"Ar condicionado Split LG Dual Inverter - 24.000 BTUs Quente e Frio"} imagem={"https://a-static.mlcdn.com.br/280x210/ar-condicionado-split-lg-dual-inverter-24-000-btus-quente-e-frio-s4nw24k231d-eb2gamz/magazineluiza/235954000/12e9d2e0de46e2d9dad06f4d5b8953be.jpg"} price={"R$ 5.771,43"} pricepromo={"4658.31"} /></Col>
                <Col xs={12} md={3}><Card id={10} title={"Ar e Ventilação"} text={"Climatizador de Ar Frio Nobille CLM4A com 3 Níveis de Ventilação Ventisol"} imagem={"https://a-static.mlcdn.com.br/280x210/climatizador-de-ar-frio-nobille-clm4a-4-litros-de-agua-com-3-niveis-de-ventilacao-ventisol/leonfer/2546/bf1da11bcf57c21272d6a11aafbf3a00.jpeg"} price={"R$ 380,40"} pricepromo={"323.34"} /></Col>
            </Row>
        </Container>
    )
}