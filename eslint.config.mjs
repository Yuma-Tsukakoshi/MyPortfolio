import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

// 現在のファイルのディレクトリを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompatの初期化
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLintの設定
const eslintConfig = [
  // フラット構造に移行するための設定
  {
    ignores: ["*.config.js"], // 無視するファイル/パターン
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      react: eslintPluginReact,
      "@typescript-eslint": typescriptEslintPlugin,
      prettier: eslintPluginPrettier,
      "unused-imports": eslintPluginUnusedImports,
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "react/react-in-jsx-scope": "off", // JSXでのReactスコープエラーを無効化
      "prettier/prettier": "warn",
    },
  },
  // `FlatCompat` を使った Next.js 固有の設定
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ),
  // 追加ルールの上書き
  {
    rules: {
      "react/react-in-jsx-scope": "off", // 必ず無効化
    },
  },
];

export default eslintConfig;
