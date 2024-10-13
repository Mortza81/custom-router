import { Request, Response ,Router} from 'express';
const router=Router()
export async function myRoute(route:string,
  method: "get" | "post" | "delete" | "put" | "patch",
  ...middlewares: Array<(req: Request, res: Response, next: () => void) => void>
): Promise<void>{
    console.log(arguments);
  router[method](route, ...middlewares);
}
export {router}