import popupscss from './scss/psh.module.scss'
import Close from '../img/formClose.svg'
import { useState } from 'react'
import { supabase } from '../data/supabaseData';

function Popupform({onOpen, onClose}) {

    const [inquiryData, setInquiryData] = useState({
        inquiry_type: 'r',
        inquiry_title: '',
        inquiry_content : ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInquiryData({
            ...inquiryData,
            [name]: value
        });
        //console.log(inquiryData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(inquiryData)

        const { data, error } = await supabase
        .from('mrc_inquiry')
        .insert([inquiryData]);

        alert('접수되었습니다!'); // 팝업 띄우기
        
        if (error) {
            console.error('Error submitting QnA:', error);
        } else {
            console.log('inquiry submitted:', data);

            // 성공적으로 제출 후 폼 초기화
            setInquiryData({
                inquiry_type: 'r',
                inquiry_title: '',
                inquiry_content : ''
            });
        }
    }


    return (
        <div className={popupscss.popupform} style={{display: onOpen ? "block" : "none"}}>
            <div className={popupscss.popupWrapS}>
                <div className={`${popupscss.popupHeaderS} d-flex justify-content-between`}>
                    <h3 className="mb-0">문의 사항 접수</h3>
                    <button onClick={onClose} className={popupscss.close} id="close">
                        <img src={Close} alt="닫기" />
                    </button>
                </div>
                <div className={popupscss.popupBodyS}>
                    <ul className="ps-0">
                        <li className={popupscss.point}>※ 문의 전 안내사항을 꼭 읽어주세요.</li>
                        <li>답변은 회원가입 시 등록한 이메일 주소로 전달드립니다.</li>
                        <li>접수 후 영업일 기준 2~3일 후 답변이 전달 받을 수 있습니다.</li>
                        <li>사람이 직접 답변을 작성하기 때문에 문의가 많을 시 답변이 오래걸릴 수 있습니다.</li>
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="type">문의 유형</label>
                            <select id="type" name="inquiry_type" onChange={handleChange} value={inquiryData.inquiry_type}>
                                <option value="" disabled>문의 유형을 선택해주세요.</option>
                                <option value="r">예약 문의</option>
                                <option value="e">이벤트 문의</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="title">제목</label>
                            <input type="text" id="title" name="inquiry_title" onChange={handleChange} value={inquiryData.inquiry_title} placeholder="제목을 입력해주세요." required />
                        </div>
                        <div>
                            <label htmlFor="text">내용</label>
                            <textarea id="text" name="inquiry_content" onChange={handleChange} value={inquiryData.inquiry_content} cols="30" rows="10" required>내용을 입력해주세요.</textarea>
                        </div>
                        <div className={`${popupscss.popupFooterS} d-flex justify-content-between`}>
                            <button onClick={onClose}>취소</button>
                            <button type="submit" className={popupscss.confirm}>확인</button>
                        </div>
                    </form>
                </div>                
            </div>
        </div>
    )
}

export default Popupform