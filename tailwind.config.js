/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 新的主色調：鼠尾草綠 / 抹茶綠
        sage: {
          50: "#F2F7F5", // 極淺背景點綴
          100: "#E3ECE9", // 淺色塊背景
          200: "#C5D6D0", // 線條、邊框
          300: "#A7BFB7", // 次要文字、圖示
          400: "#89A89E", // 淺按鈕 hover
          500: "#6B9185", // 🟢 主色 (按鈕、選中狀態)
          600: "#56746A", // 主色 Hover
          700: "#405750",
        },
        // 調整後的牛奶色 (更乾淨、偏米白，減少黃感)
        milk: {
          50: "#FAFAF9", // 全域背景
          100: "#F5F5F2", // 卡片與區塊背景
          200: "#EBEBE8", // 分隔線
          300: "#DCDCD9",
        },
        // 原本的茶/咖啡色 (保留用於文字和暖色點綴)
        tea: {
          100: "#F0EAE2",
          200: "#E2D5C8",
          300: "#CDBBA7",
          400: "#BFA890",
          500: "#A68A6D", // 舊主色 (現在降級為暖色點綴)
        },
        coffee: {
          600: "#8C735A",
          700: "#6F5B47",
          800: "#524334", // 次要標題
          900: "#3B3025", // 主要文字 (最深)
        },
      },
      fontFamily: {
        sans: [
          '"Hiragino Maru Gothic ProN"',
          '"Rounded Mplus 1c"',
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
