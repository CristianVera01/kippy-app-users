import { getAllBusinessTypes } from "@/core/business-types/actions/getAllBusinessTypes";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBusinessTypes = () => {
  const getAllBusinessTypesQuery = useQuery({
    queryKey: ["business-types"],
    queryFn: () => getAllBusinessTypes(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: true,
  });

  return {
    getAllBusinessTypesQuery,
  };
};
