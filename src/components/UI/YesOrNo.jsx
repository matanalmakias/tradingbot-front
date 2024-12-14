import React from "react";
import CustomBtn from "./CustomBtn";
import { GiCancel, GiConfirmed } from "react-icons/gi";
const YesOrNo = ({ title, handleNo, handleYes, additionalContent }) => {
  return (
    <div dir="rtl">
      <h2 className="h2">{title}</h2>
      <h3 className="h3"></h3>
      {additionalContent}
      <div className="row m-3 gap-5">
        <CustomBtn
          cls={`col-sm btn1   fs_18 row gap-1`}
          text={"כן"}
          onPress={handleYes}
          icon={<GiConfirmed size={30} />}
        />
        <CustomBtn
          cls={`col-sm btn1   fs_18 row gap-1`}
          text={"לא"}
          onPress={handleNo}
          icon={<GiCancel size={30} />}
        />
      </div>
    </div>
  );
};

export default YesOrNo;
