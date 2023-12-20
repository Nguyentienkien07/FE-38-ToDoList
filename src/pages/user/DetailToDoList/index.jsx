import { useLocation } from "react-router-dom";
import { Space } from "antd";

function DetailToDoList() {
  let { state } = useLocation();
  return (
    <div>
      <div>Detail </div>
      <div>Tiêu đề: {state.title} </div>
      <div>Nội dung: {state.content} </div>
    </div>
  );
}

export default DetailToDoList;
