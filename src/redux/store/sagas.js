import { takeEvery, call, put, select, take, fork, all, takeLatest} from 'redux-saga/effects';
import * as Types from '../actions/types';
import { GetDataFromServer } from '../service';



 function* fetchLoginUser(action){
    try {
      let formBody = {};
      formBody.firstname = "asdfg";//action.code;
      formBody.lastname =  "zxcvbb"; //action.provider;
      formBody.age = "34"
      //const reqMethod = "POST";
      const reqMethod = "GET";
      const loginUrl= 'http://localhost:8080/employee?firstname="test"&lastname="test"&age=34';
      const response = yield call(GetDataFromServer, loginUrl ,'', '');
      const result = yield response.json();
      if (result.error) {
        yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });        
      } else {
        yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
      }
    } catch (error) {
     // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
        console.log(error);
    }
  }

export default function* rootSaga(params){
  yield takeEvery(Types.LOGIN_USER, fetchLoginUser);  
}