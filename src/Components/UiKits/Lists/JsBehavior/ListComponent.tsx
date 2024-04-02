import { LI, UL } from "../../../../AbstractElements";
import { ContactUs, Home, Profile, Settings } from "../../../../Utils/Constants";

type propsType = {
    activeList: string,
    setActiveList: (data: string) => void;
}

export default function ListComponent({ activeList, setActiveList }: propsType) {
    return (
        <UL>
            <LI className={`list-group-item-action bg-primary ${activeList === '1' && 'active'}`} onClick={() => { setActiveList('1') }}>{Home}</LI>
            <LI className={`list-group-item-action list-hover-primary ${activeList === '2' && 'active'}`} onClick={() => { setActiveList('2') }}>{Profile}</LI>
            <LI className={`list-group-item-action list-hover-primary ${activeList === '3' && 'active'}`} onClick={() => { setActiveList('3') }}>{ContactUs}</LI>
            <LI className={`list-group-item-action list-hover-primary ${activeList === '4' && 'active'}`} onClick={() => { setActiveList('4') }}>{Settings}</LI>
        </UL>
    )
}
