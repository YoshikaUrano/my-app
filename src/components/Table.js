import "../App.css";

const Table = (props) => {
  const { data } = props;
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td className="tdTitle">都市</td>
            <td className="tdInfo">{data.name}</td>
          </tr>
          <tr>
            <td className="tdTitle">天気</td>
            <td className="tdInfo">{data.weather[0].main}</td>
          </tr>
          <tr>
            <td className="tdTitle">気温</td>
            <td className="tdInfo">{data.main.temp}°C</td>
          </tr>
          <tr>
            <td className="tdTitle">湿度</td>
            <td className="tdInfo">{data.main.humidity}%</td>
          </tr>
        </tbody>
      </table>
      <div>
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className="image"
        />
      </div>
    </div>
  );
};

export default Table;