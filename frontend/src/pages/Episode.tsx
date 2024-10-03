import React from "react"
import PageLayout from "../components/PageLayout"

const EpisodePage: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Episodes</h1>
        <p>List of episodes will be displayed here.</p>
      </div>
    </PageLayout>
  )
}

export default EpisodePage
