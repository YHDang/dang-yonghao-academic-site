(function (root, factory) {
  const content = factory();
  if (typeof module === 'object' && module.exports) module.exports = content;
  root.SITE_CONTENT = content;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const publications = [
    { title: 'GaussianCAD: Robust self-supervised CAD reconstruction from three orthographic views using 3D Gaussian Splatting', venue: 'Computers & Electrical Engineering', year: 2026, url: 'https://dblp.org/rec/journals/cee/ZhouLYHDYLXWDY26', urlLabel: 'DBLP' },
    { title: 'ActivityCLIP: Enhancing group activity recognition by mining complementary information from text to supplement image modality', venue: 'Pattern Recognition', year: 2026, url: 'https://dblp.org/rec/journals/pr/XuYZD26', urlLabel: 'DBLP' },
    { title: 'Facial 3D Regional Structural Motion Representation Using Lightweight Point Cloud Networks for Micro-Expression Recognition', venue: 'IEEE Transactions on Affective Computing', year: 2026, url: 'https://dblp.org/rec/journals/taffco/ZhangYQDWZL26', urlLabel: 'DBLP' },
    { title: '3DGAA: Realistic and Robust 3D Gaussian-Based Adversarial Attack for Autonomous Driving', venue: 'IEEE Transactions on Information Forensics and Security', year: 2026, url: 'https://dblp.org/rec/journals/tifs/ZhangWZZZDY26', urlLabel: 'DBLP' },
    { title: 'ESG-Net: Event-aware semantic guided network for dense audio-visual event localization', venue: 'IEEE Transactions on Multimedia', year: 2026, url: 'https://dblp.org/rec/journals/tmm/LiDXWY26', urlLabel: 'DBLP' },
    { title: 'Multi-granularity query network with adaptive category feature embedding for behavior recognition', venue: 'IEEE Transactions on Multimedia', year: 2026, authors: 'Nuoer Long, Yonghao Dang, Kaiwen Yang, et al.', url: 'https://dblp.org/rec/journals/tmm/LongDYXCTKLYWS26', urlLabel: 'DBLP' },
    { title: 'Exploring Position Encoding Mechanism in Diffusion U-Net for Training-free High-resolution Image Generation', venue: 'AAAI', year: 2026, url: 'https://dblp.org/rec/conf/aaai/ZhouCMYDY26', urlLabel: 'DBLP' },
    { title: 'ResDiT: Evoking the Intrinsic Resolution Scalability in Diffusion Transformers', venue: 'CVPR', year: 2026, url: 'https://dblp.org/rec/conf/cvpr/MaZYCDY26', urlLabel: 'DBLP' },
    { title: 'A generically Contrastive Spatiotemporal Representation Enhancement for 3D skeleton action recognition', venue: 'Pattern Recognition', year: 2025, url: 'https://dblp.org/rec/journals/pr/ZhangYD25', urlLabel: 'DBLP' },
    { title: 'Quart-Online: Latency-Free Multimodal Large Language Model for Quadruped Robot Learning', venue: 'ICRA', year: 2025, url: 'https://dblp.org/rec/conf/icra/TongDFWZCSZZDHL25', urlLabel: 'DBLP' },
    { title: '3DWSNet: A novel 3D wavelet spiking neural network for event-based action recognition', venue: 'IROS', year: 2025, authors: 'Junkang Fang, Yonghao Dang, Wending Zhao, Bo Yu, Zehao Wang, Jianqin Yin', url: 'https://dblp.org/rec/conf/iros/FangDZYWY25', urlLabel: 'DBLP' },
    { title: 'Towards Physically Realizable Adversarial Attacks in Embodied Vision Navigation', venue: 'IROS', year: 2025, url: 'https://dblp.org/rec/conf/iros/ChenTQDZWY25', urlLabel: 'DBLP' },
    { title: 'MaskSem: Semantic-Guided Masking for Learning 3D Hybrid High-Order Motion Representation', venue: 'IROS', year: 2025, url: 'https://dblp.org/rec/conf/iros/WeiZDY25', urlLabel: 'DBLP' },
    { title: 'Physics-constrained attack against convolution-based human motion prediction', venue: 'Neurocomputing', year: 2024, url: 'https://dblp.org/rec/journals/ijon/DuanZLDY24', urlLabel: 'DBLP' },
    { title: 'DHRNet: A dual-path hierarchical relation network for multi-person pose estimation', venue: 'Knowledge-Based Systems', year: 2024, authors: 'Yonghao Dang, Jianqin Yin, Liyuan Liu, Pengxiang Ding, Yuan Sun, Yanzhu Hu', url: 'https://dblp.org/rec/journals/kbs/DangYLDSH24', urlLabel: 'DBLP' },
    { title: 'Kinematics modeling network for video-based human pose estimation', venue: 'Pattern Recognition', year: 2024, authors: 'Yonghao Dang, Jianqin Yin, Shaojie Zhang, Jiping Liu, Yanzhu Hu', url: 'https://dblp.org/rec/journals/pr/DangYZLH24', urlLabel: 'DBLP' },
    { title: 'SiT-MLP: A Simple MLP With Point-Wise Topology Feature Learning for Skeleton-Based Action Recognition', venue: 'IEEE Transactions on Circuits and Systems for Video Technology', year: 2024, url: 'https://dblp.org/rec/journals/tcsv/ZhangYDF24', urlLabel: 'DBLP' },
    { title: 'Leveraging the Video-Level Semantic Consistency of Event for Audio-Visual Event Localization', venue: 'IEEE Transactions on Multimedia', year: 2024, url: 'https://dblp.org/rec/journals/tmm/JiangYD24', urlLabel: 'DBLP' },
    { title: 'Learning Constrained Dynamic Correlations in Spatiotemporal Graphs for Motion Prediction', venue: 'IEEE Transactions on Neural Networks and Learning Systems', year: 2024, url: 'https://dblp.org/rec/journals/tnn/FuYDLY24', urlLabel: 'DBLP' },
    { title: 'Full-Frequency Dynamic Convolution: A Physical Frequency-Dependent Convolution for Sound Event Detection', venue: 'ICPR', year: 2024, url: 'https://dblp.org/rec/conf/icpr/YueZMDYT24', urlLabel: 'DBLP' },
    { title: 'Temporal Text Prompts for Skeleton-based Action Recognition', venue: 'ROBIO', year: 2024, url: 'https://dblp.org/rec/conf/robio/LiuZDZY24', urlLabel: 'DBLP' },
    { title: 'Relation-based associative joint location for human pose estimation in videos', venue: 'IEEE Transactions on Image Processing', year: 2022, authors: 'Yonghao Dang, Jianqin Yin, Shaojie Zhang', url: 'https://dblp.org/rec/journals/tip/DangYZ22', urlLabel: 'DBLP' },
    { title: 'Energy-Based Periodicity Mining With Deep Features for Action Repetition Counting in Unconstrained Videos', venue: 'IEEE Transactions on Circuits and Systems for Video Technology', year: 2021, url: 'https://dblp.org/rec/journals/tcsv/YinWZYLDLL21', urlLabel: 'DBLP' },
    { title: 'DWnet: Deep-wide network for 3D action recognition', venue: 'Robotics and Autonomous Systems', year: 2020, authors: 'Yonghao Dang, Fuxing Yang, Jianqin Yin', url: 'https://dblp.org/rec/journals/ras/DangYY20', urlLabel: 'DBLP' },
    { title: 'DBNet: A New Generalized Structure Efficient for Classification', venue: 'ROBIO', year: 2019, url: 'https://dblp.org/rec/conf/robio/DangYSY019', urlLabel: 'DBLP' },
    { title: 'Estimating Cement Compressive Strength from Microstructure Images Using Broad Learning System', venue: 'SMC', year: 2018, url: 'https://dblp.org/rec/conf/smc/DangWYZFG18', urlLabel: 'DBLP' }
  ];

  return {
    publications,
    zh: {
      languageName: '中文',
      nav: { about: '简介', research: '研究方向', publications: '论文', awards: '荣誉', contact: '联系' },
      hero: {
        eyebrow: '中央财经大学 · 信息学院',
        title: '党永浩',
        portraitAlt: '党永浩证件照',
        role: '助理教授',
        summary: '研究计算机视觉与具身智能，关注视频理解、多模态感知和人体行为分析。',
        primary: '查看全部论文', secondary: '联系我'
      },
      about: {
        kicker: '关于', title: '让视觉理解走向真实场景',
        body: '党永浩现任中央财经大学信息学院助理教授。2023 年获北京邮电大学控制科学与工程专业工学博士学位，此前于济南大学获得计算机科学与技术专业学士学位。2023 年至 2026 年在北京邮电大学人工智能学院从事博士后研究。',
        timeline: [
          { date: '2026.06 — 至今', title: '助理教授', detail: '中央财经大学 · 信息学院' },
          { date: '2023.10 — 2026.05', title: '博士后', detail: '北京邮电大学 · 人工智能学院' },
          { date: '2018.09 — 2023.09', title: '工学博士', detail: '北京邮电大学 · 控制科学与工程' },
          { date: '2014.09 — 2018.06', title: '工学学士', detail: '济南大学 · 计算机科学与技术' }
        ]
      },
      research: {
        kicker: '研究方向', title: '从视频中的人体动作，到具身智能体的感知与行动',
        body: '研究聚焦视觉与多模态信息如何帮助机器理解人的动作、周围环境和任务意图，并探索这些能力在具身系统中的应用。',
        items: [
          { number: '01', title: '人体姿态与动作理解', detail: '建模视频中的关节关系、运动线索和群体行为。', image: 'assets/research-direction-1.png', alt: '街景行人检测研究画面' },
          { number: '02', title: '多模态感知与理解', detail: '结合图像、视频、音频、文本和空间信息进行分析。', image: 'assets/research-direction-2.png', alt: '多模态语义交互与混合专家模型结构图' },
          { number: '03', title: '具身智能', detail: '研究视觉、语言与动作之间的联系，支持机器人理解任务并与环境交互。', image: 'assets/research-direction-3.png', alt: '机器人操作研究场景' }
        ],
        figureLabel: '研究配图由研究者提供。'
      },
      publicationsHeading: { kicker: '论文', title: '全部论文', body: '按发表年份排序，收录 DBLP 作者页中的期刊与会议论文；预印本及后续更新请见 DBLP。' },
      awards: {
        kicker: '荣誉', title: '竞赛与教学成果',
        items: [
          { year: '2026', title: '中国物流与采购联合会科技进步二等奖' },
          { year: '2025', title: '校级教学成果一等奖' },
          { year: '2024', title: '世界机器人大赛首届太空机器人竞赛 · 全国二等奖' },
          { year: '2023', title: 'CVPR Workshop Accessibility, Vision, and Autonomy Challenge · Keypoint Track 全球第二' },
          { year: '2022', title: 'ECCV Workshop JRDB Pose Estimation Task · 全球第一' }
        ]
      },
      contact: {
        kicker: '联系', title: '欢迎学术交流与合作',
        body: '党永浩 · 助理教授\n中央财经大学信息学院', email: 'dyh@cufe.edu.cn', emailLabel: '发送邮件',
        scholarLabel: 'Google Scholar', scholarUrl: 'https://scholar.google.com/citations?user=nurxtgMAAAAJ&hl=zh-CN',
        dblpLabel: 'DBLP 作者页', dblpUrl: 'https://dblp.org/pid/234/0603.html',
        institutionLabel: '学院主页', institutionUrl: 'https://ie.cufe.edu.cn/info/1389/7607.htm',
        footer: '中央财经大学 · 信息学院'
      },
      labels: { venue: '发表', link: '论文链接', imagePlaceholder: '配图待补充', language: '切换语言', source: '资料来源', navigation: '主导航', skip: '跳至主要内容' }
    },
    en: {
      languageName: 'English',
      nav: { about: 'About', research: 'Research', publications: 'Publications', awards: 'Awards', contact: 'Contact' },
      hero: {
        eyebrow: 'School of Information · Central University of Finance and Economics',
        title: 'Yonghao Dang',
        portraitAlt: 'Portrait of Yonghao Dang',
        role: 'Assistant Professor',
        summary: 'Research in computer vision and embodied intelligence, with a focus on video understanding, multimodal perception, and human behavior analysis.',
        primary: 'All publications', secondary: 'Get in touch'
      },
      about: {
        kicker: 'About', title: 'Visual understanding for real-world settings',
        body: 'Yonghao Dang is an Assistant Professor at the School of Information, Central University of Finance and Economics. He received his Ph.D. in Control Science and Engineering from Beijing University of Posts and Telecommunications in 2023, after earning a B.Eng. in Computer Science and Technology from University of Jinan. From 2023 to 2026, he conducted postdoctoral research at the School of Artificial Intelligence, BUPT.',
        timeline: [
          { date: 'Jun 2026 — Present', title: 'Assistant Professor', detail: 'Central University of Finance and Economics · School of Information' },
          { date: 'Oct 2023 — May 2026', title: 'Postdoctoral Researcher', detail: 'Beijing University of Posts and Telecommunications · School of Artificial Intelligence' },
          { date: 'Sep 2018 — Sep 2023', title: 'Ph.D. in Control Science and Engineering', detail: 'Beijing University of Posts and Telecommunications' },
          { date: 'Sep 2014 — Jun 2018', title: 'B.Eng. in Computer Science and Technology', detail: 'University of Jinan' }
        ]
      },
      research: {
        kicker: 'Research', title: 'From human motion in video to perception and action in embodied systems',
        body: 'His work studies how visual and multimodal information can help machines understand human actions, surrounding scenes, and task intent, and how these capabilities can support embodied systems.',
        items: [
          { number: '01', title: 'Human Pose and Action Understanding', detail: 'Modeling joint relations, motion cues, and group behavior in video.', image: 'assets/research-direction-1.png', alt: 'Street-scene pedestrian detection research frame' },
          { number: '02', title: 'Multimodal Perception and Understanding', detail: 'Analyzing images, video, audio, text, and spatial signals together.', image: 'assets/research-direction-2.png', alt: 'Architecture diagram of multimodal semantic interaction and mixture-of-experts model' },
          { number: '03', title: 'Embodied Intelligence', detail: 'Studying links between vision, language, and action so robots can interpret tasks and interact with their environment.', image: 'assets/research-direction-3.png', alt: 'Robot manipulation research scenes' }
        ],
        figureLabel: 'Research images supplied by the researcher.'
      },
      publicationsHeading: { kicker: 'Publications', title: 'All Publications', body: 'Journal and conference papers listed by year from the DBLP author record. See DBLP for preprints and updates.' },
      awards: {
        kicker: 'Awards', title: 'Competition and teaching recognition',
        items: [
          { year: '2026', title: 'Second Prize, Science and Technology Progress Award, China Federation of Logistics & Purchasing (中国物流与采购联合会科技进步二等奖)' },
          { year: '2025', title: 'First Prize, CUFE Teaching Achievement Award' },
          { year: '2024', title: 'Second Prize, inaugural Space Robot Competition, World Robot Contest' },
          { year: '2023', title: 'Second Place worldwide, Keypoint Track, CVPR Workshop Accessibility, Vision, and Autonomy Challenge' },
          { year: '2022', title: 'First Place worldwide, JRDB Pose Estimation Task, ECCV Workshop' }
        ]
      },
      contact: {
        kicker: 'Contact', title: 'Open to academic exchange and collaboration',
        body: 'Yonghao Dang · Assistant Professor\nSchool of Information, Central University of Finance and Economics', email: 'dyh@cufe.edu.cn', emailLabel: 'Email',
        scholarLabel: 'Google Scholar', scholarUrl: 'https://scholar.google.com/citations?user=nurxtgMAAAAJ&hl=zh-CN',
        dblpLabel: 'DBLP author page', dblpUrl: 'https://dblp.org/pid/234/0603.html',
        institutionLabel: 'Faculty profile', institutionUrl: 'https://ie.cufe.edu.cn/info/1389/7607.htm',
        footer: 'Central University of Finance and Economics · School of Information'
      },
      labels: { venue: 'Published in', link: 'Paper link', imagePlaceholder: 'Image to be added', language: 'Switch language', source: 'Sources', navigation: 'Primary navigation', skip: 'Skip to main content' }
    }
  };
});
