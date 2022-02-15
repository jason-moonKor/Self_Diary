import MyButton from "./MyButton";
import {useNavigate} from "react-router-dom";
import React from "react";

const DiaryItem = ({id, emotion, content, date}) => {
	const strDate = new Date(parseInt(date)).toLocaleDateString(); //..하..오전9시라고 자꾸 나와서 뭐가 문제냐고 600번 혼잣말하면서 버그찾다가 드디어 찾아냄.. toLocaleString 라고 중간에 Date 빼먹고 썼었음..심지어 에러도안나고 맞춤법도 안틀림..하..여튼 버그 고침
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`/diary/${id}`);
	};
	const goEdit = () => {
		navigate(`/edit/${id}`);
	};
	return (
		<div className="DiaryItem">
			<div
				onClick={goDetail}
				className={[
					"emotion_img_wrapper",
					`emotion_img_wrapper_${emotion}`
				].join(" ")}
			>
				<img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
			</div>
			<div onClick={goDetail} className="info_wrapper">
				<div className="diary_date">{strDate}</div>
				<div className="diary_content_preview">{content.slice(0, 25)}</div>
			</div>
			<div className="btn_wrapper">
				<MyButton onClick={goEdit} text={"수정하기"} />
			</div>
		</div>
	);
};

export default React.memo(DiaryItem);
