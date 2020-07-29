import React from "react";

const DynamicText = () => {
  // const [word, setNewWord] = useState(["smart"]);

  // let words = ["simple", "clever", "strong", "smart"];
  // let index = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNewWord(words[index]);
  //     index < words.length - 1 ? index++ : (index = 0);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <span className="dynamic-text">
      <span>simple</span>
      <span>clever</span>
      <span>strong</span>
      <span>smart</span>
    </span>
  );
};

export default DynamicText;
