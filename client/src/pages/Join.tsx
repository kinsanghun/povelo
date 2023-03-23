import Input from "components/inputs/Input"
import SectionTitle from "components/SectionTitle"
import Alert from "components/StateText/Alert"
import Description from "components/StateText/Description"
import SubTitle from "components/Title"
import { ChangeEvent, useCallback, useEffect, useState } from "react"


export default function Join() {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);

    const [comparePassword, setComparePassword] = useState('');
    const [comparePasswordValid, setComparePasswordValid] = useState(false);

    const emailHandler = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(!emailReg.test(e.target.value) && e.target.value !== "") {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }, []);

    const passwordHandler = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        if(!passwordReg.test(e.target.value) && e.target.value !== "") {
            setPasswordValid(true);
        } 
        else {
            setPasswordValid(false);
        }
    }, []);

    const comparePasswordHandler = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setComparePassword(e.target.value);
    }, []);

    useEffect(()=>{
        if(password !== comparePassword && comparePassword !== "") {
            setComparePasswordValid(true);
        } 
        else {
            setComparePasswordValid(false);
        }
    }, [password, comparePassword])
    
    return (
        <div className="container join">
            <SubTitle title="회원가입"/>
            <form>
                <div>
                    <SectionTitle title="이메일"/>
                    <Input type={"text"} placeHolder="이메일" onChange={emailHandler}/>
                    {emailValid ? <Alert text="이메일의 형식이 맞지 않습니다."/> : null}
                    <Description text="입력하신 이메일은 아이디로 사용됩니다."/>
                </div>
                <div>
                    <SectionTitle title="비밀번호"/>
                    <Input type={"password"} placeHolder="비밀번호" onChange={passwordHandler}/>
                    {passwordValid ? <Alert text="비밀번호는 최소 8자리에 숫자, 문자, 특수문자 각각 1개 이상 포함하여야 합니다."/> : null}
                    <Input type={"password"} placeHolder="비밀번호 재확인" onChange={comparePasswordHandler}/>
                    {comparePasswordValid ? <Alert text="비밀번호가 같지 않습니다. 다시 한번 확인해주세요."/> : null}
                    <Description text="비밀번호는 최소 8자리에 숫자, 문자, 특수문자 각각 1개 이상 포함하여야 합니다." />
                </div>
                <div>
                    <SectionTitle title="생년월일"/>
                    <div className="birthday">
                        <Input type={"text"} placeHolder="년도 4자리"/>
                        <Input type={"text"} placeHolder="출생월"/>
                        <Input type={"text"} placeHolder="일"/>
                    </div>
                </div>
                <div>
                    <SectionTitle title="주소"/>
                    <Input type={"text"} placeHolder="주소"/>
                    <Input type={"text"} placeHolder="상세주소"/>
                    <Input type={"text"} placeHolder="우편번호"/>
                </div>
                <div>
                    <SectionTitle title="연락처"/>
                    <div className="call-number">
                        <Input type={"text"} placeHolder="010"/>
                        <Input type={"text"} placeHolder="0000"/>
                        <Input type={"text"} placeHolder="0000"/>
                    </div>
                    <Description text="연락처는 휴대전화의 번호를 사용하시는 것을 권장합니다." />
                </div>
            </form>
        </div>
    )
}