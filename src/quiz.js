import './quiz.css';
import { BrowserView, MobileView } from 'react-device-detect';

function QuizHead(props) {
  return (
      <div>
          <div className="QuizHead">{props.content}</div>
      </div>
  )
}

function Option(props) {
  return (
      <div>
          <button className="Option">{props.option}</button>
      </div>
  )
}

function QuizImg(props){
  return (
    <div>
        <img src={props.url} alt = "" className="QuizImg"/>
    </div>
)
}

export default function Quiz(){
    // const movePage = useNavigate;
  
    // function gotype(){
    //   movePage('/type');
    // }
  
    return (
      <div className="Quiz">
        <BrowserView>
        <div className='row'>
            <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
            <QuizHead content='다음 중 수강신청이 가장 빠른 방식은?' />
            </div>
          <Option option="예비수강 창에서 신청" />
          <Option option="학수번호 입력 후 신청" />
          <Option option="컴퓨터 접속해서 신청" />
        </BrowserView>
        <MobileView>
        <QuizImg url = 'https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png'/>
          <Quiz content='다음 중 수강신청이 가장 빠른 방식은?' />
          <Option option="예비수강 창에서 신청"/>
          <Option option="학수번호 입력 후 신청"/>
          <Option option="컴퓨터 접속해서 신청"/>
        </MobileView>
      </div>
    );
  }