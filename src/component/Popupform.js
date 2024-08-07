import popupscss from './scss/psh.module.scss'
import Close from '../img/formClose.svg'

function Popupform({onOpen, onClose}) {
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
                    <form action="">
                        <div>
                            <label for="type">문의 유형</label>
                            <select id="type">
                                <option value="" disabled selected>문의 유형을 선택해주세요.</option>
                                <option value="">예약 문의</option>
                                <option value="">이벤트 문의</option>
                            </select>
                        </div>
                        <div>
                            <label for="title">제목</label>
                            <input type="text" id="title" placeholder="제목을 입력해주세요." />
                        </div>
                        <div>
                            <label for="text">내용</label>
                            <textarea name="" id="text" cols="30" rows="10">내용을 입력해주세요.</textarea>
                        </div>
                    </form>
                </div>
                <div className={`${popupscss.popupFooterS} d-flex justify-content-between`}>
                    <button onClick={onClose}>취소</button>
                    <button className={popupscss.confirm}>확인</button>
                </div>
            </div>
        </div>
    )
}

export default Popupform