import { TabContent, TabPane } from "reactstrap";
import { H6, Image, P } from "../../../../AbstractElements";
import { justifyTabData } from "../../../../Data/UiKitsData/TabsData";
import { dynamicImage } from "../../../../Utils";

export default function JustifyTabContent({ tabId }: { tabId: string }) {
    return (
        <TabContent activeTab={tabId}>
            {justifyTabData && justifyTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show':''}`} tabId={item.id} key={index}>
                    <div className='designer-details'>
                        {item.data && item.data.map((item, index) => (
                            <div className="designer-profile" key={index}>
                                <div className="designer-wrap">
                                    <Image className="designer-img" src={dynamicImage(item.image)} alt="profile" width={50} height={50} />
                                    <div className="designer-content">
                                        <H6>{item.head}</H6>
                                        <P>{item.text}</P>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPane>
            ))}
        </TabContent>
    )
}
