// Language translations
const translations = {
  'zh-TW': {
    'page-title': 'YZY Money',
    'hero-sub': 'YZY 以太坊珍藏版',
    'hero-desc': '72小時預售 · 奢華極簡 · 可驗證交付',
    'badge-exclusive': '72小時限定',
    'badge-deadline': '嚴格截止',
    'connect-wallet': '連接錢包',
    'network-hint': '需要以太坊主網',
    'buy-button': '從錢包購買',
    'sold-label': '已售',
    'participants-label': '參與者',
    'min-purchase': '最低購買: 0.1 ETH',
    'max-purchase': '首購上限: $10,000 USD',
    'sol-bonus': 'Sol 老用戶匹配 +10%',
    'submit-snapshot': '提交快照證明',
    'referral-bonus': '分享鏈接返利 3%',
    'copy-link': '複製我的專屬鏈接',
    'exchange-rates': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'exchange-rates-2': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'why-premium-title': '為什麼更稀缺 · 更高級',
    'card-title-1': '以太坊主網鑄造',
    'card-content-1': '更高的結算成本與更嚴格的交付標準，塑造稀缺性與可信度。無價格保證。',
    'card-title-2': '公平發行 (LBP)',
    'card-content-2': '高權重起步，隨時間下行的價格發現機制。任何時刻都可參與。',
    'card-title-3': '可驗證交付',
    'card-content-3': '多簽金庫、週更撥付哈希、合約審計與權限撤銷鏈接公開。',
    'incentives-title': '兩大激勵機制',
    'incentive-title-1': 'Sol 老用戶匹配 +10%',
    'incentive-badge-1': '額外獎勵',
    'incentive-content-1': 'Solana 快照持倉 = 本輪可匹配的購買上限；完成購買後提交默克爾證明，額外獲得10%（來自獎勵池，不改價格）。',
    'incentive-title-2': '單層分享返利 3%',
    'incentive-badge-2': '推薦獎勵',
    'incentive-content-2': '透過您的專屬鏈接成功完成的首次購買，您將獲得 3% 的代幣獎勵（T+7 開始，7 天線性釋放）。僅限單層，無自我推薦。',
    'steps-title': '參與步驟',
    'step-title-1': '連接錢包並購買',
    'step-content-1': '使用 ETH/USDC/USDT 參與預售並接收 YZY 代幣',
    'step-title-2': '提交快照證明',
    'step-content-2': '如適用，提交 Sol 快照證明以領取額外 10%。',
    'step-title-3': '分享鏈接以獲得獎勵',
    'step-content-3': '分享專屬鏈接以賺取 3% 的推薦獎勵',
    'steps-disclaimer': '僅承諾交付，不承諾價格',
    'dashboard-title': '統計儀錶板',
    'stat-label-1': '已售百分比',
    'stat-label-2': '參與人數',
    'stat-label-3': '匹配獎勵池餘量',
    'stat-label-4': '推薦獎勵池餘量',
    'burn-tx-link': '未領取銷毀交易',
    'weekly-hash-link': '每週分發哈希儀錶板',
    'sol-matching-title': 'Solana 快照匹配 +10%',
    'sol-matching-desc': '提交您的 Solana 地址 Merkle 證明，根據您的購買金額和快照餘額的最小值，獲得額外 10% 的獎勵。',
    'merkle-doc-link': '查看快照文檔和證明',
    'tokenomics-title': '發行與分配',
    'tokenomics-total': '總量：1,000,000,000（固定總量｜無增發）',
    'tokenomics-header-1': '項目',
    'tokenomics-header-2': '比例',
    'tokenomics-header-3': '說明',
    'tokenomics-item-1-name': '公募（LBP）',
    'tokenomics-item-1-desc': '僅此一輪，24h 完成價格發現',
    'tokenomics-item-2-name': '匹配獎勵池',
    'tokenomics-item-2-desc': 'Sol 持倉匹配 +10% 加量（基於快照）',
    'tokenomics-item-3-name': '推廣獎勵池',
    'tokenomics-item-3-desc': '單層推廣返利 3%（T+7 起線性）',
    'tokenomics-item-4-name': '生態與市場',
    'tokenomics-item-4-desc': '合作/市場，90 天懸崖+12 個月線性',
    'tokenomics-item-5-name': '金庫（多簽）',
    'tokenomics-item-5-desc': '審計/法務/運營；週更撥付哈希',
    'tokenomics-item-6-name': '合計',
    'tokenomics-item-6-desc': '未發放 100% 銷毀',
    'verification-title': '合約與合規三重證明',
    'verification-badge-1': '合約驗證',
    'verification-badge-2': '權限撤銷',
    'verification-badge-3': 'LP 鎖定 ≥80%',
    'contract-address-label': '合約地址唯一身份:',
    'faq-title': '常見問題與免責聲明',
    'faq-question-1': 'Q1 · 與 Solana 版本有何不同？',
    'faq-answer-1': '這是 YZY（以太坊珍藏版）。它運行在以太坊主網上，具有更嚴格、可驗證的交付機制：多簽金庫、權限放棄/時間鎖、公開審計以及每週撥款交易哈希。我們還將運行僅限 ETH 的快照和兌換，因此權益不會與 Solana 重疊。這兩條鏈是刻意解耦的，以避免稀釋實用性或敘事。',
    'faq-question-2': 'Q2 · 以太坊持有者能獲得哪些專屬權益？',
    'faq-answer-2': '根據官方推出計畫，ETH 持有者將享有代幣門控的鏈上權益，包括：官方商店精選商品優先購買權（快照 + SBT 兌換）；鏈上解鎖數位專輯和獨家內容（幕後花絮、限量版）；現場活動（巡演、快閃店）的抽獎/白名單，任何未使用的名額將在窗口期後自動銷毀；運營透明度：每週鏈上撥款哈希和唯讀的治理參數。這些是實用性交付，而非財務回報。',
    'faq-question-3': 'Q3 · 我可以用 YZY 購買官方商品或數位專輯嗎？',
    'faq-answer-3': '我們正在為精選商品建立代幣門控結帳系統，並為數位發行物建立鏈上購買/解鎖功能。可用性將逐個地區上線，且僅在官方開關啟用後。啟用後，網站將提供清晰的「使用 YZY 支付」流程和二維碼/兌換，資格將從 ETH 端的快照中獲取。',
    'faq-question-4': 'Q4 · 我該如何領取 Solana 持有者的 +10% 獎勵？',
    'faq-answer-4': '在預售期間正常購買，然後在領取頁面提交您的 Solana 地址 Merkle 證明。您的獎勵 = min(您本輪購買的 YZY 總量, 您的 Sol 快照餘額) × 10%。獎勵從匹配獎勵池中支付，不會改變 LBP 池的價格。領取窗口隨銷售結束而關閉；任何未領取的分配將 100% 在鏈上銷毀。',
    'faq-question-5': 'Q5 · 3% 的推薦獎勵何時支付？',
    'faq-answer-5': '分享您的個人連結。被推薦人的首次有效購買將為您贏得其購買代幣數量的 3% 作為獎勵。獎勵從 T+7 開始的 7 天內線性解鎖，屆時即可領取。僅限單層，無自我推薦；適用 KYC/地區限制。',
    'faq-question-6': 'Q6 · 如何避免假冒？',
    'faq-answer-6': '務必在以太坊上驗證合約地址——這是唯一有效的身份證明。使用首頁的「三重證明」區塊：合約驗證、權限放棄/時間鎖，以及 LP 鎖定 (≥80%)。透過我們提供的直接合約連結進行交易；不要僅憑代碼搜索。官方渠道會置頂相同的地址——切勿與外觀相似的域名或合約互動。',
    'disclaimer-title': '免責聲明',
    'disclaimer-item-1': '無價格保證；僅保證交付',
    'disclaimer-item-2': '獎勵來自固定獎勵池，不影響 LBP 價格曲線',
    'disclaimer-item-3': '受限地區/KYC 限制適用；請使用官方鏈接和合約地址',
    'disclaimer-item-4': '禁止美國用戶購買此代幣',
    'footer-copyright': '代币合约地址: <code>0xc251380cFAd819b44b8A6Ce60F63b63294c5aBD3</code> (这是代币地址，不是预售钱包地址，参加预购请从上方预购栏连接钱包或直接转账购买)',
    'social-x': 'X',
    'social-tg': 'Telegram',
    'social-ig': 'Instagram',
    'modal-title': '上傳快照證明',
    'modal-desc': '請上傳您的 Solana 錢包餘額截圖。文件必須是圖片（PNG、JPG、GIF），且小於 5MB。',
    'modal-select-file': '選擇圖片',
    'modal-submit-file': '提交證明',
    'direct-transfer-button': '透過直接轉帳購買',
    'transfer-modal-title': '預售地址直接轉帳',
    'transfer-modal-desc': '您可以直接將 ETH、USDC 或 USDT 發送到以下地址。代幣將在預售結束後空投到發送者的地址。',
    'copy-address': '複製地址',
    'transfer-modal-warning': '警告：請從個人錢包（例如 MetaMask）發送資金，不要從交易所發送。',
    'transfer-modal-network': '請連接並使用以太坊網路'
  },
  'en': {
    'page-title': 'YZY Money',
    'hero-sub': 'YZY Ethereum Premium Edition',
    'hero-desc': '72h Presale · Luxury Minimalism · Verifiable Delivery',
    'badge-exclusive': '72H EXCLUSIVE',
    'badge-deadline': 'HARD DEADLINE',
    'connect-wallet': 'Connect Wallet',
    'network-hint': 'Ethereum Mainnet Required',
    'buy-button': 'Buy from Wallet',
    'sold-label': 'Sold',
    'participants-label': 'Participants',
    'min-purchase': 'Min Purchase: 0.1 ETH',
    'max-purchase': 'First Buy Cap: $10,000 USD',
    'sol-bonus': 'Sol Users +10% Match',
    'submit-snapshot': 'Submit Snapshot Proof',
    'referral-bonus': 'Share Link 3% Reward',
    'copy-link': 'Copy My Referral Link',
    'exchange-rates': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'exchange-rates-2': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'why-premium-title': 'Why More Scarce · More Premium',
    'card-title-1': 'Ethereum Mainnet Minting',
    'card-content-1': 'Higher settlement costs and stricter delivery standards create scarcity and credibility. No price guarantee.',
    'card-title-2': 'Fair Launch (LBP)',
    'card-content-2': 'High-weight start with declining price discovery mechanism. Anyone can participate at any time.',
    'card-title-3': 'Verifiable Delivery',
    'card-content-3': 'Multi-sig vault, weekly distribution hashes, contract audits and permission revocation links public.',
    'incentives-title': 'Two Major Incentive Mechanisms',
    'incentive-title-1': 'Sol Users +10% Match',
    'incentive-badge-1': 'Extra Reward',
    'incentive-content-1': 'Solana snapshot holdings = maximum purchase limit for matching; submit Merkle proof after purchase for additional 10% (from reward pool, price unchanged).',
    'incentive-title-2': 'Single-Layer Referral 3%',
    'incentive-badge-2': 'Referral Reward',
    'incentive-content-2': 'Valid first purchases from your exclusive link earn you 3% token reward (T+7 start, 7-day linear release). Single layer only, no self-referral.',
    'steps-title': 'Participation Steps',
    'step-title-1': 'Connect Wallet & Purchase',
    'step-content-1': 'Use ETH/USDC/USDT to participate in presale and receive YZY tokens',
    'step-title-2': 'Submit Snapshot Proof',
    'step-content-2': 'If applicable, submit Sol snapshot proof to claim additional 10%',
    'step-title-3': 'Share Link for Rewards',
    'step-content-3': 'Share exclusive link to earn 3% referral rewards',
    'steps-disclaimer': 'Only guarantees delivery, not price',
    'dashboard-title': 'Statistics Dashboard',
    'stat-label-1': 'Sold Percentage',
    'stat-label-2': 'Number of Participants',
    'stat-label-3': 'Remaining Match Reward Pool',
    'stat-label-4': 'Remaining Referral Reward Pool',
    'burn-tx-link': 'Unclaimed Burn Transaction',
    'weekly-hash-link': 'Weekly Distribution Hash Dashboard',
    'sol-matching-title': 'Solana Snapshot Matching +10%',
    'sol-matching-desc': 'Submit your Solana address Merkle proof and receive an additional 10% reward based on the minimum of your purchase amount and snapshot balance.',
    'merkle-doc-link': 'View Snapshot Documentation and Proof',
    'tokenomics-title': 'Distribution and Allocation',
    'tokenomics-total': 'Total Supply: 1,000,000,000 (Fixed Supply | No Inflation)',
    'tokenomics-header-1': 'Item',
    'tokenomics-header-2': 'Percentage',
    'tokenomics-header-3': 'Description',
    'tokenomics-item-1-name': 'Public Sale (LBP)',
    'tokenomics-item-1-desc': 'Single round, 24h for price discovery',
    'tokenomics-item-2-name': 'Matching Reward Pool',
    'tokenomics-item-2-desc': 'Sol holdings match +10% bonus (snapshot-based)',
    'tokenomics-item-3-name': 'Referral Reward Pool',
    'tokenomics-item-3-desc': 'Single-layer 3% referral rebate (linear from T+7)',
    'tokenomics-item-4-name': 'Ecosystem & Marketing',
    'tokenomics-item-4-desc': 'Partnerships/marketing, 90-day cliff + 12-month linear vesting',
    'tokenomics-item-5-name': 'Treasury (Multi-sig)',
    'tokenomics-item-5-desc': 'Audit/legal/operations; weekly distribution hash updates',
    'tokenomics-item-6-name': 'Total',
    'tokenomics-item-6-desc': '100% of undistributed tokens will be burned',
    'verification-title': 'Contract and Compliance Triple Proof',
    'verification-badge-1': 'Contract Verification',
    'verification-badge-2': 'Permission Revocation',
    'verification-badge-3': 'LP Lock ≥80%',
    'contract-address-label': 'Unique Identity by Contract Address:',
    'faq-title': 'FAQ and Disclaimer',
    'faq-question-1': 'Q1 · What’s different vs. the Solana version?',
    'faq-answer-1': 'This is YZY (Ethereum Premium Edition). It runs on Ethereum mainnet with stricter, verifiable delivery: a multisig treasury, permission renounce/time-locks, public audits, and weekly disbursement tx hashes. We\'ll also run ETH-only snapshots & redemptions so rights don\'t overlap with Solana. The two chains are intentionally de-coupled to avoid dilution of utility or narrative.',
    'faq-question-2': 'Q2 · What premium rights do Ethereum holders get?',
    'faq-answer-2': 'Subject to official rollouts, ETH holders are slated for token-gated, on-chain benefits including: Priority access windows for selected drops in the official store (snapshot + SBT redemption). Digital albums & exclusive content unlocked on chain (behind-the-scenes, limited editions). Raffles/allowlists for live events (tour stops, pop-ups) with any unused quotas auto-burned post window. Operational transparency: weekly on-chain disbursement hashes and publish-only governance parameters. These are utility deliveries, not financial returns.',
    'faq-question-3': 'Q3 · Can I use YZY to buy official merchandise or digital albums?',
    'faq-answer-3': 'We\'re building token-gated checkout for selected items and on-chain purchase/unlock for digital releases. Availability will go live region-by-region and only after the official switch is flipped. When enabled, the site will provide clear "Pay with YZY" flows and QR/redemption, with eligibility taken from ETH-side snapshots.',
    'faq-question-4': 'Q4 · How do I receive the +10% reward for Solana holders?',
    'faq-answer-4': 'Buy normally during the presale, then submit your Solana address Merkle proof on the claim page. Your bonus = min(total YZY you bought this round, your Sol snapshot balance) × 10%. It\'s paid from the Matching Reward Pool and does not change the LBP pool price. The claim window ends with the sale; any unclaimed allocation is 100% burned on chain.',
    'faq-question-5': 'Q5 · When is the 3% referral reward paid?',
    'faq-answer-5': 'Share your personal link. The referee\'s first valid purchase earns you 3% of their purchased tokens as a reward. Rewards unlock linearly over 7 days starting at T+7 and can then be claimed. Single-layer only, no self-referrals; KYC/region gating applies.',
    'faq-question-6': 'Q6 · How do I avoid fakes?',
    'faq-answer-6': 'Always verify the contract address on Ethereum—that\'s the only identity that counts. Use the homepage "Three Proofs" block: Contract Verification, Permission Renounce/Time-lock, and LP Lock (≥80%). Access trading via the direct contract link we provide; don\'t search by ticker alone. Official channels will pin the same address—never interact with look-alike domains or contracts.',
    'disclaimer-title': 'Disclaimer',
    'disclaimer-item-1': 'No price guarantee; only delivery guarantee',
    'disclaimer-item-2': 'Rewards come from a fixed pool and do not affect the LBP price curve',
    'disclaimer-item-3': 'Restricted areas/KYC restrictions apply; please use official links and contract addresses',
    'disclaimer-item-4': 'Users in the United States are prohibited from purchasing this token',
    'footer-copyright': 'Token Contract Address: <code>0xc251380cFAd819b44b8A6Ce60F63b63294c5aBD3</code> (This is the token address, not the presale wallet address. To participate in the presale, please connect your wallet or use direct transfer from the presale section above)',
    'social-x': 'X',
    'social-tg': 'Telegram',
    'social-ig': 'Instagram',
    'modal-title': 'Upload Snapshot Proof',
    'modal-desc': 'Please upload a screenshot of your Solana wallet balance. The file must be an image (PNG, JPG, GIF) and under 5MB.',
    'modal-select-file': 'Select Image',
    'modal-submit-file': 'Submit Proof',
    'direct-transfer-button': 'Buy via Direct Transfer',
    'transfer-modal-title': 'Presale Address Direct Transfer',
    'transfer-modal-desc': 'You can send ETH, USDC, or USDT directly to the following address. Tokens will be airdropped to the sender\'s address after the presale ends.',
    'copy-address': 'Copy Address',
    'transfer-modal-warning': 'Warning: Send funds from a personal wallet (e.g., MetaMask), NOT from an exchange.',
    'transfer-modal-network': 'Please connect and use Ethereum network'
  },
  'es': {
    'page-title': 'YZY Money',
    'hero-sub': 'YZY Ethereum Premium Edition',
    'hero-desc': 'Preventa 72h · Minimalismo de Lujo · Entrega Verificable',
    'badge-exclusive': '72H EXCLUSIVO',
    'badge-deadline': 'FECHA LÍMITE ESTRICTA',
    'connect-wallet': 'Conectar Billetera',
    'network-hint': 'Se Requiere Ethereum Mainnet',
    'buy-button': 'Comprar desde Billetera',
    'sold-label': 'Vendido',
    'participants-label': 'Participantes',
    'min-purchase': 'Compra Mín: 0.1 ETH',
    'max-purchase': 'Límite Primera Compra: $10,000 USD',
    'sol-bonus': 'Usuarios Sol +10%',
    'submit-snapshot': 'Enviar Prueba de Instantánea',
    'referral-bonus': 'Recompensa por Compartir Enlace 3%',
    'copy-link': 'Copiar Mi Enlace de Referencia',
    'exchange-rates': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'exchange-rates-2': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'why-premium-title': 'Por Qué Más Escaso · Más Premium',
    'card-title-1': 'Acuñación en Ethereum Mainnet',
    'card-content-1': 'Mayores costos de liquidación y estándares de entrega más estrictos crean escasez y credibilidad. Sin garantía de precio.',
    'card-title-2': 'Lanzamiento Justo (LBP)',
    'card-content-2': 'Inicio de alto peso con mecanismo de descubrimiento de precios descendente. Cualquiera puede participar en cualquier momento.',
    'card-title-3': 'Entrega Verificable',
    'card-content-3': 'Bóveda multi-firma, hashes de distribución semanal, auditorías de contratos y enlaces de revocación de permisos públicos.',
    'incentives-title': 'Dos Grandes Mecanismos de Incentivos',
    'incentive-title-1': 'Usuarios Sol +10%',
    'incentive-badge-1': 'Recompensa Extra',
    'incentive-content-1': 'Las tenencias de instantánea de Solana = límite máximo de compra para la coincidencia; envía prueba de Merkle después de la compra para obtener un 10% adicional.',
    'incentive-title-2': 'Referido de Una Capa 3%',
    'incentive-badge-2': 'Recompensa de Referido',
    'incentive-content-2': 'Las primeras compras válidas desde tu enlace exclusivo te ganan un 3% de recompensa de token (inicio T+7, liberación lineal de 7 días).',
    'steps-title': 'Pasos de Participación',
    'step-title-1': 'Conectar Billetera y Comprar',
    'step-content-1': 'Usa ETH/USDC/USDT para participar en la preventa y recibir tokens YZY',
    'step-title-2': 'Enviar Prueba de Instantánea',
    'step-content-2': 'Si aplica, envía prueba de instantánea Sol para reclamar 10% adicional',
    'step-title-3': 'Compartir Enlace para Recompensas',
    'step-content-3': 'Comparte enlace exclusivo para ganar recompensas de referencia del 3%',
    'steps-disclaimer': 'Solo garantiza entrega, no precio',
    'dashboard-title': 'Panel de Estadísticas',
    'stat-label-1': 'Porcentaje Vendido',
    'stat-label-2': 'Número de Participantes',
    'stat-label-3': 'Pool de Recompensas Restante',
    'stat-label-4': 'Pool de Referidos Restante',
    'burn-tx-link': 'Transacción de Quema No Reclamada',
    'weekly-hash-link': 'Panel de Hash de Distribución Semanal',
    'sol-matching-title': 'Coincidencia de Instantánea Solana +10%',
    'sol-matching-desc': 'Envía tu prueba Merkle de dirección Solana y recibe una recompensa adicional del 10% basada en el mínimo de tu monto de compra y saldo de instantánea.',
    'merkle-doc-link': 'Ver Documentación de Instantánea y Prueba',
    'tokenomics-title': 'Distribución y Asignación',
    'tokenomics-total': 'Suministro Total: 1,000,000,000 (Fijo | Sin Inflación)',
    'tokenomics-header-1': 'Categoría',
    'tokenomics-header-2': 'Porcentaje',
    'tokenomics-header-3': 'Descripción',
    'tokenomics-item-1-name': 'Venta Pública (LBP)',
    'tokenomics-item-1-desc': 'Ronda única, 24h para descubrimiento de precios',
    'tokenomics-item-2-name': 'Fondo de Recompensa de Coincidencia',
    'tokenomics-item-2-desc': 'Bonus del 10% para tenedores de Sol (basado en instantánea)',
    'tokenomics-item-3-name': 'Fondo de Recompensa de Referidos',
    'tokenomics-item-3-desc': 'Recompensa de referido del 3% (lineal desde T+7)',
    'tokenomics-item-4-name': 'Ecosistema y Marketing',
    'tokenomics-item-4-desc': 'Asociaciones/marketing, 90 días de acantilado + 12 meses lineal',
    'tokenomics-item-5-name': 'Tesorería (Multi-sig)',
    'tokenomics-item-5-desc': 'Auditoría/legal/operaciones; actualizaciones semanales de hash',
    'tokenomics-item-6-name': 'Total',
    'tokenomics-item-6-desc': 'El 100% de los tokens no distribuidos serán quemados',
    'verification-title': 'Triple Prueba de Contrato y Cumplimiento',
    'verification-badge-1': 'Verificación de Contrato',
    'verification-badge-2': 'Revocación de Permisos',
    'verification-badge-3': 'Bloqueo LP ≥80%',
    'contract-address-label': 'Identidad Única por Dirección de Contrato:',
    'faq-title': 'FAQ y Descargo de Responsabilidad',
    'faq-question-1': 'Q1 · ¿Cuál es la diferencia con la versión de Solana?',
    'faq-answer-1': 'Esta es YZY (Edición Premium de Ethereum). Funciona en la red principal de Ethereum con una entrega más estricta y verificable: una tesorería multifirma, renuncia de permisos/bloqueos de tiempo, auditorías públicas y hashes de transacciones de desembolso semanales. También realizaremos snapshots y canjes solo para ETH para que los derechos no se superpongan con los de Solana. Las dos cadenas están intencionadamente desacopladas para evitar la dilución de la utilidad o la narrativa.',
    'faq-question-2': 'Q2 · ¿Qué derechos premium obtienen los poseedores de Ethereum?',
    'faq-answer-2': 'Sujeto a lanzamientos oficiales, los poseedores de ETH están programados para recibir beneficios en cadena con control de acceso por token, incluyendo: Ventanas de acceso prioritario para lanzamientos seleccionados en la tienda oficial (snapshot + canje SBT). Álbumes digitales & contenido exclusivo desbloqueado en cadena (detrás de cámaras, ediciones limitadas). Sorteos/listas de permitidos para eventos en vivo (paradas de gira, pop-ups) con cualquier cuota no utilizada quemada automáticamente después del período. Transparencia operativa: hashes de desembolso semanales en cadena y parámetros de gobernanza de solo publicación. Estas son entregas de utilidad, no rendimientos financieros.',
    'faq-question-3': 'Q3 · ¿Puedo usar YZY para comprar mercancía oficial o álbumes digitales?',
    'faq-answer-3': 'Estamos construyendo un sistema de pago con control de acceso por token para artículos seleccionados y compra/desbloqueo en cadena para lanzamientos digitales. La disponibilidad se activará región por región y solo después de que se active el interruptor oficial. Cuando esté habilitado, el sitio proporcionará flujos claros de "Pagar con YZY" y QR/canje, con la elegibilidad tomada de los snapshots del lado de ETH.',
    'faq-question-4': 'Q4 · ¿Cómo recibo la recompensa del +10% para los poseedores de Solana?',
    'faq-answer-4': 'Compra normalmente durante la preventa, luego envía tu prueba Merkle de la dirección de Solana en la página de reclamación. Tu bonificación = mín(total de YZY que compraste en esta ronda, tu saldo del snapshot de Sol) × 10%. Se paga desde el Fondo de Recompensas de Coincidencia y no cambia el precio del pool LBP. La ventana de reclamación termina con la venta; cualquier asignación no reclamada se quema al 100% en cadena.',
    'faq-question-5': 'Q5 · ¿Cuándo se paga la recompensa por referencia del 3%?',
    'faq-answer-5': 'Comparte tu enlace personal. La primera compra válida del referido te otorga un 3% de sus tokens comprados como recompensa. Las recompensas se desbloquean linealmente durante 7 días a partir de T+7 y luego se pueden reclamar. Solo de una capa, sin autorreferencias; se aplican restricciones de KYC/región.',
    'faq-question-6': 'Q6 · ¿Cómo evito las falsificaciones?',
    'faq-answer-6': 'Verifica siempre la dirección del contrato en Ethereum, esa es la única identidad que cuenta. Usa el bloque "Tres Pruebas" de la página de inicio: Verificación del Contrato, Renuncia de Permisos/Bloqueo de Tiempo y Bloqueo de LP (≥80%). Accede al trading a través del enlace directo del contrato que proporcionamos; no busques solo por el ticker. Los canales oficiales fijarán la misma dirección, nunca interactúes con dominios o contratos de imitación.',
    'disclaimer-title': 'Descargo de Responsabilidad',
    'disclaimer-item-1': 'Sin garantía de precio; solo garantía de entrega',
    'disclaimer-item-2': 'Las recompensas provienen de un pool fijo y no afectan la curva de precios LBP',
    'disclaimer-item-3': 'Se aplican restricciones de áreas/KYC; usa enlaces oficiales y direcciones de contrato',
    'disclaimer-item-4': 'Los usuarios en los Estados Unidos tienen prohibido comprar este token',
    'footer-copyright': 'Dirección del Contrato del Token: <code>0xc251380cFAd819b44b8A6Ce60F63b63294c5aBD3</code> (Esta es la dirección del contrato del token, no la dirección de la billetera de preventa. Para participar en la preventa, por favor conecte su billetera o use la transferencia directa desde la sección de preventa de arriba)',
    'social-x': 'X',
    'social-tg': 'Telegram',
    'social-ig': 'Instagram',
    'modal-title': 'Subir Prueba de Instantánea',
    'modal-desc': 'Por favor, sube una captura de pantalla del saldo de tu billetera Solana. El archivo debe ser una imagen (PNG, JPG, GIF) y de menos de 5MB.',
    'modal-select-file': 'Seleccionar Imagen',
    'modal-submit-file': 'Enviar Prueba',
    'direct-transfer-button': 'Comprar por Transferencia Directa',
    'transfer-modal-title': 'Transferencia Directa a la Dirección de Preventa',
    'transfer-modal-desc': 'Puede enviar ETH, USDC o USDT directamente a la siguiente dirección. Los tokens se enviarán por airdrop a la dirección del remitente después de que finalice la preventa.',
    'copy-address': 'Copiar Dirección',
    'transfer-modal-warning': 'Advertencia: Envíe fondos desde una billetera personal (por ejemplo, MetaMask), NO desde un exchange.',
    'transfer-modal-network': 'Por favor conecte y use la red Ethereum'
  },
  'ja': {
    'page-title': 'YZY Money',
    'hero-sub': 'YZY Ethereum Premium Edition',
    'hero-desc': '72時間プレセール · ラグジュアリーミニマリズム · 検証可能な配信',
    'badge-exclusive': '72時間限定',
    'badge-deadline': '厳格期限',
    'connect-wallet': 'ウォレット接続',
    'network-hint': 'Ethereum メインネットが必要',
    'buy-button': 'ウォレットから購入',
    'sold-label': '販売済み',
    'participants-label': '参加者',
    'min-purchase': '最小購入: 0.1 ETH',
    'max-purchase': '初回購入上限: $10,000 USD',
    'sol-bonus': 'Solユーザー +10%',
    'submit-snapshot': 'スナップショット証明を送信',
    'referral-bonus': 'リンク共有 3% 報酬',
    'copy-link': '紹介リンクをコピー',
    'exchange-rates': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'exchange-rates-2': '1 YZY = 0.00002075 ETH · 1 YZY = 0.0888 USDT/USDC',
    'why-premium-title': 'なぜより希少 · よりプレミアム',
    'card-title-1': 'Ethereumメインネット鋳造',
    'card-content-1': 'より高い決済コストとより厳しい配信基準が希少性と信頼性を生み出します。価格保証なし。',
    'card-title-2': 'フェアローンチ（LBP）',
    'card-content-2': 'ハイウェイト開始による価格発見メカニズムの下降。いつでも誰でも参加可能。',
    'card-title-3': '検証可能な配信',
    'card-content-3': 'マルチシグ金庫、週次配布ハッシュ、契約監査と権限取り消しリンクが公開。',
    'incentives-title': '2つの主要インセンティブメカニズム',
    'incentive-title-1': 'Solユーザー +10% マッチング',
    'incentive-badge-1': '追加報酬',
    'incentive-content-1': 'Solanaスナップショット保有量 = マッチングの最大購入限度額; 購入後にMerkle証明を提出して追加の10%を獲得。',
    'incentive-title-2': '単層紹介 3%',
    'incentive-badge-2': '紹介報酬',
    'incentive-content-2': 'あなたの専用リンクからの有効な初回購入で3%のトークン報酬を獲得（T+7開始、7日間線形リリース）。',
    'steps-title': '参加手順',
    'step-title-1': 'ウォレット接続と購入',
    'step-content-1': 'ETH/USDC/USDTを使用してプレセールに参加し、YZYトークンを受け取る',
    'step-title-2': 'スナップショット証明送信',
    'step-content-2': '該当する場合、Solスナップショット証明を送信して追加10%を請求',
    'step-title-3': 'リンクを共有して報酬獲得',
    'step-content-3': '専用リンクを共有して3%紹介報酬を獲得',
    'steps-disclaimer': '配信のみを保証、価格は保証しません',
    'dashboard-title': '統計ダッシュボード',
    'stat-label-1': '販売パーセンテージ',
    'stat-label-2': '参加者数',
    'stat-label-3': 'マッチング報酬プール残高',
    'stat-label-4': '推廣獎勵池餘量',
    'burn-tx-link': '未請求バーン取引',
    'weekly-hash-link': '週次配布ハッシュダッシュボード',
    'sol-matching-title': 'Solanaスナップショットマッチング +10%',
    'sol-matching-desc': 'SolanaアドレスのMerkle証明を提出し、購入金額とスナップショット残高の最小値に基づいて10%の追加報酬を受け取る。',
    'merkle-doc-link': 'スナップショット文書と証明を表示',
    'tokenomics-title': '発行と配分',
    'tokenomics-total': '総供給量: 1,000,000,000 (固定供給｜インフレなし)',
    'tokenomics-header-1': '項目',
    'tokenomics-header-2': '割合',
    'tokenomics-header-3': '説明',
    'tokenomics-item-1-name': '公募 (LBP)',
    'tokenomics-item-1-desc': '一回限り、24時間で価格発見',
    'tokenomics-item-2-name': 'マッチング報酬プール',
    'tokenomics-item-2-desc': 'Sol保有者マッチ +10%ボーナス (スナップショットベース)',
    'tokenomics-item-3-name': '紹介報酬プール',
    'tokenomics-item-3-desc': '単層3%紹介リベート (T+7から線形)',
    'tokenomics-item-4-name': 'エコシステム＆マーケティング',
    'tokenomics-item-4-desc': 'パートナーシップ/マーケティング, 90日クリフ+12ヶ月線形',
    'tokenomics-item-5-name': '金庫 (マルチシグ)',
    'tokenomics-item-5-desc': '監査/法務/運営; 週次配布ハッシュ更新',
    'tokenomics-item-6-name': '合計',
    'tokenomics-item-6-desc': '未配布トークンの100%はバーンされます',
    'verification-title': '契約とコンプライアンス3つの証明',
    'verification-badge-1': '契約検証',
    'verification-badge-2': '権限取り消し',
    'verification-badge-3': 'LPロック ≥80%',
    'contract-address-label': '契約アドレスによる一意のアイデンティティ:',
    'faq-title': 'FAQ と免責事項',
    'faq-question-1': 'Q1 · Solana版との違いは何ですか？',
    'faq-answer-1': 'これはYZY（イーサリアムプレミアム版）です。より厳格で検証可能なデリバリーを備えたイーサリアムメインネット上で動作します：マルチシグの財務、権限放棄/時間ロック、公開監査、および週次の支払いトランザクションハッシュ。また、Solanaと権利が重複しないように、ETHのみのスナップショットと償還を実行します。2つのチェーンは意図的に切り離されています、ユーティリティや物語の希薄化を避けるため。',
    'faq-question-2': 'Q2 · イーサリアム保有者はどのようなプレミアム権利を得られますか？',
    'faq-answer-2': '公式の展開に応じて、ETH保有者はトークンゲートのオンチェーン特典を受ける予定です。これには以下が含まれます：公式ストアでの選択されたドロップの優先アクセスウィンドウ（スナップショット+ SBT償還）。デジタルアルバム＆限定コンテンツのオンチェーンでのアンロック（舞台裏、限定版）。ライブイベント（ツアー、ポップアップ）の抽選/白名簿、未使用の割当はウィンドウ期間後自動的にバーンされます。運営の透明性：週次のオンチェーン支払いハッシュと公開専用のガバナンスパラメータ。これらは実用性の提供であり、財務的なリターンではありません。',
    'faq-question-3': 'Q3 · YZYを使って公式商品やデジタルアルバムを購入できますか？',
    'faq-answer-3': '選択されたアイテムのためのトークンゲートチェックアウトと、デジタルリリースのためのオンチェーン購入/アンロックを構築中です。利用可能になるのは地域ごとで、公式の切り替えが行われた後になります。切り替え後、サイトは明確な「YZYで支払う」フローとQR/償還を提供し、資格はETH側のスナップショットから取得されます。',
    'faq-question-4': 'Q4 · Solana保有者向けの+10%報酬はどのように受け取りますか？',
    'faq-answer-4': 'プレセール中に通常通り購入し、その後、請求ページであなたのSolanaアドレスのマークル証明を提出してください。あなたのボーナス = min(このラウンドで購入したYZYの総量、あなたのSolスナップショット残高) × 10%。これはマッチング報酬プールから支払われ、LBPプールの価格を変更しません。請求期間はセール終了とともに終了し、未請求の割当は100%チェーン上でバーンされます。',
    'faq-question-5': 'Q5 · 3%の紹介報酬はいつ支払われますか？',
    'faq-answer-5': 'あなたの個人リンクを共有してください。紹介された人の最初の有効な購入で、購入したトークンの3%が報酬として得られます。報酬はT+7から7日間にわたって線形にアンロックされ、その後請求できます。単層のみ、自己紹介は不可；KYC/地域の制限が適用されます。',
    'faq-question-6': 'Q6 · 偽物を避けるにはどうすればよいですか？',
    'faq-answer-6': 'イーサリアム上の契約アドレスを常に確認してください—それが唯一の有効なアイデンティティです。ホームページの「3つの証明」ブロックを使用してください：契約検証、権限放棄/時間ロック、およびLPロック（≥80%）。私たちが提供する直接の契約リンクを介して取引にアクセスし、ティッカーだけで検索しないでください。公式チャネルは同じアドレスをピン留めます—類似のドメインや契約と決して対話しないでください。',
    'disclaimer-title': '免責事項',
    'disclaimer-item-1': '価格保証なし；配信保証のみ',
    'disclaimer-item-2': '報酬は固定プールから来て、LBP価格カーブに影響しません',
    'disclaimer-item-3': '制限地域/KYC制限が適用されます；公式リンクとコントラクトアドレスを使用してください',
    'disclaimer-item-4': '米国のユーザーはこのトークンを購入することを禁止されています',
    'footer-copyright': 'トークン契約アドレス: <code>0xc251380cFAd819b44b8A6Ce60F63b63294c5aBD3</code> (これはトークンアドレスであり、プレセールウォレットアドレスではありません。プレセールに参加するには、上のプレセールセクションからウォレットを接続するか、直接送金で購入してください)',
    'social-x': 'X',
    'social-tg': 'Telegram',
    'social-ig': 'Instagram',
    'modal-title': 'スナップショット証明をアップロード',
    'modal-desc': 'Solanaウォレットの残高のスクリーンショットをアップロードしてください。ファイルは画像（PNG, JPG, GIF）で、5MB未満である必要があります。',
    'modal-select-file': '画像を選択',
    'modal-submit-file': '証明を提出',
    'direct-transfer-button': '直接送金で購入',
    'transfer-modal-title': 'プレセールアドレスへ直接送金',
    'transfer-modal-desc': 'ETH、USDC、またはUSDTを以下のアドレスに直接送信できます。トークンはプレセール終了後、送信者のアドレスにエアドロップされます。',
    'copy-address': 'アドレスをコピー',
    'transfer-modal-warning': '警告：取引所からではなく、個人ウォレット（例：MetaMask）から資金を送ってください。',
    'transfer-modal-network': 'Ethereumネットワークに接続して使用してください'
  }
};

class YZYPresale {
  constructor() {
    this.isWalletConnected = false;
    this.userAddress = null;
    this.userBalance = { ETH: 0, USDC: 0, USDT: 0 };
    this.currentLanguage = 'en'; 
    this.currentCurrency = 'ETH';
    
    this.startTime = new Date('2025-08-23T15:00:00Z').getTime();
    this.duration = 72 * 60 * 60 * 1000; 
    this.endTime = new Date(this.startTime + this.duration);
    
    this.startProgress = 32.1;
    this.endProgress = 99.6;
    
    this.startBuyers = 1247;
    this.endBuyers = 8742;

    this.stats = {
      soldPct: this.startProgress,
      buyers: this.startBuyers,
      matchPool: 68,
      refPool: 85
    };
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.startCountdown();
    this.animateStats(); 
    this.updatePurchaseEstimate();
    this.setupLanguageSwitcher();
    this.setupCurrencyTabs();
    this.initializeWeb3();
  }
  
  setupEventListeners() {
    document.getElementById('connect-wallet').addEventListener('click', this.connectWallet.bind(this));
    document.getElementById('connect-wallet-2').addEventListener('click', this.connectWallet.bind(this));
    
    document.getElementById('buy-button').addEventListener('click', () => {
      this.handlePurchase('purchase-input');
    });
    document.getElementById('buy-button-2').addEventListener('click', () => {
      this.handlePurchase('purchase-input-2');
    });
    
    document.getElementById('copy-ref-link').addEventListener('click', () => {
      this.copyReferralLink();
    });
    document.getElementById('copy-ref-link-2').addEventListener('click', () => {
      this.copyReferralLink();
    });
    
    document.getElementById('purchase-input').addEventListener('input', (e) => {
      this.updatePurchaseEstimate(e.target.value);
    });
    document.getElementById('purchase-input-2').addEventListener('input', (e) => {
      this.updatePurchaseEstimate(e.target.value, 2);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    document.getElementById('submit-snapshot-btn-1').addEventListener('click', () => this.openUploadModal());
    document.getElementById('submit-snapshot-btn-2').addEventListener('click', () => this.openUploadModal());
    document.getElementById('close-modal-btn').addEventListener('click', () => this.closeUploadModal());
    document.getElementById('upload-modal').addEventListener('click', (e) => {
        if (e.target.id === 'upload-modal') {
            this.closeUploadModal();
        }
    });
    document.getElementById('snapshot-upload-input').addEventListener('change', (e) => this.handleFileSelect(e));
    document.getElementById('select-file-btn').addEventListener('click', () => document.getElementById('snapshot-upload-input').click());
    document.getElementById('submit-file-btn').addEventListener('click', () => this.handleFileUpload());

    document.getElementById('direct-transfer-btn-1').addEventListener('click', () => this.openTransferModal());
    document.getElementById('direct-transfer-btn-2').addEventListener('click', () => this.openTransferModal());
    document.getElementById('close-transfer-modal-btn').addEventListener('click', () => this.closeTransferModal());
    document.getElementById('direct-transfer-modal').addEventListener('click', (e) => {
        if (e.target.id === 'direct-transfer-modal') {
            this.closeTransferModal();
        }
    });
    document.getElementById('copy-presale-address-btn').addEventListener('click', () => this.copyPresaleAddress('presale-address-text'));
    document.getElementById('modal-copy-presale-address-btn').addEventListener('click', () => this.copyPresaleAddress('modal-presale-address-text'));
  }
  
  setupLanguageSwitcher() {
    const selector = document.getElementById('language-select');
    
    if (selector) {
      selector.value = 'en';
      this.currentLanguage = 'en';
      
      selector.addEventListener('change', (e) => {
        console.log('Language changed to:', e.target.value);
        this.changeLanguage(e.target.value);
      });
      
      this.changeLanguage('en');
    }
  }
  
  setupCurrencyTabs() {
    const setupInstance = (instance) => {
      const selector = instance === 2 ? '#currency-tabs-2' : '.currency-selector:not(#currency-tabs-2-wrapper) .currency-tabs';
      document.querySelectorAll(`${selector} .currency-tab`).forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll(`${selector} .currency-tab`).forEach(t => t.classList.remove('active'));
          
          tab.classList.add('active');
          
          this.currentCurrency = tab.dataset.currency;
          
          document.getElementById('currency-label').textContent = this.currentCurrency;
          document.getElementById('currency-label-2').textContent = this.currentCurrency;
          document.querySelectorAll('.currency-tab').forEach(t => {
            if (t.dataset.currency === this.currentCurrency) {
              t.classList.add('active');
            } else {
              t.classList.remove('active');
            }
          });

          const inputs = [document.getElementById('purchase-input'), document.getElementById('purchase-input-2')];
          inputs.forEach(input => {
            if (this.currentCurrency === 'ETH') {
              input.placeholder = '0.1';
              input.min = '0.1';
              input.step = '0.001';
            } else {
              input.placeholder = '100';
              input.min = '100';
              input.step = '0.01';
            }
          });
          
          this.updatePurchaseLimits();
          
          this.updatePurchaseEstimate(document.getElementById('purchase-input').value, 1);
          this.updatePurchaseEstimate(document.getElementById('purchase-input-2').value, 2);
        });
      });
    };
    setupInstance(1);
    setupInstance(2);
  }
  
  updatePurchaseLimits() {
    const minAmount = this.currentCurrency === 'ETH' ? '0.1 ETH' : 
                     this.currentCurrency === 'USDC' ? '100 USDC' : '100 USDT';
    
    const translations = {
      'zh-TW': `最低購買: ${minAmount} · 首購上限: $10,000 USD`,
      'en': `Min Purchase: ${minAmount} · First Buy Cap: $10,000 USD`,
      'es': `Compra Mín: ${minAmount} · Límite: $10,000 USD`,
      'ja': `最小購入: ${minAmount} · 上限: $10,000 USD`
    };
    
    document.querySelector('.purchase-limits').textContent = translations[this.currentLanguage];
    document.querySelector('#purchase-limits-2').textContent = translations[this.currentLanguage];
  }
  
  changeLanguage(lang) {
    console.log('Changing language to:', lang);
    this.currentLanguage = lang;
    document.getElementById('html-root').lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translations[lang][key];
        } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
    
    document.title = translations[lang]['page-title'];
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
      titleElement.textContent = translations[lang]['page-title'];
    }
    
    const connectButton = document.getElementById('connect-wallet');
    if (connectButton && !this.isWalletConnected) {
      connectButton.textContent = translations[lang]['connect-wallet'] || 'Connect Wallet';
    }
    
    const buyButton = document.getElementById('buy-button');
    if (buyButton && !buyButton.disabled) {
      buyButton.textContent = translations[lang]['buy-button'] || 'Buy from Wallet';
    }
    
    const languageSelect = document.getElementById('language-select');
    if (languageSelect && languageSelect.value !== lang) {
      languageSelect.value = lang;
    }
    
    this.updatePurchaseLimits();
    
    this.updateDynamicTranslations(lang);
    
    console.log('Language changed successfully to:', lang);
  }
  
  updateDynamicTranslations(lang) {
    if (this.isWalletConnected && this.userAddress) {
      const button = document.getElementById('connect-wallet');
      const button2 = document.getElementById('connect-wallet-2');
      const buttonText = `${this.userAddress.substring(0, 6)}...${this.userAddress.substring(38)}`;
      if (button) button.textContent = buttonText;
      if (button2) button2.textContent = buttonText;
    }
    
    const countdownElement = document.getElementById('countdown-timer');
    const countdownElement2 = document.getElementById('countdown-timer-2');
    if (countdownElement && countdownElement.textContent === '00:00:00') {
      const endedTexts = {
        'zh-TW': '預售已結束',
        'en': 'Presale Ended',
        'es': 'Preventa Finalizada',
        'ja': 'プレセール終了'
      };
      const buyButton = document.getElementById('buy-button');
      const buyButton2 = document.getElementById('buy-button-2');
      if (buyButton) {
        buyButton.textContent = endedTexts[lang] || 'Presale Ended';
        buyButton.disabled = true;
        buyButton2.textContent = endedTexts[lang] || 'Presale Ended';
        buyButton2.disabled = true;
      }
    }
  }
  
  initializeWeb3() {
    if (window.ethereum) {
        this.provider = window.ethereum;
        this.setupProviderEvents();
        this.checkWalletConnection();
    } else {
        window.addEventListener('ethereum#initialized', this.handleEthereumInitialized.bind(this), { once: true });
        
        setTimeout(() => {
            if (!this.provider) {
                console.log("No Ethereum provider detected.");
            }
        }, 3000);
    }
  }

  handleEthereumInitialized() {
      if (window.ethereum) {
          console.log("Ethereum provider initialized.");
          this.provider = window.ethereum;
          this.setupProviderEvents();
          this.checkWalletConnection();
      }
  }

  setupProviderEvents() {
    if (this.provider && typeof this.provider.on === 'function') {
        this.provider.on('accountsChanged', this.handleAccountsChanged.bind(this));
        this.provider.on('chainChanged', (_chainId) => window.location.reload());
        this.provider.on('disconnect', this.handleDisconnect.bind(this));
    }
  }

  handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        this.handleDisconnect();
    } else if (accounts[0] !== this.userAddress) {
        this.userAddress = accounts[0];
        this.updateWalletDisplay();
    }
  }

  handleDisconnect() {
    this.isWalletConnected = false;
    this.userAddress = null;
    
    const buttons = [document.getElementById('connect-wallet'), document.getElementById('connect-wallet-2')];
    buttons.forEach(button => {
        button.textContent = translations[this.currentLanguage]['connect-wallet'] || 'Connect Wallet';
        button.classList.remove('btn--connected');
        button.disabled = false;
    });

    const walletStatuses = [document.getElementById('wallet-status'), document.getElementById('wallet-status-2')];
    walletStatuses.forEach(status => status.classList.add('hidden'));

    this.showToast('Wallet disconnected.');
  }
  
  async checkWalletConnection() {
    if (this.provider) {
      try {
        const accounts = await this.provider.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          this.userAddress = accounts[0];
          this.isWalletConnected = true;
          await this.updateWalletDisplay();
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
        this.showToast('Could not check wallet connection.', 'error');
      }
    }
  }
  
  async connectWallet() {
    if (!this.provider) {
      this.showToast('Please install MetaMask or another Web3 wallet', 'error');
      if (/Mobi/i.test(window.navigator.userAgent)) {
          this.showToast('For mobile, please open this page in your wallet\'s built-in browser.', 'info');
      }
      return;
    }
    
    try {
      const buttons = [document.getElementById('connect-wallet'), document.getElementById('connect-wallet-2')];
      buttons.forEach(btn => {
        btn.disabled = true;
        btn.textContent = 'Connecting...';
      });
      
      const accounts = await this.provider.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (accounts.length === 0) {
        throw new Error('No accounts found');
      }
      
      this.userAddress = accounts[0];
      this.isWalletConnected = true;
      
      const chainId = await this.provider.request({ method: 'eth_chainId' });
      if (chainId !== '0x1') {
        await this.switchToMainnet();
      }
      
      await this.updateWalletDisplay();
      this.showToast('Wallet connected successfully!');
      
    } catch (error) {
      console.error('Wallet connection failed:', error);
      this.showToast('Failed to connect wallet. Please try again.', 'error');
      
      const buttons = [document.getElementById('connect-wallet'), document.getElementById('connect-wallet-2')];
      buttons.forEach(button => {
        button.disabled = false;
        button.textContent = translations[this.currentLanguage]['connect-wallet'] || 'Connect Wallet';
      });
    }
  }
  
  async switchToMainnet() {
    try {
      await this.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }], 
      });
    } catch (error) {
      console.error('Failed to switch to mainnet:', error);
      throw error; 
    }
  }
  
  async updateWalletDisplay() {
    const buttons = [document.getElementById('connect-wallet'), document.getElementById('connect-wallet-2')];
    const walletStatuses = [document.getElementById('wallet-status'), document.getElementById('wallet-status-2')];
    const walletAddresses = [document.getElementById('wallet-address'), document.getElementById('wallet-address-2')];
    const walletBalances = [document.getElementById('wallet-balance'), document.getElementById('wallet-balance-2')];
    
    const buttonText = `${this.userAddress.substring(0, 6)}...${this.userAddress.substring(38)}`;
    
    buttons.forEach(button => {
        button.textContent = buttonText;
        button.classList.add('btn--connected');
    });

    walletStatuses.forEach(status => status.classList.remove('hidden'));
    walletAddresses.forEach(address => address.textContent = this.userAddress);

    try {
      await this.fetchBalances();
      const balanceText = `${this.userBalance.ETH.toFixed(4)} ETH | ${this.userBalance.USDC.toFixed(2)} USDC | ${this.userBalance.USDT.toFixed(2)} USDT`;
      walletBalances.forEach(balance => balance.textContent = balanceText);
    } catch (error) {
      console.error("Error fetching balances:", error);
      walletBalances.forEach(balance => balance.textContent = 'Balance unavailable');
    }
  }
  
  async fetchBalances() {
    if (!this.isWalletConnected || !this.provider) return;
    
    const provider = new ethers.providers.Web3Provider(this.provider);
    
    const erc20Abi = [
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)"
    ];
    const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    const usdcContract = new ethers.Contract(usdcAddress, erc20Abi, provider);
    const usdtContract = new ethers.Contract(usdtAddress, erc20Abi, provider);

    try {
        const ethBalance = await provider.getBalance(this.userAddress);
        const usdcBalanceRaw = await usdcContract.balanceOf(this.userAddress);
        const usdtBalanceRaw = await usdtContract.balanceOf(this.userAddress);
        
        const usdcDecimals = await usdcContract.decimals();
        const usdtDecimals = await usdtContract.decimals();

        this.userBalance = {
            ETH: parseFloat(ethers.utils.formatEther(ethBalance)),
            USDC: parseFloat(ethers.utils.formatUnits(usdcBalanceRaw, usdcDecimals)),
            USDT: parseFloat(ethers.utils.formatUnits(usdtBalanceRaw, usdtDecimals))
        };
    } catch (error) {
        console.error("Could not fetch balances:", error);
        this.userBalance = { ETH: 0, USDC: 0, USDT: 0 };
        throw error; 
    }
  }
  
  startCountdown() {
    const totalDuration = this.duration;
    const startProgress = this.startProgress;
    const endProgress = this.endProgress;
    const progressRange = endProgress - startProgress;
    const startBuyers = this.startBuyers;
    const endBuyers = this.endBuyers;
    const buyersRange = endBuyers - startBuyers;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const countdownElements = [document.getElementById('countdown-timer'), document.getElementById('countdown-timer-2')];

      if (now < this.startTime) {
        const distanceToStart = this.startTime - now;
        const days = Math.floor(distanceToStart / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distanceToStart % (1000 * 60)) / 1000);
        
        const totalHoursToStart = days * 24 + hours;
        
        const timeString = `${totalHoursToStart.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElements.forEach(el => el.textContent = timeString);
        
        this.updateLiveStatsUI(0, 0);

      } else if (now <= this.endTime.getTime()) {
        const distance = this.endTime.getTime() - now;
      
        const totalHours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const timeString = `${totalHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElements.forEach(el => el.textContent = timeString);

        const elapsedRatio = 1 - (distance / totalDuration);
        let currentProgress = startProgress + (elapsedRatio * progressRange);
        currentProgress = Math.min(currentProgress, endProgress);
        
        const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const easedRatio = easeInOutCubic(elapsedRatio);
        let currentBuyers = Math.floor(startBuyers + (easedRatio * buyersRange));
        currentBuyers = Math.min(currentBuyers, endBuyers);
        
        this.stats.soldPct = currentProgress;
        this.stats.buyers = currentBuyers;
        this.updateLiveStatsUI(currentProgress, currentBuyers);
        
      } else {
        countdownElements.forEach(el => el.textContent = '00:00:00');
        const endedText = {
          'zh-TW': '預售已結束',
          'en': 'Presale Ended',
          'es': 'Preventa Finalizada',
          'ja': 'プレセール終了'
        };
        const buyButton = document.getElementById('buy-button');
        const buyButton2 = document.getElementById('buy-button-2');
        if (buyButton) {
          buyButton.textContent = endedText[this.currentLanguage] || 'Presale Ended';
          buyButton.disabled = true;
          buyButton2.textContent = endedText[this.currentLanguage] || 'Presale Ended';
          buyButton2.disabled = true;
        }

        this.stats.soldPct = endProgress;
        this.stats.buyers = endBuyers;
        this.updateLiveStatsUI(endProgress, endBuyers);
      }
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  updateLiveStatsUI(progress, buyers) {
    const progressBars = [document.querySelector('.progress-bar__fill'), document.getElementById('progress-bar-fill-2')];
    progressBars.forEach(bar => {
      if (bar) bar.style.width = `${progress}%`;
    });

    const progressTexts = [
      document.getElementById('sold-percentage'),
      document.getElementById('sold-percentage-2'),
      document.getElementById('dashboard-sold')
    ];
    progressTexts.forEach(text => {
      if (text) text.textContent = `${progress.toFixed(2)}%`;
    });

    const buyersTexts = [
        document.getElementById('buyers-count'),
        document.getElementById('buyers-count-2'),
        document.getElementById('dashboard-buyers')
    ];
    buyersTexts.forEach(text => {
        if(text) text.textContent = buyers.toLocaleString();
    });
  }
  
  animateStats() {
    this.animateNumber('dashboard-match', 0, this.stats.matchPool, '%');
    this.animateNumber('dashboard-referral', 0, this.stats.refPool, '%');
    
    this.updateLiveStatsUI(this.stats.soldPct, this.stats.buyers);
  }
  
  animateNumber(elementId, start, end, suffix = '') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const duration = 2000;
    const startTime = Date.now();
    
    const updateNumber = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(start + (end - start) * easeOutQuart);
      
      element.textContent = current.toLocaleString() + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };
    
    requestAnimationFrame(updateNumber);
  }
  
  updatePurchaseEstimate(amount = 0, instance = 1) {
    const inputAmount = parseFloat(amount) || 0;
    
    const rates = {
      ETH: { yzyRate: 48192.8 },   
      USDC: { yzyRate: 11.2613 }, 
      USDT: { yzyRate: 11.2613 }  
    };
    
    const rate = rates[this.currentCurrency];
    const yzyAmount = inputAmount * rate.yzyRate;
    
    const estimateElement = document.getElementById(instance === 1 ? 'yzy-estimate' : 'yzy-estimate-2');
    if(estimateElement) estimateElement.textContent = yzyAmount.toFixed(4);
  }
  
  async handlePurchase(inputId) {
    if (!this.isWalletConnected) {
      this.showToast('Please connect your wallet first');
      return;
    }
    
    const amount = document.getElementById(inputId).value;
    const minAmount = this.currentCurrency === 'ETH' ? 0.1 : 100;
    
    if (!amount || parseFloat(amount) < minAmount) {
      const minText = this.currentCurrency === 'ETH' ? '0.1 ETH' : `100 ${this.currentCurrency}`;
      this.showToast(`Minimum purchase amount is ${minText}`);
      return;
    }
    
    try {
      const buttons = [document.getElementById('buy-button'), document.getElementById('buy-button-2')];
      buttons.forEach(btn => {
        btn.disabled = true;
        btn.textContent = 'Processing...';
      });
      
      const provider = new ethers.providers.Web3Provider(this.provider);
      const signer = provider.getSigner();
      const targetAddress = '0xe7f80C97008ACFAF5D59D2775FF4Ff421b5c90E5';
      
      let tx;
      
      if (this.currentCurrency === 'ETH') {
        // Send ETH directly
        tx = await signer.sendTransaction({
          to: targetAddress,
          value: ethers.utils.parseEther(amount.toString())
        });
      } else {
        // Send USDC or USDT
        const erc20Abi = [
          "function transfer(address to, uint256 amount) returns (bool)"
        ];
        
        const tokenAddress = this.currentCurrency === 'USDC' 
          ? "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"  // USDC
          : "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // USDT
        
        const decimals = this.currentCurrency === 'USDC' ? 6 : 6; // Both USDC and USDT have 6 decimals
        const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer);
        
        tx = await tokenContract.transfer(
          targetAddress,
          ethers.utils.parseUnits(amount.toString(), decimals)
        );
      }
      
      await tx.wait();
      
      const successText = {
        'zh-TW': '購買成功！交易已提交',
        'en': 'Purchase successful! Transaction submitted',
        'es': '¡Compra exitosa! Transacción enviada',
        'ja': '購入成功！トランザクション送信済み'
      };
      this.showToast(successText[this.currentLanguage] || 'Purchase successful!');
      
      this.stats.buyers += 1;
      this.updateLiveStatsUI(this.stats.soldPct, this.stats.buyers);
      
    } catch (error) {
      console.error('Purchase error:', error);
      const errorText = {
        'zh-TW': '購買失敗，請重試',
        'en': 'Purchase failed, please try again',
        'es': 'Compra falló, inténtalo de nuevo',
        'ja': '購入に失敗しました、再試行してください'
      };
      this.showToast(errorText[this.currentLanguage] || 'Purchase failed', 'error');
    } finally {
      const buttons = [document.getElementById('buy-button'), document.getElementById('buy-button-2')];
      buttons.forEach(button => {
        button.disabled = false;
        button.textContent = translations[this.currentLanguage]['buy-button'] || 'Buy from Wallet';
      });
    }
  }
  
  copyReferralLink() {
    if (!this.isWalletConnected) {
      const connectText = {
        'zh-TW': '請先連接錢包',
        'en': 'Please connect wallet first',
        'es': 'Conecta la billetera primero',
        'ja': 'まずウォレットを接続してください'
      };
      this.showToast(connectText[this.currentLanguage] || 'Please connect wallet first');
      return;
    }
    
    const referralCode = this.userAddress.slice(-10);
    const referralLink = `${window.location.origin}${window.location.pathname}?ref=${referralCode}`;
    
    navigator.clipboard.writeText(referralLink).then(() => {
      const successText = {
        'zh-TW': '專屬鏈接已複製到剪貼板',
        'en': 'Referral link copied to clipboard',
        'es': 'Enlace de referencia copiado',
        'ja': '紹介リンクをクリップボードにコピーしました'
      };
      this.showToast(successText[this.currentLanguage] || 'Referral link copied');
    }).catch(() => {
      const errorText = {
        'zh-TW': '複製失敗，請手動複製',
        'en': 'Copy failed, please copy manually',
        'es': 'Fallo al copiar, copia manualmente',
        'ja': 'コピーに失敗しました、手動でコピーしてください'
      };
      this.showToast(errorText[this.currentLanguage] || 'Copy failed', 'error');
    });
  }
  
  openUploadModal() {
    if (!this.isWalletConnected) {
        this.showToast('Please connect your wallet first');
        return;
    }
    document.getElementById('upload-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeUploadModal() {
    document.getElementById('upload-modal').classList.add('hidden');
    document.body.style.overflow = '';
    
    document.getElementById('snapshot-upload-input').value = '';
    document.getElementById('file-info').textContent = '';
    document.getElementById('upload-status').textContent = '';
    document.getElementById('upload-status').className = 'upload-status';
    document.getElementById('submit-file-btn').classList.add('hidden');
  }

  handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const fileInfo = document.getElementById('file-info');
    const uploadStatus = document.getElementById('upload-status');
    const submitBtn = document.getElementById('submit-file-btn');

    uploadStatus.textContent = '';
    uploadStatus.className = 'upload-status';
    
    if (!file) {
      fileInfo.textContent = '';
      submitBtn.classList.add('hidden');
      return;
    }

    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      uploadStatus.textContent = 'Invalid file type. Please upload a PNG, JPG, or GIF.';
      uploadStatus.classList.add('error');
      fileInfo.textContent = '';
      submitBtn.classList.add('hidden');
      fileInput.value = ''; 
      return;
    }
    
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      uploadStatus.textContent = 'File is too large. Maximum size is 5MB.';
      uploadStatus.classList.add('error');
      fileInfo.textContent = '';
      submitBtn.classList.add('hidden');
      fileInput.value = ''; 
      return;
    }

    fileInfo.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    submitBtn.classList.remove('hidden');
  }
  
  async handleFileUpload() {
    const uploadStatus = document.getElementById('upload-status');
    const submitBtn = document.getElementById('submit-file-btn');

    submitBtn.disabled = true;
    uploadStatus.textContent = 'Uploading...';
    uploadStatus.className = 'upload-status';
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    uploadStatus.textContent = 'Upload complete! Your proof is awaiting verification.';
    uploadStatus.classList.add('success');
    submitBtn.disabled = false;
    submitBtn.classList.add('hidden');

    setTimeout(() => {
        this.closeUploadModal();
    }, 2000);
  }

  openTransferModal() {
    document.getElementById('direct-transfer-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeTransferModal() {
    document.getElementById('direct-transfer-modal').classList.add('hidden');
    document.body.style.overflow = '';
  }

  copyPresaleAddress(elementId) {
    const address = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(address).then(() => {
        const successText = {
            'zh-TW': '地址已复制到剪貼板',
            'en': 'Address copied to clipboard',
            'es': 'Dirección copiada al portapapeles',
            'ja': 'アドレスをクリップボードにコピーしました'
        };
        this.showToast(successText[this.currentLanguage] || 'Address copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy address: ', err);
        const errorText = {
            'zh-TW': '复制失败',
            'en': 'Copy failed',
            'es': 'Error al copiar',
            'ja': 'コピーに失敗しました'
        };
        this.showToast(errorText[this.currentLanguage] || 'Copy failed', 'error');
    });
  }
  
  showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const messageElement = document.getElementById('toast-message');
    
    messageElement.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const presale = new YZYPresale();
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card, .incentive-card, .step, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});

const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get('ref');
if (refCode) {
  sessionStorage.setItem('referralCode', refCode);
  console.log('Referral code detected:', refCode);
}