// 開いているページが英語（lang="en"）かどうかを自動判定
const isEn = document.documentElement.lang === "en";

// 8つの引数から論文リストを自動作成する関数
function addPaper(authorYearTitle, journal, vol, issue, page, doi, keywordsJa, keywordsEn, introImageJa, introImageEn) {
    const list = document.getElementById("paper-list");
    const li = document.createElement("li");

    // 言語に応じてキーワード・ラベル・画像を自動選択
    const keywords = isEn ? keywordsEn : keywordsJa;
    const keywordLabel = isEn ? "Keywords: " : "キーワード：";
    const introImage = isEn ? introImageEn : introImageJa;
    const introLabel = isEn ? "Visual Summary" : "論文かんたん紹介";

    let volPageHtml = "";
    if (vol) volPageHtml += `, <strong>${vol}</strong>`;
    //if (issue) volPageHtml += `(${issue})`;
    if (page) volPageHtml += `, ${page}`;

    const doiHtml = doi ? `, <a href="${doi}" target="_blank" rel="noopener noreferrer">${doi}</a>` : "";
    const keywordsHtml = keywords ? `<br><span class="paper-meta">${keywordLabel}${keywords}</span>` : "";

    const introHtml = introImage ? `
        <br>
        <a href="${introImage}" target="_blank" rel="noopener noreferrer" class="intro-link">
        ${introLabel}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        </a>
        <a href="${introImage}" target="_blank" rel="noopener noreferrer">
        <img src="${introImage}" alt="${introLabel}" class="paper-preview">
        </a>
    ` : "";
    
    li.innerHTML = `${authorYearTitle} <em>${journal}</em>${volPageHtml}${doiHtml}.${keywordsHtml}${introHtml}`;
    list.appendChild(li);
}

// ▼ 論文データ（日英共通で1回書けば両方のページに表示されます）
addPaper(
    "Nomura, S., T. Enomoto, & H. Mukougawa, 2026: Dynamical Linkage between Blocking Predictability and Jet Stream Quasi-Stationary States.",
    "Atmospheric Science Letters",
    "27", // 巻 (vol)
    "12", // 号 (issue)
    "e70080", // ページ (page)
    "https://doi.org/10.1002/asl2.70080",
    "寒波、ロスビー波の砕波、グローバルな力学系、安定多様体、アンサンブル予報、3層球面準地衡方程式",
    "Cold wave, Rossby wave breaking, Global dynamical system, Stable manifold, Ensemble forecast, 3-levels spherical QG model",
    "images/ronbunkantan_ASL2026.png",
    ""
);
/*
addPaper(
    "Nomura, S., & T. Enomoto, 2027: An Efficient and Stable Solver for the Shallow Water Equations on Regular Latitude-Longitude Grids Using Spherical Fourier Transforms.",
    "Computational Science and Its Applications – ICCSA 2026 Workshops",
    "", // 巻 (vol)
    "", // 号 (issue)
    "O. Gervasi, B. Murgante, C. Garau, A.M.A.C. Rocha, M.N. Faginas Lago, A.C. Braga, and Y. Karaca, Eds, Cham, Springer Nature Switzerland, 117–134",
    "https://doi.org/10.1007/978-3-032-30539-8_8",
    "全球モデル、数値計算手法、球の特異点の解消、ルジャンドル陪函数",
    "Global model, numerical calculation method, elimination of singularities on the sphere, associated Legendre functions",
    "images/ronbunkantan_ASL2026.png",
    ""
);
*/