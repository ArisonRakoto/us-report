const CustomCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4">{type}</div>
  );
};

export default CustomCard;
