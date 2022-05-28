import { useEffect, useState } from 'react'
import classnames from 'classnames'

interface Props {
  defaultTab?: string
  tabSet: string[]
  tabClassName?: string
  getSwitchedTab: (tab: string) => void
}

const TabGroup: React.FC<Props> = ({
  tabSet,
  defaultTab,
  tabClassName = '',
  getSwitchedTab,
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab)

  const handleTabSelect = (title: string) => {
    setSelectedTab(title)
    getSwitchedTab(title)
  }

  useEffect(() => {
    setSelectedTab(defaultTab)
  }, [defaultTab])

  return (
    <div className="tabs-container">
      {tabSet.map((title, i) => (
        <div className={classnames('tab-item', tabClassName)} key={i}>
          <div
            className={
              selectedTab === title ? 'tab-item tab-active' : 'tab-item'
            }
            onClick={() => handleTabSelect(title)}
          >
            <button
              className={
                selectedTab === title ? 'tab-item tab-active' : 'tab-item'
              }
            >
              {title}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TabGroup
