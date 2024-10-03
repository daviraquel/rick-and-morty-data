/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js"
import { Pie, Bar } from "react-chartjs-2"
import { RootState } from "../store"
import { analysisContainerClassName } from "../helpers/styles"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

const CharacterAnalysis: React.FC = () => {
  const { characters } = useSelector((state: RootState) => state.characters)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [chartType, setChartType] = useState<string>("pie")
  const pieChartRef = useRef<ChartJS<"pie">>(null)
  const barChartRef = useRef<ChartJS<"bar">>(null)

  const speciesCount = characters.reduce(
    (acc: Record<string, number>, character) => {
      acc[character.species] = (acc[character.species] || 0) + 1
      return acc
    },
    {}
  )

  const totalCharacters = characters.length

  const speciesArray = Object.keys(speciesCount).map((species) => ({
    species,
    count: speciesCount[species],
    percentage: ((speciesCount[species] / totalCharacters) * 100).toFixed(2),
  }))

  speciesArray.sort(
    (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
  )

  const data = {
    labels: speciesArray.map((item) => item.species),
    datasets: [
      {
        label: "Character Species",
        data: speciesArray.map((item) => item.count),
        backgroundColor: [
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
          "#e377c2",
          "#7f7f7f",
          "#bcbd22",
          "#17becf",
        ],
        hoverOffset: 10,
        borderColor:
          hoveredIndex !== null
            ? speciesArray.map((_, i) =>
                i === hoveredIndex ? "black" : "transparent"
              )
            : [],
        borderWidth:
          hoveredIndex !== null
            ? speciesArray.map((_, i) => (i === hoveredIndex ? 2 : 0))
            : [],
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context: any) {
            const label = context.label || ""
            const value = context.raw
            const percentage = ((value / totalCharacters) * 100).toFixed(2)
            return `${label}: ${value} (${percentage}%)`
          },
        },
      },
    },
    onmouseenter: (chartElement: any) => {
      setHoveredIndex(chartElement.index)
    },
    onmouseleave: () => {
      setHoveredIndex(null)
    },
    maintainAspectRatio: false,
  }

  useEffect(() => {
    if (hoveredIndex !== null) {
      const chartInstance =
        chartType === "pie" ? pieChartRef.current : barChartRef.current
      if (chartInstance && chartInstance.tooltip) {
        chartInstance.tooltip.setActiveElements(
          [{ datasetIndex: 0, index: hoveredIndex }],
          { x: 0, y: 0 }
        )
        chartInstance.update()
      }
    }
  }, [hoveredIndex, chartType])

  return (
    <div className={`${analysisContainerClassName}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Characters by Species</h2>
        <select
          className="bg-gray-700 text-white p-2 rounded"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="pie">Pie Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4">
          <ul className="space-y-2">
            {data.labels.map((label, index) => (
              <li
                key={label}
                className={`flex items-center space-x-2 ${
                  hoveredIndex === index ? "font-bold" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
              >
                <div
                  className="w-4 h-4 flex-shrink-0"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <span className="text-white">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 max-w-md mx-auto">
          <div
            className="relative"
            style={{ height: "300px", overflow: "hidden" }}
          >
            {chartType === "pie" ? (
              <Pie ref={pieChartRef} data={data} options={options} />
            ) : (
              <Bar ref={barChartRef} data={data} options={options} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterAnalysis
