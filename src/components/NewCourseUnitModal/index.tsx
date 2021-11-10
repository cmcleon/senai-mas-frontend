import Modal from 'react-modal';
import {Container} from './styles';
import {FiX} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import { Error } from '../../pages/Login/styles';
import api from '../../services/api';

interface NewCourseUnitProps{
    isOpen: boolean;
    onRequestClose: () => void;

}

interface NewCourseUnitDate{
    name: string;
    description: string;
}

export function NewCourseUnitModal({isOpen, onRequestClose}:NewCourseUnitProps){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = handleSubmit(data => api.post('/courseuunit', data).then(response=> alert(response.data)));

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName = "react-modal-overlay"
            className = "react-modal-content"
        >
            <Container>
                <h2>Cadastrar Unidade curricular</h2>

                <button type="button" 
                        onClick={onRequestClose}
                        className="react-modal-close"
                >
                    <FiX size={20}/> 
                </button>

                <form onSubmit={onSubmit}>
                    <input type="" placeholder="Nome"
                    {... register("name",{required:true})}/>
                    {errors.name && <Error>O preenchimento do campo é obrigatório.</Error>}

                    <input type="text" placeholder="Descrição"
                    {... register("description",{required:true})}/>
                    {errors.description && <Error>O preenchimento do campo é obrigatório.</Error>}
                </form>
            </Container>


        </Modal>
    )
}