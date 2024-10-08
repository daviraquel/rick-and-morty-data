import { useState } from "react"

interface ISelectorProps {
  options: string[]
  setState: React.Dispatch<React.SetStateAction<string>>
}

export const Selector: React.FC<ISelectorProps> = ({
  options,
  setState,
}: ISelectorProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const numberOfItems = options.length
  const itemWidth = 100 / numberOfItems

  const containerClassName =
    "relative flex cursor-pointer bg-lightBackground rounded-lg "
  const highlightBackgroundClassName = `absolute z-0 top-1/2 h-full rounded-lg
  transition-all duration-300 ease-linear -translate-y-1/2  
  bg-rickBlue`

  const divBaseClassName =
    "relative z-10 bg-transparent transition-all duration-400 sm:py-2 sm:text-xl"
  const optionsDivClassName = `${divBaseClassName} text-textSecondary hover:text-portalGreen`
  const selectedOptionsDivClassName = `${divBaseClassName} text-white`

  const selectItem = (index: number, item: string) => {
    setSelectedIndex(index)
    setState(item)
  }
  return (
    <div className={`${containerClassName}`}>
      <div
        className={highlightBackgroundClassName}
        style={{
          width: `${itemWidth}%`,
          left: `${itemWidth * selectedIndex}%`,
        }}
      ></div>
      {options.map((item, index) => (
        <div
          key={`${index}-${item}`}
          className={
            index === selectedIndex
              ? selectedOptionsDivClassName
              : optionsDivClassName
          }
          style={{ width: `${itemWidth}%` }}
          onClick={() => selectItem(index, item)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
