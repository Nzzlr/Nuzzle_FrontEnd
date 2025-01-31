import { useState } from "react";
import { useNavigate } from "react-router-dom";
import letterRabbitIcon from "../../assets/letter_rabbit.png";

const WakeUpLetterPage = () => {
  const [recipient, setRecipient] = useState("아빠");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = () => {
    setShowPopup(true);
    localStorage.setItem("answered", "true");
    setTimeout(() => {
      navigate("/today-question", {
        state: { showPopup: false, setIsWriting: 0 },
      });
    }, 500); // Adjust the delay as needed
  };

  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Pretendard",
    },
    card: {
      padding: "20px",
      borderRadius: "30px",
      width: "300px",
      textAlign: "center",
      backgroundColor: "#FFE6F0",
      marginBottom: "20px",
      fontFamily: "Pretendard",
      height: "60vh",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "left",
      fontFamily: "Pretendard",
      fontSize: "18px",
      fontWeight: "bold",
    },
    icon: {
      width: "80%",
      height: "80%",
      marginBottom: "10px",
      fontFamily: "Pretendard",
    },
    select: {
      border: "none",
      fontWeight: "bold",
      background: "transparent",
      fontFamily: "Pretendard",
      fontSize: "18px",
    },
    textarea: {
      width: "100%",
      border: "none",
      margin: "10px 0",
      resize: "none",
      background:
        "repeating-linear-gradient(to bottom, transparent, transparent 18px, #ffffff 20px)",
      fontFamily: "Pretendard",
      fontWeight: "600",
      whiteSpace: "pre-wrap",
      fontSize: "20px",
      lineHeight: "30px",
      height: "35vh",
    },
    placeholder: {
      color: "#888",
      fontFamily: "Pretendard",
    },
    button: {
      backgroundColor: "#FFB1D0",
      border: "none",
      padding: "15px 70px",
      borderRadius: "20px",
      cursor: "pointer",
      marginTop: "10px",
      fontFamily: "Pretendard",
      fontWeight: "bold",
    },
    popup: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      fontFamily: "Pretendard",
    },
    popupContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Pretendard",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={letterRabbitIcon} alt="rabbit icon" style={styles.icon} />
          <p>
            <strong>
              To:{" "}
              <select
                value={recipient}
                onChange={handleRecipientChange}
                style={styles.select}
              >
                <option value="아빠">아빠</option>
                <option value="엄마">엄마</option>
                <option value="동생">동생</option>
              </select>
              님께 보냅니다.
            </strong>
          </p>
        </div>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder={`해당 부분을 클릭하여\n적고 싶은 내용을 입력해주세요.\n수신자는 발신자를 알 수 없습니다.`}
          style={styles.textarea}
        />
      </div>
      <button style={styles.button} onClick={handleSubmit}>
        비밀 편지 전송하기
      </button>
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <p>성공적으로 비밀 편지를 보냈어요!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WakeUpLetterPage;
