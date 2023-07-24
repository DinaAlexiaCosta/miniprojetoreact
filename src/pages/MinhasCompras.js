import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export const MinhasCompras = () => {
    const [itensLocalStorage, setItensLocalStorage] = useState([]);

    useEffect(() => {
        const itensRecuperados = [];
        for (let i = 1; i <= 50; i++) {
            const chave = `${i}`;
            const itemArmazenado = localStorage.getItem(chave);
            if (itemArmazenado) {
                const objetoRecuperado = JSON.parse(itemArmazenado);
                itensRecuperados.push(objetoRecuperado);
            }
        }
        setItensLocalStorage(itensRecuperados);
        console.log(localStorage.length);
    }, []);

    const [quantidades, setQuantidades] = useState({});

    const handleQuantityChange = (index, newQuantity) => {
        setQuantidades((prevState) => ({
            ...prevState,
            [index]: newQuantity,
        }));
    };

    const handleDelete = (index) => {
        const updatedItems1 = [...itensLocalStorage];
        deleteItemByValue(updatedItems1.splice(index, 1));

        const updatedItems = [...itensLocalStorage];
        updatedItems.splice(index, 1);
        setItensLocalStorage(updatedItems);
    };

    function deleteItemByValue(valueToDelete) {
        const item = valueToDelete[0];
        const itemJson = '{"text": "' + item.text + '","pricepromo": "' + item.pricepromo + '"}'
        for (let i = 0; i <= 50; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            if (value === itemJson) {
                localStorage.removeItem(key);
            }
        }
    }

    const calcularSomaTotal = () => {
        const total = itensLocalStorage.reduce((total, item, index) => {
            const quantidade = quantidades[index] || 1;
            return total + parseFloat(item.pricepromo) * quantidade;
        }, 0);
        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <div className='container' style={{ width: '73%' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h3 style={{ marginTop: '0px', marginBottom: '30px' }}>Minhas Compras</h3>
                <table>
                    <thead>
                        <tr>
                            <th style={{ paddingLeft: '10px' }}>Item</th>
                            <th style={{ width: '130px', textAlign: 'right' }}>Valor Unitário</th>
                            <th style={{ width: '130px', textAlign: 'center' }}>Quantidade</th>
                            <th style={{ width: '100px', textAlign: 'right' }}>Valor Total</th>
                            <th style={{ width: '100px', textAlign: 'center' }}>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itensLocalStorage.map((item, index) => (
                            <tr style={{ paddingLeft: '10px', height: '50px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }} key={index}>
                                <td style={{ paddingLeft: '10px' }}>{item.text}</td>
                                <td align='right'>{parseFloat(item.pricepromo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td align='center'>
                                    <input style={{ width: '50px', textAlign: 'center' }}
                                        type="number"
                                        value={quantidades[index] || 1}
                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                        min={1}
                                    />
                                </td>
                                <td align='right'>
                                    {parseFloat(item.pricepromo * (quantidades[index] || 1)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </td>
                                <td align='center'>
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        style={{ cursor: 'pointer', color: 'red' }}
                                        onClick={() => handleDelete(index)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ margin: '15px', display: 'flex', flexDirection: 'column'  }}>
                <p align='right' style={{ fontWeight: 'bold' }}>
                    Total:
                    {calcularSomaTotal()}
                </p>
            </div>
        </div>
    );
};

export default MinhasCompras;