#!/bin/bash

# 1. 編譯專案
echo "🚀 正在編譯專案..."
npm run build

# 2. 部署到 Firebase
echo "🌍 正在部署到 Firebase..."
firebase deploy

# 3. Git 操作
echo "💾 準備備份到 GitHub..."
git add .

# 詢問提交訊息
read -p "請輸入本次 Commit 訊息: " msg

# 如果沒輸入，就給個預設值
if [ -z "$msg" ]; then
  msg="Update at $(date +'%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$msg"
git push

echo "🎉 部署與備份完成！"