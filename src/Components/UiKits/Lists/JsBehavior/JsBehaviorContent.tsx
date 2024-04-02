import { TabContent, TabPane } from 'reactstrap'
import { jsBehaviorListData } from '../../../../Data/UiKitsData/ListsData'

export default function JsBehaviorContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {jsBehaviorListData && jsBehaviorListData.map((item, index) => (
                <TabPane className={`${item.class} ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.htmlText}
                </TabPane>
            ))}
        </TabContent>
    )
}
