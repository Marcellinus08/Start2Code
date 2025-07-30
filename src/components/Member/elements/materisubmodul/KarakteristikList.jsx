const KarakteristikList = ({ items }) => {
  return (
    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.label}:</strong> {item.desc}
        </li>
      ))}
    </ul>
  );
};

export default KarakteristikList;
