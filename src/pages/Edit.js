import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const id = searchParams.get("id");
	const mode = searchParams.get("mode");
	console.log("id :", id);
	console.log("mode : ", mode);
	return (
		<div>
			<h1>Edit</h1>
			<p>이곳은 Edit 입니다</p>
			<button onClick={() => setSearchParams({who: "JASON"})}>QS 바꾸기</button>
			<button
				onClick={() => {
					navigate("/home");
				}}
			>
				홈으로 가기
			</button>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				뒤로가기
			</button>
		</div>
	);
};

export default Edit;
