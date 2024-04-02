import { TabContent, TabPane } from "reactstrap";
import { borderData } from "../../../../Data/UiKitsData/TabsData";

export default function BorderTabContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {borderData && borderData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
