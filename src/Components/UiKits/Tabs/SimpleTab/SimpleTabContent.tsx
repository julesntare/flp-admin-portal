import { TabContent, TabPane } from "reactstrap";
import { simpleTabData } from "../../../../Data/UiKitsData/TabsData";

export default function SimpleTabContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {simpleTabData && simpleTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
