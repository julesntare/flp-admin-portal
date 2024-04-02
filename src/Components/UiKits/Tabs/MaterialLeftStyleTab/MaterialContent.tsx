import { TabContent, TabPane } from "reactstrap";
import { leftTabData } from "../../../../Data/UiKitsData/TabsData";

export default function MaterialContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {leftTabData && leftTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
