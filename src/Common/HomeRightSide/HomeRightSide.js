import React from 'react';
import Attendence from '../../Components/Attendence/Attendence';
import Calander from '../../Components/Calander/Calander';
import ImportantLink from '../../Components/ImportantLink/ImportantLink';
import NoticeBoard from '../../Components/NoticeBoard/NoticeBoard';

const HomeRightSide = () => {
    return (
        <div>
           <NoticeBoard/>
           <Calander/>
           <Attendence/>
           <ImportantLink/>
        </div>
    );
};

export default HomeRightSide;