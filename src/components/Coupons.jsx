import React from "react";
import Header from "./Header";
import { Ticket, ExternalLink, Tag } from "lucide-react";
import { couponData } from "../data/initialData";

const Coupons = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-milk-50 font-sans text-coffee-900">
      <Header title="優惠券專區" icon={Ticket} />

      <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-4">
        <div className="bg-sage-50 border border-sage-100 p-4 rounded-2xl mb-2 flex items-start gap-3">
          <div className="bg-sage-500 text-white p-2 rounded-xl">
            <Tag size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-sage-700">使用小撇步</p>
            <p className="text-xs text-sage-600/80 leading-relaxed mt-1">
              結帳前請先準備好畫面，部分優惠券需連網開啟動態條碼。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {couponData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-milk-200 rounded-[2rem] p-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group relative overflow-hidden"
            >
              {/* 背景裝飾 */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sage-50 rounded-full -mr-8 -mt-8 opacity-50 group-hover:scale-125 transition-transform"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-coffee-50 text-coffee-600 text-[10px] font-bold px-2 py-1 rounded-lg border border-coffee-100">
                    {item.category}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-tea-300 group-hover:text-sage-500 transition-colors"
                  />
                </div>

                <h3 className="text-lg font-bold text-coffee-800 mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-tea-400">{item.desc}</p>
              </div>

              {/* 裝飾性剪票口 (Coupon 風格) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-milk-50 rounded-r-full border-y border-r border-milk-200 -ml-[1px]"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-milk-50 rounded-l-full border-y border-l border-milk-200 -mr-[1px]"></div>
            </a>
          ))}
        </div>

        <div className="text-center text-tea-200 text-xs py-6">
          - 祝大家買得開心 -
        </div>
      </div>
    </div>
  );
};

export default Coupons;
