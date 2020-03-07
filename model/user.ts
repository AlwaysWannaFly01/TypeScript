import { MssqlDb } from '../modules/db';
class UserClass {
    username: string | undefined;
    password: string | undefined;
}
let UserModel = new MssqlDb<UserClass>()
export {
    UserClass,
    UserModel
}