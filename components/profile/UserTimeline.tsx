"use client";

import { Text, Timeline } from "@mantine/core";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function UserTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Timeline active={1} bulletSize={24} lineWidth={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Timeline.Item
            bullet={<IconGitBranch size={12} />}
            title="新しいブランチ"
          >
            <Text c="dimmed" size="sm">
              マスターから新しいブランチ{" "}
              <Text variant="link" component="span" inherit>
                fix-notifications
              </Text>{" "}
              を作成しました
            </Text>
            <Text size="xs" mt={4}>
              2時間前
            </Text>
          </Timeline.Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Timeline.Item bullet={<IconGitCommit size={12} />} title="コミット">
            <Text c="dimmed" size="sm">
              <Text variant="link" component="span" inherit>
                fix-notificationsブランチ
              </Text>
              に23のコミットをプッシュしました
            </Text>
            <Text size="xs" mt={4}>
              52分前
            </Text>
          </Timeline.Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Timeline.Item
            title="プルリクエスト"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text c="dimmed" size="sm">
              プルリクエストを提出しました
              <Text variant="link" component="span" inherit>
                通知メッセージの修正 (#187)
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              34分前
            </Text>
          </Timeline.Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Timeline.Item
            title="コードレビュー"
            bullet={<IconMessageDots size={12} />}
          >
            <Text c="dimmed" size="sm">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{" "}
              がプルリクエストにコードレビューを残しました
            </Text>
            <Text size="xs" mt={4}>
              12分前
            </Text>
          </Timeline.Item>
        </motion.div>
      </Timeline>
    </motion.div>
  );
}
