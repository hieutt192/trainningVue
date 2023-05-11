import axios from "src/boot/axios";
import URL from "../common/ApiResource";
import AppConst from "../common/AppConstant";


export function List() {
  return request( axios.AppConst.API_METHOD.GET(URL.PRODUCT.LIST))
  
}
