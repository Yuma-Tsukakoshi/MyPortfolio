import { Container } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";

import { SocialLink } from "@/components/atoms/SocialLink";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProfileInfo } from "@/components/molecules/ProfileInfo";
import { AboutMeData } from "@/types/about";

interface AboutMePresentationProps {
  data: AboutMeData;
}

export const AboutMePresentation = ({ data }: AboutMePresentationProps) => {
  return (
    <Container size="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="About me" subtitle="私について" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* 左側：写真 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/profile.jpg"
              alt="プロフィール画像"
              width={300}
              height={300}
              className="rounded-full shadow-lg mb-6"
            />
            <div className="flex gap-4">
              {data.socialLinks.map((link) => (
                <SocialLink key={link.name} link={link} />
              ))}
            </div>
          </motion.div>

          {/* 右側：情報 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ProfileInfo data={data} />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};
