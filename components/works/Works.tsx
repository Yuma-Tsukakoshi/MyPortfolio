"use client";

import { Carousel } from "@mantine/carousel";
import { Container } from "@mantine/core";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";

import { ProjectCard } from "./ProjectCard";
import styles from "./Works.module.css";

export function Works() {
  const projects = [
    {
      title: "matomeru（SaaS開発）",
      period: "2024年4月〜現在",
      description:
        "企業間でのお祝い花に関する業務を効率化する法人向けSaaS。贈り手と受け手の双方がシステムを通じて簡単に手続きを行える仕組みを構築。",
      role: "バックエンドAPI設計、フロントエンド開発、要件定義・データベース設計",
      achievement:
        "初期リリースを達成し、リリース後のユーザーの声を反映した運用改善にも従事。クライアントとの要件調整を通じて、ビジネス要件を技術に落とし込むスキルを習得。",
      techStack: ["Laravel", "Next.js", "PostgreSQL", "Docker", "AWS"],
      company: "株式会社アンチパターン",
      imageUrl: "/images/projects/matomeru.png",
      externalUrl: "https://green-road.co.jp/business/matomeru",
    },
    {
      title: "コミュニティサイトリニューアル",
      period: "2023年11月〜2024年1月",
      description:
        "所属するプログラミング学習コミュニティの公式ホームページをリニューアル。学生主体の魅力を伝えるデザインを目指し、短期間での開発を実現。",
      role: "UI/UX設計、フロントエンド開発、タスク管理・進行管理",
      achievement:
        "新規メンバーの参加率向上を達成。短期間での開発でタスクの優先度設定や迅速な意思決定を学んだ。",
      techStack: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
      company: "株式会社アンチパターン",
      imageUrl: "/images/projects/community.png",
      externalUrl: "https://posse.community/",
    },
    {
      title: "AWSインフラ構築",
      period: "2025年1月〜2025年5月",
      description:
        "AWSを用いたインフラ構築。検証環境と本番環境の構築、CDKによるInfrastructure as Code（IaC）の導入。",
      role: "インフラ設計、CDKによる自動化、セキュリティ設定",
      achievement:
        "クラウド環境の管理・自動化により運用効率向上。インフラ設計から構築までのプロセスを体系的に学んだ。",
      techStack: ["AWS CDK", "EC2", "S3", "RDS", "TypeScript"],
      company: "株式会社アンチパターン",
      imageUrl: "/images/projects/aws.png",
    },
    {
      title: "開発フローの最適化",
      period: "2025年2月〜2025年3月",
      description:
        "スクラム開発の運用改善。開発フローの自動化・効率化を目指し、タスク管理やベロシティの自動集計を外部サービスを使用せずにCI/CDの最適化を実現。",
      role: "開発フロー設計、スクラムイベントの運用改善、GitHub Projects の管理",
      achievement:
        "チームの生産性を向上させ、効率的なタスク管理を実現。スクラムマスターとしてのチーム運営も経験。",
      techStack: ["GitHub Actions", "Google Apps Script"],
      company: "株式会社アンチパターン",
      imageUrl: "/images/projects/workflow.png",
    },
    {
      title: "AI在庫予測システム",
      period: "2024年6月〜2025年4月",
      description:
        "天候、シーズン、トレンド、クーポン施策に基づく売上変動を分析し、最適な発注タイミングと数量を算出。アパレルブランドの在庫最適化を支援。",
      role: "フロントエンドUI設計・実装、バックエンドAPI開発、データベース設計、CI/CD構築",
      achievement:
        "システムの自動化により、在庫管理の効率化を実現。スタートアップ環境での自主性・柔軟性を身につけ、チーム間連携の重要性を実感。",
      techStack: ["Flask", "Next.js", "MongoDB", "Machine Learning"],
      company: "株式会社ハイクリ",
      imageUrl: "/images/projects/ai-inventory.png",
    },
    {
      title: "OCRアプリケーション",
      period: "2024年3月〜2024年12月",
      description:
        "紙ベースのPDFから情報を抽出し、CSVに出力。医療費の帳票、年末調整書類、ふるさと納税証明書など多様な書類に対応。",
      role: "OCRロジックの設計・実装、前処理・正規表現による精度向上",
      achievement:
        "ドメイン知識（書類フォーマット）を活かし、精度向上を実現。業務自動化における技術と実務の橋渡しの重要性を学んだ。",
      techStack: ["Python", "OpenCV", "Google Vision API"],
      company: "株式会社Pluszero",
      imageUrl: "/images/projects/ocr.png",
    },
    {
      title: "Pulse Map",
      period: "2025年3月〜2025年5月",
      description:
        "従業員のモチベーション管理・向上を目的とした人事向けAI施策提案サービス。少人数のチームで効率的な開発を実現。",
      role: "プロジェクトマネージャー/フロント・バックエンド",
      achievement:
        "少人数での効率的な開発手法を学び、勉強会を通じたチームの成長を促進。エンドポイント設計とフロント接続の初挑戦をクリア。",
      techStack: ["TypeScript", "Laravel", "MySQL", "Docker"],
      company: "チーム開発",
      imageUrl: "/images/projects/pulse-map.png",
    },

    {
      title: "新歓アプリ",
      period: "2025年2月",
      description:
        "所属団体の透明性向上を目的とし、新入生が気軽に馴染める環境を提供。0からの個人開発を経験。",
      role: "フルスタック開発（フロントエンド・バックエンド）",
      achievement:
        "TypeScriptの初学習から実践導入、PrismaとGASの連携を通じたアンケート収集を実現。ユーザー視点の重要性を学んだ。",
      techStack: ["TypeScript", "Mantine", "TailwindCSS", "Prisma", "GAS"],
      company: "個人開発",
      imageUrl: "/images/projects/welcome-app.png",
    },
  ];

  return (
    <Container size="lg" className={styles.container + " py-20"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Works" subtitle="開発経験" />

        <div className={styles.projectsSection}>
          <Carousel
            withIndicators
            slideSize="33.333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
            classNames={{
              root: styles.carouselWrapper,
            }}
          >
            {projects.map((project, index) => (
              <Carousel.Slide key={index}>
                <ProjectCard {...project} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </Container>
  );
}
