/**
 * Chess Baronu - Açılış Kitabı (Opening Book) Genişletilmiş Veritabanı
 * Bu dosya satranç teorisindeki en popüler 14 açılış sistemini ve bunlara ait derin devam yollarını barındırır.
 * 
 * Özellikler:
 * - Klasik açılış hatları 8 ila 12 hamle derinliğine kadar uzatılmıştır.
 * - Botun tekdüze oynamaması için kritik teorik dönemeçlerde çoklu hamle dizileri (varyasyonlar) sunar.
 * - İşlemciyi tamamen özgür kılarak oyunun ilk aşamasını anlık ve kusursuz oynatır.
 * 
 * Uyumlu Notasyon:
 * - Taş sembolleri ve hamle formatı, oyunun kendi özel notasyonuna (♞g1-f3, e2-e4, cxd4 vb.) göre tasarlanmıştır.
 */

const ACILIS_KITABI = {
  // === BAŞLANGIÇ (Beyaz'ın İlk Hamleleri) ===
  "": ["e2-e4", "d2-d4", "c2-c4", "♞g1-f3"],

  // ==========================================
  // 1. SİCİLYA SAVUNMASI (Sicilian Defense)
  // ==========================================
  "e2-e4": ["c7-c5", "e7-e6", "c7-c6", "e7-e5", "d7-d5", "d7-d6"],
  "e2-e4 c7-c5": ["♞g1-f3", "c2-c3", "♞b1-c3", "d2-d4"], // Açık, Alapin, Kapalı, Smith-Morra
  
  // --- AÇIK SİCİLYA ANA HATTI ---
  "e2-e4 c7-c5 ♞g1-f3": ["d7-d6", "♞b8-c6", "e7-e6"],
  
  // A) Najdorf Varyantı (Derinlemesine 10 Hamle)
  "e2-e4 c7-c5 ♞g1-f3 d7-d6": "d2-d4",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4": "cxd4",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4": "♞g8-f6",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3": "a7-a6",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 a7-a6": ["♝c1-g5", "♝f1-e2", "♝c1-e3", "f2-f4"], // Ana yollar
  // Bg5 Hattı
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 a7-a6 ♝c1-g5": "e7-e6",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 a7-a6 ♝c1-g5 e7-e6 f2-f4": ["♝f8-e7", "♛d8-c7", "♞b8-d7"],
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 a7-a6 ♝c1-g5 e7-e6 f2-f4 ♝f8-e7": "♛d1-f3",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 a7-a6 ♝c1-g5 e7-e6 f2-f4 ♝f8-e7 ♛d1-f3 ♛d8-c7": "O-O-O",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 a7-a6 ♝c1-g5 e7-e6 f2-f4 ♝f8-e7 ♛d1-f3 ♛d8-c7 O-O-O": "♞b8-d7",
  
  // B) Ejderha (Dragon) Varyantı (Yugoslav Atağı Soltis Hattı)
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 g7-g6": "♝c1-e3",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 g7-g6 ♝c1-e3": "♝f8-g7",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 g7-g6 ♝c1-e3 ♝f8-g7 f2-f3": "O-O",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 g7-g6 ♝c1-e3 ♝f8-g7 f2-f3 O-O ♛d1-d2": "♞b8-c6",
  "e2-e4 c7-c5 ♞g1-f3 d7-d6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 g7-g6 ♝c1-e3 ♝f8-g7 f2-f3 O-O ♛d1-d2 ♞b8-c6 O-O-O": "d7-d5",

  // C) Klasik Sicilya (♞b8-c6 Hattı)
  "e2-e4 c7-c5 ♞g1-f3 ♞b8-c6": "d2-d4",
  "e2-e4 c7-c5 ♞g1-f3 ♞b8-c6 d2-d4": "cxd4",
  "e2-e4 c7-c5 ♞g1-f3 ♞b8-c6 d2-d4 cxd4 ♞f3xd4": ["♞g8-f6", "e7-e5", "g7-g6"],
  "e2-e4 c7-c5 ♞g1-f3 ♞b8-c6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6": "♞b1-c3",
  "e2-e4 c7-c5 ♞g1-f3 ♞b8-c6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3": "d7-d6",
  "e2-e4 c7-c5 ♞g1-f3 ♞b8-c6 d2-d4 cxd4 ♞f3xd4 ♞g8-f6 ♞b1-c3 d7-d6 ♝f1-c4": "♛d8-b6",

  // --- SİCİLYA ALAPİN VARYANTI (c2-c3 Hattı) ---
  "e2-e4 c7-c5 c2-c3": ["d7-d5", "♞g8-f6"],
  "e2-e4 c7-c5 c2-c3 d7-d5": "exd5",
  "e2-e4 c7-c5 c2-c3 d7-d5 exd5": "♛d8xd5",
  "e2-e4 c7-c5 c2-c3 d7-d5 exd5 ♛d8xd5 d2-d4": "♞g8-f6",
  "e2-e4 c7-c5 c2-c3 d7-d5 exd5 ♛d8xd5 d2-d4 ♞g8-f6 ♞g1-f3": ["e7-e6", "♝c8-g4"],

  // ==========================================
  // 2. İSPANYOL AÇILIŞI (Ruy Lopez)
  // ==========================================
  "e2-e4 e7-e5": "♞g1-f3",
  "e2-e4 e7-e5 ♞g1-f3": ["♞b8-c6", "♞g8-f6", "d7-d6"], // Ruy Lopez/Italian, Petrov veya Philidor
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6": ["♝f1-b5", "♝f1-c4", "d2-d4"],
  
  // Morphy Savunması Kapalı Varyasyon (Derinlemesine 11 Hamle)
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5": ["a7-a6", "♞g8-f6"],
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4": "♞g8-f6",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O": ["♝f8-e7", "♞f6xe4"],
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7": "♜f1-e1",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7 ♜f1-e1": "b7-b5",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7 ♜f1-e1 b7-b5 ♝b5-b3": "d7-d6",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7 ♜f1-e1 b7-b5 ♝b5-b3 d7-d6 c2-c3": "O-O",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7 ♜f1-e1 b7-b5 ♝b5-b3 d7-d6 c2-c3 O-O h2-h3": ["♞c6-a5", "♞c6-b8", "♝c8-b7"], // Chigorin, Breyer veya Zaitsev
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7 ♜f1-e1 b7-b5 ♝b5-b3 d7-d6 c2-c3 O-O h2-h3 ♞c6-a5": "♝b3-c2",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-b5 a7-a6 ♝b5-a4 ♞g8-f6 O-O ♝f8-e7 ♜f1-e1 b7-b5 ♝b5-b3 d7-d6 c2-c3 O-O h2-h3 ♞c6-a5 ♝b3-c2 c7-c5": "d2-d4",

  // ==========================================
  // 3. İTALYAN AÇILIŞI (Italian Game)
  // ==========================================
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4": ["♝f8-c5", "♞g8-f6"],
  
  // Giuoco Piano Ana Hattı (Derinlemesine 11 Hamle)
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5": ["c2-c3", "d2-d3", "O-O"],
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3": "♞g8-f6",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4": "exd4",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4 exd4 c3xd4": "♝c5-b4",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4 exd4 c3xd4 ♝c5-b4 ♝c1-d2": "♝b4xd2",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4 exd4 c3xd4 ♝c5-b4 ♝c1-d2 ♝b4xd2 ♞b1xd2": "d7-d5",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4 exd4 c3xd4 ♝c5-b4 ♝c1-d2 ♝b4xd2 ♞b1xd2 d7-d5 exd5": "♞f6xd5",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4 exd4 c3xd4 ♝c5-b4 ♝c1-d2 ♝b4xd2 ♞b1xd2 d7-d5 exd5 ♞f6xd5 ♛d1-b3": "♞c6-e7",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 ♝f1-c4 ♝f8-c5 c2-c3 ♞g8-f6 d2-d4 exd4 c3xd4 ♝c5-b4 ♝c1-d2 ♝b4xd2 ♞b1xd2 d7-d5 exd5 ♞f6xd5 ♛d1-b3 ♞c6-e7 O-O": "O-O",

  // ==========================================
  // 4. VEZİR GAMBİTİ (Queen's Gambit)
  // ==========================================
  "d2-d4": ["d7-d5", "♞g8-f6", "e7-e6", "f7-f5", "b7-b6"], // QG, Hint, Fransız/Benoni, Hollanda, English Defense
  "d2-d4 d7-d5": ["c2-c4", "♝c1-f4", "e2-e3"], // Queen's Gambit, London System, Colle System
  "d2-d4 d7-d5 c2-c4": ["e7-e6", "c7-c6", "d5xc4"], // QGD, Slav, QGA
  
  // --- KABUL EDİLMEYEN VEZİR GAMBİTİ (QGD - Derinlemesine 11 Hamle) ---
  "d2-d4 d7-d5 c2-c4 e7-e6": "♞b1-c3",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3": ["♞g8-f6", "♝f8-be7", "c7-c5"], // Klasik, Alatortsev, Tarrasch
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6": "♝c1-g5",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5": "♝f8-e7",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5 ♝f8-e7 e2-e3": "O-O",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5 ♝f8-e7 e2-e3 O-O ♞g1-f3": "♞b8-d7",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5 ♝f8-e7 e2-e3 O-O ♞g1-f3 ♞b8-d7 ♜a1-c1": "c7-c6",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5 ♝f8-e7 e2-e3 O-O ♞g1-f3 ♞b8-d7 ♜a1-c1 c7-c6 ♝f1-d3": "d5xc4",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5 ♝f8-e7 e2-e3 O-O ♞g1-f3 ♞b8-d7 ♜a1-c1 c7-c6 ♝f1-d3 d5xc4 ♝d3xc4": "♞f6-d5",
  "d2-d4 d7-d5 c2-c4 e7-e6 ♞b1-c3 ♞g8-f6 ♝c1-g5 ♝f8-e7 e2-e3 O-O ♞g1-f3 ♞b8-d7 ♜a1-c1 c7-c6 ♝f1-d3 d5xc4 ♝d3xc4 ♞f6-d5 ♝c1xe7": "♛d8xe7",

  // ==========================================
  // 5. CARO-KANN SAVUNMASI (Caro-Kann Defense)
  // ==========================================
  "e2-e4 c7-c6": "d2-d4",
  "e2-e4 c7-c6 d2-d4": "d7-d5",
  "e2-e4 c7-c6 d2-d4 d7-d5": ["e4-e5", "♞b1-c3", "exd5"], // İlerleme, Klasik, Değişim
  
  // İlerleme Varyantı (Advance Line - 10 Hamle)
  "e2-e4 c7-c6 d2-d4 d7-d5 e4-e5": "♝c8-f5",
  "e2-e4 c7-c6 d2-d4 d7-d5 e4-e5 ♝c8-f5 ♞g1-f3": "e7-e6",
  "e2-e4 c7-c6 d2-d4 d7-d5 e4-e5 ♝c8-f5 ♞g1-f3 e7-e6 ♝f1-e2": "c6-c5",
  "e2-e4 c7-c6 d2-d4 d7-d5 e4-e5 ♝c8-f5 ♞g1-f3 e7-e6 ♝f1-e2 c6-c5 ♝c1-e3": "♛d8-b6",
  "e2-e4 c7-c6 d2-d4 d7-d5 e4-e5 ♝c8-f5 ♞g1-f3 e7-e6 ♝f1-e2 c6-c5 ♝c1-e3 ♛d8-b6 ♞b1-c3": "♞b8-c6",
  "e2-e4 c7-c6 d2-d4 d7-d5 e4-e5 ♝c8-f5 ♞g1-f3 e7-e6 ♝f1-e2 c6-c5 ♝c1-e3 ♛d8-b6 ♞b1-c3 ♞b8-c6 O-O": "♛b6xb2",

  // ==========================================
  // 6. FRANSIZ SAVUNMASI (French Defense)
  // ==========================================
  "e2-e4 e7-e6": "d2-d4",
  "e2-e4 e7-e6 d2-d4": "d7-d5",
  "e2-e4 e7-e6 d2-d4 d7-d5": ["♞b1-c3", "e4-e5", "exd5"],
  
  // Winawer / Rubinstein / Klasik
  "e2-e4 e7-e6 d2-d4 d7-d5 ♞b1-c3": ["♝f8-b4", "♞g8-f6", "d5xe4"],
  "e2-e4 e7-e6 d2-d4 d7-d5 ♞b1-c3 ♝f8-b4": "e4-e5",
  "e2-e4 e7-e6 d2-d4 d7-d5 ♞b1-c3 ♝f8-b4 e4-e5": "c7-c5",
  "e2-e4 e7-e6 d2-d4 d7-d5 ♞b1-c3 ♝f8-b4 e4-e5 c7-c5 a2-a3": "♝b4xc3",
  "e2-e4 e7-e6 d2-d4 d7-d5 ♞b1-c3 ♝f8-b4 e4-e5 c7-c5 a2-a3 ♝b4xc3 b2xc3": "♞e8-g7",

  // ==========================================
  // 7. İSKANDİNAV SAVUNMASI (Scandinavian Defense)
  // ==========================================
  "e2-e4 d7-d5": "exd5",
  "e2-e4 d7-d5 exd5": ["♛d8xd5", "♞g8-f6"],
  
  // Vezir Hamlesi
  "e2-e4 d7-d5 exd5 ♛d8xd5 ♞b1-c3": "♛d5-a5",
  "e2-e4 d7-d5 exd5 ♛d8xd5 ♞b1-c3 ♛d5-a5 d2-d4": "♞g8-f6",
  "e2-e4 d7-d5 exd5 ♛d8xd5 ♞b1-c3 ♛d5-a5 d2-d4 ♞g8-f6 ♞g1-f3": ["c7-c6", "♝c8-f5"],
  
  // At Hamlesi
  "e2-e4 d7-d5 exd5 ♞g8-f6": "d2-d4",
  "e2-e4 d7-d5 exd5 ♞g8-f6 d2-d4": "♞f6xd5",
  "e2-e4 d7-d5 exd5 ♞g8-f6 d2-d4 ♞f6xd5 c2-c4": "♞d5-b6",

  // ==========================================
  // 8. ŞAH-HİNT SAVUNMASI (King's Indian Defense)
  // ==========================================
  "d2-d4 ♞g8-f6": "c2-c4",
  "d2-d4 ♞g8-f6 c2-c4": ["g7-g6", "e7-e6", "c7-c5"], // Şah-Hint, Nimzo, Benoni
  "d2-d4 ♞g8-f6 c2-c4 g7-g6": "♞b1-c3",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3": "♝f8-g7",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 ♝f8-g7 e2-e4": "d7-d6",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 ♝f8-g7 e2-e4 d7-d6 ♞g1-f3": "O-O",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 ♝f8-g7 e2-e4 d7-d6 ♞g1-f3 O-O ♝f1-e2": "e7-e5",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 ♝f8-g7 e2-e4 d7-d6 ♞g1-f3 O-O ♝f1-e2 e7-e5 O-O": "♞b8-c6",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 ♝f8-g7 e2-e4 d7-d6 ♞g1-f3 O-O ♝f1-e2 e7-e5 O-O ♞b8-c6 d4-d5": "♞c6-e7",

  // ==========================================
  // 9. NİMZO-HİNT SAVUNMASI (Nimzo-Indian Defense)
  // ==========================================
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 ♞b1-c3": "♝f8-b4",
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 ♞b1-c3 ♝f8-b4 e2-e3": "O-O",
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 ♞b1-c3 ♝f8-b4 e2-e3 O-O ♝f1-d3": "d7-d5",
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 ♞b1-c3 ♝f8-b4 e2-e3 O-O ♝f1-d3 d7-d5 ♞g1-f3": "c7-c5",

  // ==========================================
  // 10. PETROV SAVUNMASI (Petrov's Defense)
  // ==========================================
  "e2-e4 e7-e5 ♞g1-f3 ♞g8-f6": "♞f3xe5",
  "e2-e4 e7-e5 ♞g1-f3 ♞g8-f6 ♞f3xe5": "d7-d6",
  "e2-e4 e7-e5 ♞g1-f3 ♞g8-f6 ♞f3xe5 d7-d6 ♞e5-f3": "♞f6xe4",
  "e2-e4 e7-e5 ♞g1-f3 ♞g8-f6 ♞f3xe5 d7-d6 ♞e5-f3 ♞f6xe4 d2-d4": "d7-d5",

  // ==========================================
  // 11. İSKOÇ AÇILIŞI (Scotch Game)
  // ==========================================
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 d2-d4": "exd4",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 d2-d4 exd4 ♞f3xd4": ["♞g8-f6", "♝f8-c5"],
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 d2-d4 exd4 ♞f3xd4 ♞g8-f6": "♞b1-c3",
  "e2-e4 e7-e5 ♞g1-f3 ♞b8-c6 d2-d4 exd4 ♞f3xd4 ♝f8-c5": "♝c1-e3",

  // ==========================================
  // 12. MODERN BENONİ SAVUNMASI (Modern Benoni)
  // ==========================================
  "d2-d4 ♞g8-f6 c2-c4 c7-c5": "d2-d4-d5", // Oyundaki Rok/İlerleme formatı
  "d2-d4 ♞g8-f6 c2-c4 c7-c5 d2-d5": "e7-e6",
  "d2-d4 ♞g8-f6 c2-c4 c7-c5 d2-d5 e7-e6 ♞b1-c3": "exd5",
  "d2-d4 ♞g8-f6 c2-c4 c7-c5 d2-d5 e7-e6 ♞b1-c3 exd5 c4xd5": "d7-d6",
  "d2-d4 ♞g8-f6 c2-c4 c7-c5 d2-d5 e7-e6 ♞b1-c3 exd5 c4xd5 d7-d6 e2-e4": "g7-g6",

  // ==========================================
  // 13. GRÜNFELD SAVUNMASI (Grünfeld Defense)
  // ==========================================
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 d7-d5": "c4xd5",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 d7-d5 c4xd5": "♞f6xd5",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 d7-d5 c4xd5 ♞f6xd5 e2-e4": "♞d5xc3",
  "d2-d4 ♞g8-f6 c2-c4 g7-g6 ♞b1-c3 d7-d5 c4xd5 ♞f6xd5 e2-e4 ♞d5xc3 b2xc3": "♝f8-g7",

  // ==========================================
  // 14. KATALAN AÇILIŞI (Catalan Opening)
  // ==========================================
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 g2-g3": "d7-d5",
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 g2-g3 d7-d5": "♝f1-g2",
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 g2-g3 d7-d5 ♝f1-g2 ♝f8-e7": "♞g1-f3",
  "d2-d4 ♞g8-f6 c2-c4 e7-e6 g2-g3 d7-d5 ♝f1-g2 ♝f8-e7 ♞g1-f3 O-O": "O-O",

  // ==========================================
  // 15. HOLLANDA SAVUNMASI (Dutch Defense)
  // ==========================================
  "d2-d4 f7-f5": "g2-g3",
  "d2-d4 f7-f5 g2-g3": "♞g8-f6",
  "d2-d4 f7-f5 g2-g3 ♞g8-f6 ♝f1-g2": "g7-g6",
  "d2-d4 f7-f5 g2-g3 ♞g8-f6 ♝f1-g2 g7-g6 ♞g1-f3": "♝f8-g7",

  // ==========================================
  // 16. PHILIDOR SAVUNMASI (Philidor Defense)
  // ==========================================
  "e2-e4 e7-e5 ♞g1-f3 d7-d6": "d2-d4",
  "e2-e4 e7-e5 ♞g1-f3 d7-d6 d2-d4": ["exd4", "♞g8-f6"],
  "e2-e4 e7-e5 ♞g1-f3 d7-d6 d2-d4 exd4": "♞f3xd4",
  "e2-e4 e7-e5 ♞g1-f3 d7-d6 d2-d4 exd4 ♞f3xd4 g7-g6": "♞b1-c3",

  // ==========================================
  // 17. İNGİLİZ SAVUNMASI (English Defense)
  // ==========================================
  "d2-d4 b7-b6": "e2-e4",
  "d2-d4 b7-b6 e2-e4": "♝c8-b7",
  "d2-d4 b7-b6 e2-e4 ♝c8-b7": "♝f1-d3",
  "d2-d4 b7-b6 e2-e4 ♝c8-b7 ♝f1-d3": "e7-e6",
  "d2-d4 b7-b6 e2-e4 ♝c8-b7 ♝f1-d3 e7-e6 ♞g1-f3": "c7-c5",

  // ==========================================
  // 18. VEZİR PİYONU OYUNLARI (Queen's Pawn Game)
  // ==========================================
  // A) Londra Sistemi (London System)
  "d2-d4 d7-d5 ♝c1-f4": ["♞g8-f6", "c7-c5"],
  "d2-d4 d7-d5 ♝c1-f4 ♞g8-f6": "e2-e3",
  "d2-d4 d7-d5 ♝c1-f4 ♞g8-f6 e2-e3": "e7-e6",
  "d2-d4 d7-d5 ♝c1-f4 ♞g8-f6 e2-e3 e7-e6 ♞g1-f3": "♝f8-d6",
  // B) Colle Sistemi (Colle System)
  "d2-d4 d7-d5 e2-e3": "♞g8-f6",
  "d2-d4 d7-d5 e2-e3 ♞g8-f6": "♝f1-d3",
  "d2-d4 d7-d5 e2-e3 ♞g8-f6 ♝f1-d3": "e7-e6",
  "d2-d4 d7-d5 e2-e3 ♞g8-f6 ♝f1-d3 e7-e6 ♞g1-f3": "c7-c5"
};
