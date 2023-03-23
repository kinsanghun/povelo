import Input from "components/inputs/Input";
import Submit from "components/inputs/Submit";
import SubTitle from "components/Title";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    return (
        <div className="container login">
            <SubTitle title="Login"/>
            <form>
                <Input ref={idRef} type="text" id="id" placeHolder="아이디"/>
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