import { getListItems } from "@/utils/all-util";

const Details = ({ label, information }) => {
  const items = getListItems(information);

  return (
    <div className="text-sm text-gray-500">
      <span className="font-semibold">{label}:</span>
      {items.map((item, index) => (
        <div key={index} className="mt-1">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Details;
