import DiaryEditor from "../components/DiaryEditor";
import {useEffect} from "react";

const New = () => {
	useEffect(() => {
		const titleElement = document.getElementsByTagName("title")[0];
		titleElement.innerHTML = `나만의 일기장 - 새로쓰기`;
	}, []);
	return (
		<>
			<DiaryEditor />
		</>
	);
};

export default New;
