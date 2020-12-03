import Tabs from 'antd/lib/tabs'
import { useState } from 'react'
const { TabPane } = Tabs

const TabsComponent = (props) => {
  const { tabs } = props

  const [activeTab, setActiveTab] = useState(1)
  const onChangeTab = (key) => {
    setActiveTab(key)
  }

  return (
    <Tabs defaultActiveKey={activeTab} onChange={onChangeTab}>
      {tabs.map((tab, index) => (
        <TabPane tab={tab.tab} key={index}>
          {tab.component}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default TabsComponent
