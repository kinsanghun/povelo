import Submit from "components/inputs/Submit";
import SubTitle from "components/Title";
import { MouseEvent } from "react";


export default function Terms() {
    const lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const nextHandler = (e:MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
    }
    return (
        <div className="container terms">
            <SubTitle title="회원가입"/>
            {/* 꼭 체크박스 잊지말고 함수화 하기 */}
            <div className="input-check">
                <input type="checkbox" />
                <label>이용 약관 및 개인정보수집 및 이용에 모두 동의합니다.</label>
            </div>
            <div className="input-check">
                <input type="checkbox" />
                <label>이용 약관 및 개인정보수집 및 이용에 모두 동의합니다.</label>
            </div>
            <div className="term-box">{lorem}</div>
            <div className="input-check">
                <input type="checkbox" />
                <label>이용 약관 및 개인정보수집 및 이용에 모두 동의합니다.</label>
            </div>
            <div className="term-box">{lorem}</div>
            <Submit text="다음으로"/>
        </div>
    )
}