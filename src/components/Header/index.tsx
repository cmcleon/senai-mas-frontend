import { Container, Content} from './styles';

export function Header(){
    return(
        <Container>
            <Content>
                <h1>My activies Space</h1>
                <div>
                    <button type="button">
                        Nova unidade curricular
                    </button>

                    <button type="button">
                        Nova atividade
                    </button>
                </div>
            </Content>
        </Container>

    )
}