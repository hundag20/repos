import axios from 'axios';
import { Fragment, useState } from 'react';

const getProject = async (id) => {
    try {
        const resp = await axios.get(`/api/project/${id}`);
        console.log('resp.data', resp.data);
        return resp.data
    } catch (err) {
        console.log('err', err.config);
        return false;
    }
}
const projectPage = (props) => {
    const [projectData, setprojectData] = useState();
    const { project } = props;

    return (
        <Fragment>
            {project && <p>{project}</p>}
        </Fragment>
    );
}

export const getStaticProps = async (context) => {
    const { params, req, res } = context;
    console.log('params', params);
    const { projectId } = params;

    if (!projectId) {
        return {
            notFound: true
        }
    }
    const project = await getProject(projectId)
    if (!project) {
        console.log('api return not found');
        return {
            notFound: true
        }
    }
    return {
        project,
    }
}
export const getStaticPaths = async () => {

    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default projectPage;
