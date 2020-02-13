import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CurrencyInput from 'react-currency-input';
import Modal from 'react-modal';
import './DishRegistration.css';

export default function DishRegistration() {

  let history = useHistory();

  const [dishName , setDishName] = useState('');
  const [dishPrice , setDishPrice] = useState('');
  const [dishDescription , setDishDescription] = useState('');
  const [isModalOpen , setModalOpen] = useState(false);
  

  const handleDishRegistration = () => {
    // FUNÇÂO RESPONSÁVEL POR MANDAR AS INFORMAÇÔES DO CADASTRO PARA O SERVIDOR
    // AQUI É REALIZADO UM POST REQUEST PARA O SERVIDOR COM AS VARIAVEIS (dishDescription, dishName e dishPrice) no corpo 
    if ( dishName === "" || dishPrice === "" || dishDescription === "" ) {
      alert(" Campos de Cadastro Incompletos ")
    } else {
      setModalOpen(!isModalOpen);
    }
  }

  const handleModalClose = () => {
    history.goBack();
  }

  return (
    <div className={"dishRegistrationContainer"} >
      <div className={"headerRegistrationDiv"} >
        <img id="backBtn" alt="Back Button" src={require('../../assets/images/left-chevron.svg')} onClick={ () => {history.goBack()} } />
        <h2>share eat</h2>
      </div> 
      <div className={"establishmentNameDiv"} >
        <h2 > Silva Lanches </h2>
      </div>
      <div className={"formRegistrationDiv"} >
        <div className={"inputFieldDiv"} >
          <label> Nome do Prato</label>
          <input placeholder={"Prato"} onChange={(e) => setDishName(e.target.value)} />
        </div>
        <div className={"inputFieldDiv"} >
          <label> Valor</label>
          <CurrencyInput id="priceInputField" prefix="R$ " value={dishPrice} onChangeEvent={(e) => setDishPrice(e.target.value)} />
        </div>
        <div className={"inputFieldDiv"} >
          <label> Descrição do Prato</label>
          <textarea maxLength="200" id="descriptionInputField" placeholder={"Insira uma descrição"} onChange={(e) => setDishDescription(e.target.value)} />
          <h6> * A descrição deve conter até 200 caracteres. </h6>
        </div>
      </div>
      <button id="saveBtn" onClick={() => {handleDishRegistration()}} >Salvar</button>
      <Modal onRequestClose={() => setModalOpen(!isModalOpen)} isOpen={isModalOpen} className={"modalDishRegistration"} ariaHideApp={false} >
        <h2> Sucesso !!! </h2>
        <p> Seu novo prato acabou de ser cadastrado </p>
        <button onClick={ () => handleModalClose()} > Concluir </button>
      </Modal>
    </div>
  );
}
