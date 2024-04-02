import { TabContent, TabPane } from "reactstrap";
import { pillTabData } from "../../../../Data/UiKitsData/TabsData";

export default function PillTabContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {pillTabData && pillTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
