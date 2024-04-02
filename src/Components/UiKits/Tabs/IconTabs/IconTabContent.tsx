import { TabContent, TabPane } from "reactstrap";
import { tabIconData } from "../../../../Data/UiKitsData/TabsData";

export default function IconTabContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {tabIconData && tabIconData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
