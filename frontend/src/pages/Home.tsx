import React from "react"
import PageLayout from "../components/PageLayout"

const Home: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p>Welcome to the Rick and Morty App!</p>
      </div>
    </PageLayout>
  )
}

export default Home
