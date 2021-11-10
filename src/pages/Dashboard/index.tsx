import { Container} from './styles';
import { Header } from "../../components/Header"
import { ActivyTable } from '../../components/ActivyTable';
import { Summary } from '../../components/Summary';
import {NewActivyModal} from '../../components/NewActivyModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';
import { useState } from 'react';



export function Dashboard(){
    const [isNewActivyModalOpen, setIsNewActivyModalOpen ] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen ] = useState(false)

    function handleOpenActivyModal(){
        setIsNewActivyModalOpen(true)
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true)
    }

    function handleCloseActivyModal(){
        setIsNewActivyModalOpen(false)
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false)
    }

    return(
        <>
            <Header
                onOpenNewCourseUnitModal={handleCloseCourseUnitModal}
                onOpenNewActivyModal={handleOpenActivyModal}
                />

            <Container>
                <Summary />
                <ActivyTable/>
            </Container>

            <NewActivyModal
                isOpen={isNewActivyModalOpen}
                onRequestClose = {handleCloseActivyModal}/>

            <NewCourseUnitModal
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}/>
        </>
    )
}