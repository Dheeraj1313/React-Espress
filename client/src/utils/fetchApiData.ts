import { SetData, Todo } from "../components/todoComponent/type";

export const fetchApiData = async (
  url: string,
  setData: SetData,
  type: string,
  todos: Todo | null
) => {
  let headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  let data;
  try {
    if (type === "get") {
      data = await fetch(url, { method: type, headers: headers });
    } else {
      data = await fetch(url, {
        method: type,
        headers: headers,
        body: JSON.stringify(todos),
      });
    }
    const d = await data.json();
    setData(d);
  } catch (err) {
    console.log(err);
  }
};
