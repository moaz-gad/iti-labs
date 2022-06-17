import { useState } from "react";
import SingleNovel from "./SingleNovel";
//Object Destructuring, Set Name And Count For Each Novel.
function Novels() {
  const [Novels] = useState([
    { name: "Mystery", count: 0 },
    { name: "Thriller", count: 0 },
    { name: "Romance", count: 0 },
  ]);
  return (
    <div>
      <div>
        {Novels.map((eachNovel) => {
          //Every Loop Returns the SingleNovel Component.
          return <SingleNovel novel={eachNovel} key={eachNovel.name} />;
        })}
      </div>
    </div>
  );
}

export default Novels;
