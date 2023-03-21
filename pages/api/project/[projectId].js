import Project from "@/models/Project.model";

const getProject = async (id) => {
    try {
        console.log('Project', Project);
        const resp = await Project.query().findById(id);
        console.log('resp', resp);
    } catch (err) {
        console.log('err', err);
        return false;
    }
}

const handler = async (req, res) => {
    const { projectId } = req.query;
    const project = await getProject(projectId)
    if (project) res.status(200).json(project);
    else res.status(404).send('fuck u');
}


export default handler;