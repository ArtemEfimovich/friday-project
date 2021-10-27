import React from 'react';
import style from './SignUp.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {AppRootStateType} from "../../../bll/store/store";
import {RequestStatusType} from "../../../bll/reducers/app-reducer";
import {signUpTC} from "../../../bll/reducers/sign-up-reducer";
import Visibility from '@mui/icons-material/Visibility';
import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    Input,
    InputAdornment,
    InputLabel
} from "@material-ui/core";
import {FormControl} from "@mui/material";
import {VisibilityOff} from "@mui/icons-material";

const SignUp = () => {
    const error = useSelector<AppRootStateType, string | null>(state => state.signUp.error);
    const loading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const isLogged = useSelector<AppRootStateType, boolean>(state => state.login.isLogin)
    const dispatch = useDispatch()

    interface State {
        amount: string;
        password: string;
        confirmPassword: string;
        email: string;
        weight: string;
        weightRange: string;
        showPassword: boolean;
        showConfirmPassword: boolean;
        disabled: boolean;
        confirm: boolean;
    }

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        confirmPassword: '',
        email: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false,
        disabled: false,
        confirm: true
    });
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const sendData = () => {
        dispatch(signUpTC(values.email, values.password))
    }
    const resetData = () =>{
        setValues(values => ({...values, email: '', password:'',confirmPassword:''}));
    }
    const comparePassword = () => {
        if(values.password !== values.confirmPassword){
            setValues(values => ({...values, confirm: false, disabled:true}))
        } else{
            setValues(values => ({...values, confirm: true, disabled: false}));
        }
    }
    if (isLogged) {
        return <Redirect to={PATH.PROFILE}/>
    }
    return (
        <div>
            {loading === 'loading' ? <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress/>
            </Box> : <div className={style.register}>
                <div className={style.description}>It-incubator</div>
                <h1>Sign Up</h1>

                <FormControl sx={{m: 1, width: '80%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl sx={{m: 1, width: '80%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{m: 1, width: '80%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Confirm password</InputLabel>
                    <Input
                        onBlur={comparePassword}
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                >
                                    {values.showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className={style.buttons}>
                    {error && <div className={style.error}>{error}</div>}
                    {!values.confirm && <div className={style.error}>The passwords don`t match</div>}
                    <Button onClick={resetData} variant="outlined" size="medium">Cancel</Button>
                    <Button disabled={values.disabled} onClick={sendData} variant="contained" size="medium">Register</Button>
                </div>

            </div>}
        </div>
    )
}

export default SignUp;