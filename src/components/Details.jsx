"use client";

import Image from "next/image";
import { useState } from "react";
import { getListItems } from "@/utils/all-util";

const Details = ({ label, information }) => {
  const [showDetails, setShowDetails] = useState(false);
  const items = getListItems(information);

  return (
    <div className="text-sm text-gray-500 cursor-pointer">
      <div className="flex" onClick={() => setShowDetails(!showDetails)}>
        <Image
          src={showDetails ? "/ChevronDown.svg" : "/ChevronRight.svg"}
          width={20}
          height={20}
        />
        <span className="font-semibold">{label}:</span>
      </div>
      <div className="ml-5">
        {showDetails &&
          items.map((item, index) => (
            <p key={index} className="mt-1">
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Details;
