import "../App.css";

const Select = (props) => {
  const { HandleChange } = props;
  return (
    <>
      <select onChange={HandleChange} className="select">
        <option value="Tokyo">東京</option>
        <option value="London">ロンドン</option>
        <option value="Los Angeles">ロサンゼルス</option>
        <option value="Paris">パリ</option>
        <option value="New York">ニューヨーク</option>
        <option value="Sydney">シドニー</option>
      </select>
    </>
  );
};
export default Select;