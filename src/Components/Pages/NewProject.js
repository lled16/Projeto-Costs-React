import ProjectForm from '../project/ProjectForm'
import styles from './Newproject.module.css'
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate() // navigate é o antigo history

    function createPost(project) {
        // intialize cost and services
        project.cost = 0
        project.services = []
        
    fetch('http://localhost:5000/projects', {
        method: "post",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(project),
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/projects', {message: 'Projeto criado com sucesso !'})
        })
        .catch(err => console.log(err))


    }


    return (
        <div className={styles.newProject_container}>

            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}
export default NewProject