import axios from "axios";
import Input from "components/inputs/Input";
import Submit from "components/inputs/Submit";
import SubTitle from "components/Title";
import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    const loginHandler = async (e:FormEvent) => {
        e.preventDefault();
        if(idRef.current && pwRef.current) {

            const formData = {
                userId : idRef.current.value,
                userPw : pwRef.current.value
            }
            console.log(formData);

            axios.post(process.env.REACT_APP_BASE_URL!, formData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }

    }
    return (
        <div className="container login">
            <SubTitle title="Login"/>
            <form onSubmit={loginHandler}>
                <Input ref={idRef} type="text" id="id" placeHolder="이메일"/>
                <Input ref={pwRef} type="password" id="pw" placeHolder="비밀번호"/>
                <Submit text="로그인"/>
            </form>
            
            <div className="forget">
                <h2>아이디 혹은 비밀번호를 분실하셨나요?</h2>
                <div className="btn">
                    <Link to="/">아이디/패스워드 찾기</Link><Link to="/join">회원가입</Link>
                </div>
            </div>
        </div>
    )
}