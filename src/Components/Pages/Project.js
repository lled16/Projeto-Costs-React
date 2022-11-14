import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../Components/layout/Loading'
import Container from '../../Components/layout/Container'
import ProjectForm from '../project/ProjectForm'
function Project() {

    const { id } = useParams() // o useParams pega o id que está vindo da URL


    const [project, setProject] = useState([])

    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects/' + id, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },

            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log)
        }, 300)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function editPost(project){
        

    }

    return (
        <>
            {project.name ?
                (
                    <div className={styles.project_details}>
                        <Container customClass="column">
                            <div className={styles.details_container}>
                                <h1>Projeto:  {project.name} </h1>
                                <button className={styles.btn} onClick={toggleProjectForm}>
                                    {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                                </button>

                                {!showProjectForm ? (
                                    <div className={styles.project_info}>
                                        <p>

                                            <span>Categoria:</span> {project.category.name}
                                        </p>
                                        <p>
                                            <span>
                                                Total de orçamento:
                                            </span> R$ {project.budget}
                                        </p>
                                        <p>
                                            <span>

                                                Total de utilizado:
                                            </span> R$ {project.cost}
                                        </p>

                                    </div>
                                ) : (
                                    <div className={styles.project_info}>
                                        <ProjectForm
                                            handleSubmit={editPost}
                                            btnText="Concluir edição"
                                            projectData={project}>
                                        </ProjectForm>
                                    </div>
                                )}
                            </div>

                        </Container>
                    </div>

                )
                :
                (<Loading />)
            }</>
    )
}

export default Project

