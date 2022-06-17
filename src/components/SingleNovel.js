import React from "react";
import { useState } from "react";
import "../dist/css/bootstrap.min.css";

function SingleNovel({ novel }) {
  const [nvl, setnvl] = useState({
    name: novel.name,
    count: novel.count,
  });

  return (
    <div className="p-2">
      <span className="p-2">{nvl.name}</span>
      <span className="p-2 bg-primary badge">{nvl.count}</span>
      <button
        onClick={() => {
          setnvl({ ...nvl, count: nvl.count + 1 }); //Spreading
        }}
        className="btn btn-primary m-1"
      >
        +
      </button>
      <button
        onClick={() => {
          setnvl({ ...nvl, count: nvl.count - 1 }); //Spreading
          if (nvl.count <= 0) {
            //DON'T COUNT DOWN ZERO!!!
            setnvl({ ...nvl, count: 0 });
          }
        }}
        className="btn btn-primary m-1"
      >
        -
      </button>
    </div>
  );

  //   <div className="p-2">
  //     <span>{product.name}</span>
  //     <span
  //       className={
  //         product.count === 0
  //           ? "mx-2 badge bg-warning"
  //           : "mx-2 badge bg-primary"
  //       }
  //     >
  //       {product.count}
  //     </span>
  //     <div
  //       onClick={() => setProduct({ ...product, count: product.count + 1 })}
  //       className="btn btn-secondary btn-sm"
  //     >
  //       +
  //     </div>
  //     <div
  //       onClick={() => setProduct({ ...product, count: product.count - 1 })}
  //       className="btn ms-2 btn-secondary btn-sm"
  //     >
  //       -
  //     </div>
  //   </div>
  // );
}

export default SingleNovel;
