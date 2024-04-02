import { TabContent, TabPane } from "reactstrap";
import { materialData } from "../../../../Data/UiKitsData/TabsData";

export default function MaterialStyleContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {materialData && materialData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}