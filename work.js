// 開いているページが英語（lang="en"）かどうかを自動判定
const isEn = document.documentElement.lang === "en";

// 5つの引数から制作物リストを自動作成する関数
function addWork(title, url, relatedPaper, descJa, descEn) {
  const list = document.getElementById("work-list");
  if (!list) return; // work-listがないページでは何もしない

  const li = document.createElement("li");

  // 言語に応じて説明文とラベルを自動選択
  const desc = isEn ? descEn : descJa;
  const relatedLabel = isEn ? "Related paper: " : "関連論文：";

  // URLがある場合だけ制作名をリンクにする
  const titleHtml = url
    ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`
    : title;

  // 説明文がある場合だけ改行して追加
  const descHtml = desc ? `<br>${desc}` : "";

  // 関連論文がある場合だけグレーの小さい文字で追加
  const relatedHtml = relatedPaper
    ? `<br><span class="paper-meta">${relatedLabel}${relatedPaper}</span>`
    : "";

  li.innerHTML = `${titleHtml}${descHtml}${relatedHtml}`;
  list.appendChild(li);
}

// ▼ ここから制作物を追加（5つの引数を順番に指定）
addWork(
  "SFPACK", // 制作名
  "", // URL（ない場合は ""）
  "Nomura et al. (2026), Atmospheric Science Letters", // 関連論文（ない場合は ""）
  "論文の数値実験で使用した3層球面準地衡モデルのシミュレーションコードです。", // 日本語の説明
  "Simulation code of the 3-layer spherical quasi-geostrophic model used in the paper." // 英語の説明
);