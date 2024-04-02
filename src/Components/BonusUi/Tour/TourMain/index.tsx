import { useTour } from '@reactour/tour';
import { Fragment, useEffect } from 'react';
import UserFirstProfile from './UserFirstProfile';
import UserSecondProfile from './UserSecondProfile';
import UserThirdProfile from './UserThirdProfile';
import UserFourthProfile from './UserFourthProfile';
import UserFifthProfile from './UserFifthProfile';


export default function TourMain() {
    const { setIsOpen,isOpen } = useTour();
    useEffect(() => {
        var timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
  return (
    <Fragment>
        <UserFirstProfile/>
        <UserSecondProfile/>
        <UserThirdProfile/>
        <UserFourthProfile/>
        <UserFifthProfile/>
    </Fragment>
  )
}
