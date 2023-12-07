import { UserData } from '../typeDefs/User/user.type';

type ResponseData<T> = T extends undefined
  ? {
      error: string;
      data: T;
    }
  : {
      error: undefined;
      data: T;
    };

export const generateResponseData = <TData>({
  data,
  error,
}: ResponseData<TData>) => {
  return {
    data,
    error,
  };
};
