// دوال الانتقال الفوري بين الأقسام (حل مشكلة عدم العثور على الملف)
function showGamesPage() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("gamesPage").style.display = "block";
    window.scrollTo(0, 0);
}

function showMainPage() {
    document.getElementById("gamesPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
    window.scrollTo(0, 0);
}

// دالة إرسال رسائل الشات بوت
function sendMessage() {
    var inputElement = document.getElementById("userInput");
    var messageText = inputElement.value.trim();
    if (messageText === "") return;

    var chatBox = document.getElementById("chatBox");

    var userDiv = document.createElement("div");
    userDiv.className = "msg user-msg";
    userDiv.innerText = messageText;
    chatBox.appendChild(userDiv);

    inputElement.value = ""; 
    chatBox.scrollTop = chatBox.scrollHeight; 

    setTimeout(function() {
        var botDiv = document.createElement("div");
        botDiv.className = "msg bot-msg";
        
        var text = messageText.toLowerCase();

        if (text.includes("هلا") || text.includes("مرحبا") || text.includes("السلام") || text.includes("هايو")) {
            botDiv.innerText = "يا هلا ومرحبًا بك في منصتي الرقمية الفخمة! ✨ كيف أقدر أساعدك اليوم؟";
        } 
        else if (text.includes("كيف حالك") || text.includes("شخبارك") || text.includes("كيفك")) {
            botDiv.innerText = "أنا بأفضل حال طالما أن أكوادنا تعمل بدون أخطاء! 🚀 وأنت كيف أمورك؟";
        }
        else if (text.includes("مين انا") || text.includes("من انا") || text.includes("اسمي")) {
            botDiv.innerText = "أنت المبرمج الأسطوري صانع ومطور هذه المنصة التفاعلية! 🖥️";
        } 
        else if (text.includes("العاب") || text.includes("بايثون") || text.includes("python") || text.includes("لعبة")) {
            botDiv.innerText = "مشاريع بايثون التي نفذناها أسطورية! خصوصاً ليفل 170 في غزو الفضاء وسكور 60 في الثعبان المطورة. 🛸💥";
        }
        else if (text.includes("تصميم") || text.includes("موقع") || text.includes("ويب") || text.includes("html")) {
            botDiv.innerText = "هذا الموقع مبني باستخدام HTML للهيكل، و CSS للألوان المضيئة، وجافا سكريبت لتشغيلي أنا! 🌐";
        }
        else if (text.includes("شكرا") || text.includes("مشكور") || text.includes("كفو")) {
            botDiv.innerText = "العفو يا بطل! هذا واجبي كـ مساعدك البرمجي الخاص. 🤝";
        }
        else {
            botDiv.innerText = "فهمت قصدك! رسالة مميزة بخصوص '" + messageText + "'. هذا الشات بوت يعمل بكود جافا سكريبت تفاعلي خارجي، وجاهز للتطوير أكثر! 🔥";
        }

        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600); 
}

// ربط أزرار الشات بالماوس والكيبورد
document.getElementById("sendBtn").onclick = sendMessage;

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// دالة إرسال نموذج التواصل والترحيب
function handleFormSubmit() {
    var name = document.getElementById("visitorName").value.trim();
    var email = document.getElementById("visitorEmail").value.trim();
    var msg = document.getElementById("visitorMessage").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("الرجاء ملء جميع الخانات قبل الإرسال! ⚠️");
        return;
    }

    alert("شكراً لك يا " + name + "! تم استلام رسالتك بنجاح وسنتواصل معك على بريدك: " + email + " 🚀");
    
    document.getElementById("visitorName").value = "";
    document.getElementById("visitorEmail").value = "";
    document.getElementById("visitorMessage").value = "";
}

// ربط دالة الفورم بالزر
document.getElementById("submitFormBtn").onclick = handleFormSubmit;