import { TabContent, TabPane } from "reactstrap";
import { verticalTabData } from "../../../../Data/UiKitsData/TabsData";

export default function VerticalTabContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {verticalTabData && verticalTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
