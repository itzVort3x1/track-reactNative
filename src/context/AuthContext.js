import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
     switch(action.type){
          default: 
               return state;
     }
};

const signup = (dispatch) => {
     return ({ email, password }) => {
          // make api request to dign up with that e-mail and password

          // if we sign up, modify the state and say that we are authenticated

          // if signing up fails, we probably need to reflect that error message somehwere
     };
};

const signin = (dispatch) => {
     return ({ email, password }) => {
          // try to signin
          // handle success by updating state
          // handle failure by showing error message
     }
}

const signout = (dispatch) => {
     return () => {
          // signout
     }
}

export const { Provider, Context } = createDataContext(
     authReducer,
     { signin, signout, signup },
     { isSignedIn: false }
);