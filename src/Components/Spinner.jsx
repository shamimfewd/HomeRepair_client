import { useEffect, useState } from "react";

const Spinner = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading();
      setText("ok");
    }, 3000);
  }, []);
  return <div>{loading ? "loading..." : { text }}</div>;
};

export default Spinner;
