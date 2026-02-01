function num(id) {
  return Number(document.getElementById(id).value) || 0;
}

function calculate() {
  // TikTok points
  const ttPoints =
    num("ttLikes") * 1 +
    num("ttComments") * 3 +
    num("ttShares") * 5 +
    num("ttSaves") * 4 +
    num("ttFollowers") * 10;

  // Instagram
  const igPoints =
    num("igLikes") * 0.5 +
    num("igComments") * 2 +
    num("igShares") * 3 +
    num("igFollowers") * 5;

  // YouTube
  const ytPoints =
    num("ytLikes") * 1 +
    num("ytComments") * 3 +
    num("ytSubs") * 10;

  const bonusRaw = igPoints + ytPoints;
  const bonusCap = ttPoints * 0.25;
  const bonusFinal = Math.min(bonusRaw, bonusCap);

  const finalScore = ttPoints + bonusFinal;

  document.getElementById("output").innerHTML = `
    TikTok Points: <b>${ttPoints}</b><br>
    Bonus Points (Capped): <b>${bonusFinal.toFixed(1)}</b><br><br>
    🏆 <b>FINAL SCORE: ${finalScore.toFixed(1)}</b>
  `;
}
import { db } from "./firebase.js";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
