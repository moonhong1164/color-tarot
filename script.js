const colorCards = [
    { name: "Red 1", color: "#E57373", meaning: "따뜻한 사랑, 활력, 친절함" },
    { name: "Red 2", color: "#E60000", meaning: "열정, 강한 의지, 행동력" },
    { name: "Red 3", color: "#B20000", meaning: "분노, 강박, 위험" },
    { name: "Orange 1", color: "#F4A261", meaning: "창의성, 따뜻한 교류, 열린 마음" },
    { name: "Orange 2", color: "#E78A00", meaning: "모험, 도전정신, 생동감" },
    { name: "Orange 3", color: "#D2691E", meaning: "충동, 방황, 불안정" },
    { name: "Yellow 1", color: "#FFF176", meaning: "희망, 명확한 사고, 순수한 기쁨" },
    { name: "Yellow 2", color: "#FFEB00", meaning: "자신감, 지적 능력, 분석력" },
    { name: "Yellow 3", color: "#FFD700", meaning: "질투, 불안정, 속임수" },
    { name: "Green 1", color: "#A8E6CF", meaning: "치유, 평화, 자연과의 연결" },
    { name: "Green 2", color: "#4CAF50", meaning: "균형, 성장, 안정감" },
    { name: "Green 3", color: "#2E7D32", meaning: "질투, 소유욕, 탐욕" },
    { name: "Blue 1", color: "#81D4FA", meaning: "평온, 신뢰, 원활한 의사소통" },
    { name: "Blue 2", color: "#2196F3", meaning: "지혜, 직관적인 사고, 집중력" },
    { name: "Blue 3", color: "#0D47A1", meaning: "우울, 외로움, 소외감" }
];

function drawCards(num) {
    const cardArea = document.getElementById("cardArea");
    cardArea.innerHTML = "";
    let selectedCards = [];

    while (selectedCards.length < num) {
        let randomCard = colorCards[Math.floor(Math.random() * colorCards.length)];
        if (!selectedCards.includes(randomCard)) {
            selectedCards.push(randomCard);
        }
    }

    selectedCards.forEach(card => {
        let cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.style.backgroundColor = card.color;
        cardDiv.innerHTML = card.name;

        let revealButton = document.createElement("button");
        revealButton.innerText = "해석 보기";
        revealButton.className = "hidden";
        revealButton.onclick = () => alert(card.name + ": " + card.meaning);

        cardDiv.onclick = () => revealButton.classList.remove("hidden");

        let cardWrapper = document.createElement("div");
        cardWrapper.appendChild(cardDiv);
        cardWrapper.appendChild(revealButton);
        cardArea.appendChild(cardWrapper);
    });
}