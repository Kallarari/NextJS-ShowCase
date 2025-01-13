import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex gap-4 py-4 px-2">
      {[...Array(4)].map((item, index)=>
        <Skeleton key={index} variant="rectangular" animation="wave" width={300} height={118} />)}
    </div>
  );
}
