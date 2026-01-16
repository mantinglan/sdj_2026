import React from "react";

const Header = ({ title, icon: Icon, children, rightContent }) => {
  return (
    // sticky top-0 確保它固定在頂部
    <div className="sticky top-0 z-30">
      {/* 🎨 樣式升級重點：
         1. bg-white/90 + backdrop-blur: 確保不透明，內容滑過去時不會透出來干擾。
         2. rounded-b-[2rem]: 底部超大圓角，創造「卡片感」。
         3. shadow-sm + border-b: 增加層次感。
      */}
      <div className="bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] border-b border-milk-200/60 rounded-b-[2rem] px-5 pt-12 pb-5 transition-all duration-300">
        {/* 上半部：標題與按鈕 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 text-coffee-800">
            {Icon && (
              <div className="w-10 h-10 rounded-2xl bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-600 shadow-sm">
                <Icon size={20} />
              </div>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-coffee-900">
              {title}
            </h1>
          </div>

          {/* 右側內容 (例如同步按鈕) */}
          {rightContent && (
            <div className="flex items-center">{rightContent}</div>
          )}
        </div>

        {/* 下半部：擴充內容 (例如日期選單) */}
        {children && <div className="mt-4 animate-fade-in">{children}</div>}
      </div>

      {/* 裝飾性陰影：讓 Header 看起來更像浮在空中 */}
      <div className="h-6 bg-gradient-to-b from-coffee-900/5 to-transparent mx-6 rounded-b-full -mt-2 opacity-40 pointer-events-none filter blur-sm"></div>
    </div>
  );
};

export default Header;
