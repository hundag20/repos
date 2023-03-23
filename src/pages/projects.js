import ReactMarkdown from 'react-markdown'
import fs from 'fs'
const handler = ({ projectMd }) => {

    return <ReactMarkdown>{projectMd}</ReactMarkdown>
}

const fetchMd = async () => {
    const fileContent = fs.readFileSync(process.cwd() + '/README.md');
    return fileContent;
}

export const getServerSideProps = async (context) => {
    const projectMd = await fetchMd();
    return {
        props: {
            projectMd: projectMd.toString(),
        }
    }
}

export default handler;
