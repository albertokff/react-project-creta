import { useNavigate } from 'react-router'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/projects', { message: 'Projeto criado com sucesso!' })
            })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Atividade</h1>
            <p>Crie sua Atividade para depois adicionar suas tarefas</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Atividade" />
        </div>
    )
}

export default NewProject