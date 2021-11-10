import { Container, Content} from './styles';

interface HeaderProps{
    onOpenNewActivyModal: () => void;
    onOpenNewCourseUnitModal: () => void;
}

export function Header({onOpenNewActivyModal, onOpenNewCourseUnitModal}: HeaderProps){
    return(
        <Container>
            <Content>
                <h1>My activies Space</h1>
                <div>
                    <button 
                        type="button"
                        onClick={onOpenNewCourseUnitModal}>
                        Nova unidade curricular
                    </button>

                    <button 
                        type="button"
                        onClick={onOpenNewActivyModal}>
                        Nova atividade
                    </button>
                </div>
            </Content>
        </Container>

    )
}