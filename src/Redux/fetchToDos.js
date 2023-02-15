import Apis from '../CollApi/ShortUrl';
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCHING_TODOS } from './constants';


export const SigupApi = (Url, Method, Bodydata) => {
    return async (dispatch) => {
        let ressss = await fetchToDos(Url, Method, Bodydata);
        // console.log('---fetchTodos----', ressss);
        return (dispatch({
            type: 'SignApi',
            data: ressss
        }))
    }
};

export const OTPApi = (Url, Method, Bodydata) => {
    return async (dispatch) => {
        let ressss = await fetchToDos(Url, Method, Bodydata);
        // console.log('---fetchTodos----', ressss);
        return (dispatch({
            type: 'OTPApi',
            data: ressss
        }))
    }
};

export const LoginApi = (Url, Method, Bodydata) => {
    return async (dispatch) => {
        let ressss = await fetchToDos(Url, Method, Bodydata);
        // console.log('---fetchTodos----', ressss);
        return (dispatch({
            type: 'LoginApi',
            data: ressss
        }))
    }
};

export const HomeCatApi = (Url, Method) => {
    return async (dispatch) => {
        let ressss = await fetchToDos(Url, Method);
        // console.log('---fetchTodos----', ressss);
        return (dispatch({
            type: 'HomeCatApi',
            data: ressss
        }))
    }
};


export const ForgotApi = (Url, Method, Bodydata) => {
    return async (dispatch) => {
        let ressss = await fetchToDos(Url, Method, Bodydata);
        // console.log('---fetchTodos----', ressss);
        return (dispatch({
            type: 'ForgotApi',
            data: ressss
        }))
    }
};

export const ResetPassApi = (Url, Method, Bodydata) => {
    return async (dispatch) => {
        let ressss = await fetchToDos(Url, Method, Bodydata);
        // console.log('---fetchTodos----', ressss);
        return (dispatch({
            type: 'ResetPassApi',
            data: ressss
        }))
    }
};



export async function fetchToDos(Url, Method, Bodydata) {
    let CopleteUrl = Apis.Basurl + Url
    let HHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    try {
        const res = await (
            fetch(CopleteUrl, {
                method: Method,
                headers: HHeaders,
                body: JSON.stringify(Bodydata),
            }));
        const json = await res.json();
        return (json)
    } catch (err) {
        return err;
    };
}

function getToDos() {

    return {
        type: FETCHING_TODOS
    }
}

function getToDosSuccess(data) {

    return {
        type: FETCH_TODOS_SUCCESS,
        data
    }
}

function getToDosFailure() {
    return {
        type: FETCH_TODOS_FAILURE
    }
}
