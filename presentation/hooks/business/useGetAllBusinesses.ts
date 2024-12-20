import { getAllBusinesses } from "@/core/businesses/actions/getAllBusinesses";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBusinesses = () => {
  const businessesQuery = useQuery({
    queryKey: ["businesses"],
    queryFn: getAllBusinesses,
  });

  return {
    businessesQuery,
  };
};
