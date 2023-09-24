import "../styles/ProgressPage.css";
import React from "react";

import ProgressPointCard from "../Components/ProgressPage/ProgressPointCard";
import ProgressXpCard from "../Components/ProgressPage/ProgressXpCard";
import ProgressFooter from "../Components/ProgressPage/ProgressFooter";
import ProgressHeader from "../Components/ProgressPage/ProgressHeader"


function ProgressPage() {
    return <div className="ProgressPage">
        <ProgressHeader />
        <ProgressPointCard />
        <ProgressXpCard />
        <ProgressFooter />
    </div>;
}

export default ProgressPage;
