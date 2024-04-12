import { Person } from "../../models/Person";
import request from "../axiosInstace";

export const requestSearch = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<{
  data: Array<Person>;
}> => {
  const [_, q] = queryKey;
  return await request({
    url: "/search",
    params: {
      q,
    },
  });
};
