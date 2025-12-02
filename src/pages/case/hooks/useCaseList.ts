import { useState } from "react";

const useCaseList = () => {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
};
export default useCaseList;
