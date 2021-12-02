import Head from 'next/head'
import ProjectCard from '../components/Projects/ProjectCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rampung</title>
        <meta name="description" content="Manage projects wisely, finish them, and let's have a party!" />
        <meta name="keywords" content="task management, project management, drag and drop" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      
      <ProjectCard
        title="Laundry App"
        statistic={[
          { label: "Todo", value: 21 },
          { label: "In Progress", value: 9 },
          { label: "To Review", value: 3 },
          { label: "Done", value: 14 },
        ]}
      />

    </div>
  )
}
