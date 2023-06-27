import { memo } from "react";
import Pagination from "./pagination";

const Paginate = (props: any) => {
  if (props.pages <= 1) {
    return null;
  }
  return (
    <div className="rtl d-flex justify-content-center">
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <Pagination {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Paginate);
