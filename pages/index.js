import Head from 'next/head'
import ProjectList from '../components/Projects/ProjectList';

export default function Home({ projects }) {

  return (
    <div>
      <Head>
        <title>Rampung</title>
        <meta name="description" content="Manage projects wisely, finish them, and let's have a party!" />
        <meta name="keywords" content="task management, project management, drag and drop" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      
      <ProjectList projects={ projects } />

    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/v1/projects");
  const projects = await res.json();

  return {
    props: { projects }
  }
}